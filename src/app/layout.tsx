import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/styles/globals.css';
import { ThemeProvider } from '@/providers/theme-provider';
import {TooltipProvider} from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DAVINCI Chat",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
         attribute="class"
         defaultTheme="system"
         enableSystem
         disableTransitionOnChange
          >
            <TooltipProvider>
           <main> {children}</main>
           </TooltipProvider>
           <Toaster richColors/>
          </ThemeProvider>
      </body>
    </html>
  );
}
