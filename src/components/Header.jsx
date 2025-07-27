import { Separator } from "@/components/ui/separator";
import {
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function Header() {
  return (
    <header className="sticky z-10 bg-background top-0 h-16 shrink-0 place-content-center gap-2 border-b-2 border-foreground/15">
      <div className="flex items-center gap-2 px-3">
        <SidebarTrigger className="cursor-pointer hover:scale-125 bg-primary/50" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <p>Frase bonita ou futures</p>
      </div>
    </header>
  );
}
