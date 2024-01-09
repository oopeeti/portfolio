import "./styles/globals.css"
import { Toaster } from "@/components/ui/toaster"

type LayoutProps = {
  children: React.ReactNode
}

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html>
      <head />
      <body>
        <main className="text-white">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}

export default RootLayout;
