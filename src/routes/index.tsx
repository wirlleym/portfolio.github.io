import { createFileRoute } from "@tanstack/react-router";
import { Github, MessageCircle, ArrowUpRight, Sparkles, Code2, Cpu, Database, Layers, Smartphone, Server, Plane, Phone, LineChart, Settings, Lock } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wirlley Melo — Fullstack Developer" },
      { name: "description", content: "Desenvolvedor fullstack — Node.js, NestJS, Laravel, Angular, Ionic, React. APIs REST, sistemas administrativos e integrações VoIP." },
      { property: "og:title", content: "Wirlley Melo — Fullstack Developer" },
      { property: "og:description", content: "Portfolio de Wirlley Melo, desenvolvedor fullstack." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
  }),
  component: Index,
});

const stackCategories = [
  {
    id: "backend",
    label: "BACKEND",
    items: [
      { name: "Node.js", icon: Server },
      { name: "NestJS", icon: Layers },
      { name: "PHP", icon: Code2 },
      { name: "Laravel", icon: Code2 },
    ],
  },
  {
    id: "sql",
    label: "SQL",
    items: [
      { name: "MongoDB", icon: Database },
      { name: "PostgreSQL", icon: Database },
      { name: "MySQL", icon: Database },
    ],
  },
  {
    id: "frontend",
    label: "FRONTEND",
    items: [
      { name: "React", icon: Sparkles },
      { name: "Angular", icon: Cpu },
      { name: "Ionic", icon: Smartphone },
      { name: "PrimeNG", icon: Layers },
    ],
  },
  {
    id: "infra",
    label: "INFRA & INTEGRAÇÕES",
    items: [
      { name: "Docker", icon: Layers },
      { name: "TypeScript", icon: Code2 },
      { name: "Prisma", icon: Database },
      { name: "TypeORM", icon: Database },
      { name: "Swagger", icon: Code2 },
      { name: "SIP", icon: Phone },
      { name: "WebSockets", icon: Cpu },
      { name: "JWT", icon: Lock },
    ],
  },
];

const projects = [
  {
    title: "Plataforma Financeira",
    desc: "Backend desenvolvido com NestJS para gerenciamento de serviços financeiros e APIs REST.",
    tags: ["NestJS", "PostgreSQL", "TypeORM", "Swagger"],
    icon: LineChart,
  },
  {
    title: "Softphone VoIP",
    desc: "Aplicação mobile com Ionic integrada a serviços SIP e comunicação VoIP.",
    tags: ["Ionic", "SIP", "Mobile"],
    icon: Phone,
  },
  {
    title: "Sistema Administrativo",
    desc: "Sistema web utilizando Laravel para gestão administrativa e operacional.",
    tags: ["PHP", "Docker", "Laravel", "MySQL"],
    icon: Settings,
  },
  {
    title: "Sistema Aeronáutico",
    desc: "Plataforma para gerenciamento de manutenção e lavagem de aeronaves.",
    tags: ["PHP", "Docker", "Laravel", "MySQL"],
    icon: Plane,
  },
];

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 bg-hero" />
      <div className="pointer-events-none fixed inset-0 bg-grid opacity-60" />
      <div className="pointer-events-none fixed top-1/4 -left-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-blob" />
      <div className="pointer-events-none fixed bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-primary/20 blur-3xl animate-blob" style={{ animationDelay: "-6s" }} />

      {/* Nav */}
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

      {/* Hero */}
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
            sistemas administrativos e integrações VoIP utilizando{" "}
            <span className="text-foreground">Node.js, Laravel, Angular</span> e{" "}
            <span className="text-foreground">Ionic</span>.
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

        {/* Floating code chip */}
        <div className="pointer-events-none absolute right-6 top-32 hidden animate-float md:block">
          <div className="glass-card border-gradient rounded-2xl p-4 font-mono text-xs">
            <div className="mb-2 flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-destructive/70" />
              <span className="h-2 w-2 rounded-full bg-chart-4/70" />
              <span className="h-2 w-2 rounded-full bg-primary/70" />
            </div>
            <div className="space-y-1 text-muted-foreground">
              <div><span className="text-accent">const</span> <span className="text-primary">dev</span> = {"{"}</div>
              <div className="pl-4">role: <span className="text-foreground">'fullstack'</span>,</div>
              <div className="pl-4">stack: <span className="text-foreground">[...]</span>,</div>
              <div className="pl-4">ai: <span className="text-primary">true</span></div>
              <div>{"}"}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stack with Tabs */}
      <section id="stack" className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <SectionHeader index="01" title="Stack Principal" subtitle="Ferramentas que uso em produção" />
        <Tabs defaultValue="backend" className="mt-12">
          <TabsList className="flex flex-wrap gap-2 bg-transparent p-0 h-auto">
            {stackCategories.map((cat) => (
              <TabsTrigger
                key={cat.id}
                value={cat.id}
                className="rounded-full border border-border bg-card/30 px-4 py-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary"
              >
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {stackCategories.map((cat) => (
            <TabsContent key={cat.id} value={cat.id} className="mt-6">
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {cat.items.map((s) => (
                  <div
                    key={s.name}
                    className="group glass-card border-gradient relative flex items-center gap-3 rounded-xl px-4 py-4 transition hover:-translate-y-1 hover:glow"
                  >
                    <s.icon className="h-4 w-4 text-primary transition group-hover:scale-110" />
                    <span className="font-mono text-sm">{s.name}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* About */}
      <section id="about" className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <SectionHeader index="02" title="Sobre mim" subtitle="Quem sou e o que faço" />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <p className="text-2xl font-light leading-relaxed text-foreground/90 md:text-3xl">
              Atuo no desenvolvimento de aplicações <span className="text-gradient font-medium">web e mobile</span>,
              APIs REST e sistemas em produção. Tenho experiência com backend utilizando{" "}
              <span className="text-primary">Node.js</span> e <span className="text-primary">Laravel</span>,
              além de frontend com <span className="text-primary">Angular, Ionic</span> e{" "}
              <span className="text-primary">React</span>.
            </p>
          </div>
          <div className="space-y-4">
            <StatCard label="Anos com fullstack" value="5+" />
            <StatCard label="Stacks principais" value="10" />
            <StatCard label="Foco atual" value="AI · APIs" />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <SectionHeader index="03" title="Projetos & Experiências" subtitle="Algumas coisas que construí" />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="group glass-card border-gradient relative overflow-hidden rounded-2xl p-8 transition hover:-translate-y-1"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="absolute inset-0 -z-10 opacity-0 transition group-hover:opacity-100">
                <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
              </div>
              <div className="flex items-start justify-between">
                <div className="rounded-xl border border-border bg-background/40 p-3">
                  <p.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-muted-foreground">{p.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-border bg-background/30 px-3 py-1 font-mono text-xs text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
              <ArrowUpRight className="absolute bottom-6 right-6 h-5 w-5 text-muted-foreground transition group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1" />
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 mx-auto mt-20 max-w-6xl border-t border-border px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="font-mono text-xs text-muted-foreground">
            © 2026 Wirlley Melo • Fullstack Developer
          </p>
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
    </div>
  );
}

function SectionHeader({ index, title, subtitle }: { index: string; title: string; subtitle: string }) {
  return (
    <div className="flex items-end justify-between border-b border-border pb-6">
      <div>
        <div className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">/ {index}</div>
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">{title}</h2>
      </div>
      <p className="hidden font-mono text-xs uppercase tracking-widest text-muted-foreground md:block">
        {subtitle}
      </p>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="glass-card border-gradient rounded-xl p-5">
      <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="mt-2 text-3xl font-semibold text-gradient">{value}</div>
    </div>
  );
}
