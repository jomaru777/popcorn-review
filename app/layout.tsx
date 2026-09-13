import type { Metadata } from "next";
import "@/app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Poppin ポップコーンレビューアプリ",
  description: "広島の映画館のポップコーンレビューアプリです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
