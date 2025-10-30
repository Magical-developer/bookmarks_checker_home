import type { Metadata } from "next";

export const metadata: Metadata = {
  other: {
    "google-site-verification": "JXame2td3ATLmQwx-1mbmyEQ46HXh0OXEXx8SBZu6Ak",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <link rel="canonical" href="https://bookmarks-checker-home.pages.dev/en" />
        <link rel="alternate" hrefLang="en" href="https://bookmarks-checker-home.pages.dev/en" />
        <link rel="alternate" hrefLang="zh" href="https://bookmarks-checker-home.pages.dev/zh" />
        <link rel="alternate" hrefLang="x-default" href="https://bookmarks-checker-home.pages.dev/en" />
      </head>
      <body>{children}</body>
    </html>
  );
}
