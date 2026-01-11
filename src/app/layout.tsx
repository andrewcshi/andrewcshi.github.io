import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";

// Import FontAwesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";

export const metadata: Metadata = {
  title: "Andrew Shi",
  description: "My personal space on the internet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}