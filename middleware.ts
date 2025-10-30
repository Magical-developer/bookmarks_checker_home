import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "./lib/i18n-config";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales: string[] = [...i18n.locales];
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  const locale = matchLocale(languages, locales, i18n.defaultLocale);
  return locale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const userAgent = request.headers.get('user-agent') || '';

  // 优先直接处理 sitemap 和 robots.txt
  if (pathname === "/sitemap.xml" || pathname === "/robots.txt") {
    return NextResponse.next();
  }

  // 检测是否为爬虫
  const isBot = /bot|crawler|spider|crawling/i.test(userAgent);

  // 检查路径是否已包含语言前缀
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // 如果路径缺少语言前缀，则重定向
  if (pathnameIsMissingLocale) {
    let locale: string;
    
    // 对于爬虫，默认使用英语避免重定向问题
    if (isBot) {
      locale = i18n.defaultLocale;
    } else {
      locale = getLocale(request) || i18n.defaultLocale;
    }

    // 对于根路径，使用 rewrite 而不是 redirect 来避免爬虫问题
    if (pathname === "/") {
      return NextResponse.rewrite(new URL(`/${locale}`, request.url));
    }

    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // 排除API, Next.js内部文件, 和一些静态资源
    "/((?!api|_next/static|_next/image|favicon.ico|sw.js).*)",
  ],
};
