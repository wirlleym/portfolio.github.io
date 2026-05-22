import { Github, MessageCircle, ArrowUpRight, Sparkles } from "lucide-react";

export function HomeHero() {
  return (
    <>
      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2 font-mono text-sm">
          <span className="inline-block h-2 w-2 rounded-full bg-primary glow animate-pulse-slow" />
          <span className="text-muted-foreground">wirlley</span>
          <span className="text-primary">.dev</span>
        </div>
        <nav className="hidden gap-8 font-mono text-xs uppercase tracking-widest text-muted-foreground md:flex">
          <a href="#stack" className="hover:text-foreground transition">Stack</a>
          <a href="#about" className="hover:text-foreground transition">Sobre</a>
          <a href="#projects" className="hover:text-foreground transition">Projetos</a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-foreground transition hover:border-primary hover:text-primary"
        >
          Contato <ArrowUpRight className="h-3 w-3" />
        </a>
      </header>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pt-20 pb-32">
        <div className="animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Fullstack Developer
            </span>
          </div>

          <h1 className="text-6xl font-semibold leading-[0.95] tracking-tight md:text-8xl">
            <span className="block text-foreground/90">Wirlley</span>
            <span className="block text-gradient">Melo</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Desenvolvedor fullstack com experiência em aplicações web e mobile, APIs REST,
            sistemas administrativos e integrações VoIP utilizando <span className="text-foreground">Node.js, Laravel, Angular</span> e <span className="text-foreground">Ionic</span>.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3" id="contact">
            <a
              href="https://github.com/wirlleym"
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:scale-[1.02] glow"
            >
              <Github className="h-4 w-4" />
              GitHub
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="https://wa.me/5582988330555"
              className="group relative inline-flex items-center gap-2 rounded-full border border-border bg-card/30 px-6 py-3 font-medium text-foreground backdrop-blur transition hover:border-primary hover:text-primary"
            >
              <MessageCircle className="h-4 w-4" />
              Contato
            </a>
            <div className="ml-2 hidden items-center gap-2 font-mono text-xs text-muted-foreground md:flex">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Disponível para projetos
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute right-6 top-32 hidden animate-float md:block">
          <div className="glass-card border-gradient rounded-2xl p-4 font-mono text-xs">
            <div className="mb-2 flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-destructive/70" />
              <span className="h-2 w-2 rounded-full bg-chart-4/70" />
              <span className="h-2 w-2 rounded-full bg-primary/70" />
            </div>
            <div className="space-y-1 text-muted-foreground">
              <div><span className="text-accent">const</span> <span className="text-primary">dev</span> = {'{'}</div>
              <div className="pl-4">role: <span className="text-foreground">'fullstack'</span>,</div>
              <div className="pl-4">stack: <span className="text-foreground">[...]</span>,</div>
              <div className="pl-4">ai: <span className="text-primary">true</span></div>
              <div>{'}'}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
