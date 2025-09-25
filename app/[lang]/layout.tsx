import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { i18n } from "@/lib/i18n-config";
import { getDictionary } from "@/lib/getDictionary";

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
  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
    keywords: dict.metadata.keywords,
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
