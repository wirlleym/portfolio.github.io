import { Github, MessageCircle } from "lucide-react";

export function HomeFooter() {
  return (
    <footer className="relative z-10 mx-auto mt-20 max-w-6xl border-t border-border px-6 py-10">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="font-mono text-xs text-muted-foreground">© 2026 Wirlley Melo • Fullstack Developer</p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/wirlleym" target="_blank" rel="noreferrer" className="text-muted-foreground transition hover:text-primary">
            <Github className="h-4 w-4" />
          </a>
          <a href="https://wa.me/5582988330555" className="text-muted-foreground transition hover:text-primary">
            <MessageCircle className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
