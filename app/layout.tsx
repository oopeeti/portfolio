import "./styles/globals.css"
import { Toaster } from "@/components/ui/toaster"
import { Inter } from 'next/font/google';
import type { ChildrenProps } from '@/types';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
