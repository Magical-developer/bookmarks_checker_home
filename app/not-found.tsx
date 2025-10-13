"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";
import Link from "next/link";
import { i18n } from "@/lib/i18n-config";

export default function NotFound() {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <Card className="w-full max-w-md">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <Search className="h-12 w-12 text-gray-400" />
                <h2 className="text-xl font-semibold">404 - Page Not Found</h2>
                <p className="text-gray-600">
                  The page you're looking for doesn't exist.
                </p>
                <div className="flex space-x-2">
                  <Button asChild>
                    <Link href={`/${i18n.defaultLocale}`}>Go Home</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/zh">中文</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </body>
    </html>
  );
}