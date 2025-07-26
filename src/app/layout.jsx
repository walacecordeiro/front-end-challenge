import { Inter } from "next/font/google";
import "./globals.css";

import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Apiki Dev Blog",
  description:
    "Blog de desenvolvimento da Apiki - Conteúdo técnico para desenvolvedores",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} antialiased dark`}>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <header className="sticky z-10 bg-background top-0 h-16 shrink-0 place-content-center gap-2 border-b-2 border-foreground/15">
              <div className="flex items-center gap-2 px-3">
                <SidebarTrigger />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <p>sdflksajdhf</p>
              </div>
            </header>
            {children}
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
