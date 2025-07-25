import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Apiki Dev Blog",
  description:
    "Blog de desenvolvimento da Apiki - Conteúdo técnico para desenvolvedores",
};


export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
