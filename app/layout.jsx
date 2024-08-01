import { Orbitron } from "next/font/google";
import "./globals.css";

const inter = Orbitron({ subsets: ["latin"] });

export const metadata = {
  title: "AkshhayKM",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
