"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { i18n } from "@/lib/i18n-config";

export default function NotFound() {
  const pathname = usePathname();
  
  // 从URL路径中提取语言，如果无法提取则使用默认语言
  const lang = pathname?.split('/')[1] || i18n.defaultLocale;
  const isValidLang = i18n.locales.includes(lang as any);
  const currentLang = isValidLang ? lang : i18n.defaultLocale;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <Search className="h-12 w-12 text-gray-400" />
            <h2 className="text-xl font-semibold">
              {currentLang === 'zh' ? '404 - 页面未找到' : '404 - Page Not Found'}
            </h2>
            <p className="text-gray-600">
              {currentLang === 'zh' 
                ? '您要查找的页面不存在。' 
                : "The page you're looking for doesn't exist."
              }
            </p>
            <div className="flex space-x-2">
              <Button asChild>
                <Link href={`/${currentLang}`}>
                  {currentLang === 'zh' ? '返回首页' : 'Go Home'}
                </Link>
              </Button>
              {currentLang === 'zh' ? (
                <Button variant="outline" asChild>
                  <Link href="/en">English</Link>
                </Button>
              ) : (
                <Button variant="outline" asChild>
                  <Link href="/zh">中文</Link>
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}