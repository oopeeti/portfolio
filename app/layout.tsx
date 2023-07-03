import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="bg-[rgb(36,36,36)]">{children}</body>
    </html>
  );
}
