import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KK书签检查器 - 智能清理重复和失效书签 | Chrome插件",
  description:
    "专业的书签管理Chrome插件，智能检测失效链接和重复书签，一键批量清理，让你的浏览器书签井井有条。已帮助10,000+用户整理书签。",
  keywords: "书签管理,Chrome插件,失效链接检测,重复书签清理,浏览器插件,书签整理",
  other: {
    "google-site-verification": "JXame2td3ATLmQwx-1mbmyEQ46HXh0OXEXx8SBZu6Ak",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
