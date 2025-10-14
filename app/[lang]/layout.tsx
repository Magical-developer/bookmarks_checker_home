import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { i18n } from "@/lib/i18n-config";
import { getDictionary } from "@/lib/getDictionary";
import ExtensionErrorHandler from "@/components/ExtensionErrorHandler";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export interface Props {
  params: { lang: "zh" | "en" };
}
export async function generateMetadata({
  params: { lang },
}: Props): Promise<Metadata> {
  const dict = await getDictionary(lang);
  const baseUrl = "https://bookmarks-checker-home.pages.dev";
  
  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
    keywords: dict.metadata.keywords,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: {
        'en': `${baseUrl}/en`,
        'zh': `${baseUrl}/zh`,
        'x-default': `${baseUrl}/en`,
      },
    },
    other: {
      "google-site-verification": "JXame2td3ATLmQwx-1mbmyEQ46HXh0OXEXx8SBZu6Ak",
    },
  };
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string }; // 接收 lang 参数
}) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <ExtensionErrorHandler />
        {children}
      </body>
    </html>
  );
}
