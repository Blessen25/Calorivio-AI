import "./globals.css";

export const metadata = {
  title: "Calorivio AI",
  description: "AI powered nutrition and meal planning app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}