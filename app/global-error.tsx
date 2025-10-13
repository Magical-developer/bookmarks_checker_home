"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <Card className="w-full max-w-md">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <AlertTriangle className="h-12 w-12 text-red-500" />
                <h2 className="text-xl font-semibold">Something went wrong!</h2>
                <p className="text-gray-600">
                  We're sorry, but something unexpected happened.
                </p>
                <div className="flex space-x-4">
                  <Button onClick={() => reset()}>Try again</Button>
                  <Button variant="outline" asChild>
                    <Link href="/en">Go home</Link>
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
