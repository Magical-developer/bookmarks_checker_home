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

  // 跳过SEO和系统文件，不进行语言重定向
  const skipPaths = [
    '/sitemap.xml',
    '/robots.txt',
    '/favicon.ico',
    '/.well-known',
  ];

  if (skipPaths.some(path => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // 检查路径是否已包含语言前缀
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // 如果是根路径且缺少语言前缀，进行重定向
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    
    // 确保不会创建无效的URL
    const newPathname = pathname === '/' ? '' : pathname;
    
    return NextResponse.redirect(
      new URL(`/${locale}${newPathname}`, request.url)
    );
  }
}

export const config = {
  matcher: [
    // 匹配所有路径，但排除：
    // - API路由 (/api)
    // - Next.js静态文件 (_next/static, _next/image)
    // - SEO文件 (sitemap.xml, robots.txt, favicon.ico)
    // - .well-known目录
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|\\.well-known).*)",
  ],
};
