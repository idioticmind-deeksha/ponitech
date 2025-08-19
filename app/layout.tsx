import "./globals.scss";
import type { Metadata } from "next";
import Footer from "./components/common/footer/footer";
import Header from "./components/common/header/header";
 

export const metadata: Metadata = {
  title: "Ponitech",
  description: "The Next-Gen Decentralized Platform Where Speed Meets Scale",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <meta name="viewport" content="width=device-width, initial-scale=1.0,  user-scalable=0, shrink-to-fit=no" /> */}
      <body>
        <Header/>
        <main className="main">
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
