"use client";

import { ThemeProvider } from "next-themes";
import { SpeedInsights } from "@vercel/speed-insights/next";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
}
