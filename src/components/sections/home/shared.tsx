import { ArrowUpRight } from "lucide-react";
import { stackCategories, projects } from "@/data/home";
import type { StackItem } from "@/data/home";

export function SectionHeader({ index, title, subtitle }: { index: string; title: string; subtitle: string }) {
  return (
    <div className="flex items-end justify-between border-b border-border pb-6">
      <div>
        <div className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">/ {index}</div>
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">{title}</h2>
      </div>
      <p className="hidden font-mono text-xs uppercase tracking-widest text-muted-foreground md:block">{subtitle}</p>
    </div>
  );
}

export function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="glass-card border-gradient rounded-xl p-5">
      <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="mt-2 text-3xl font-semibold text-gradient">{value}</div>
    </div>
  );
}

export function StackGrid({ items }: { items: StackItem[] }) {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div
        className="grid gap-4 justify-center justify-items-center items-stretch"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 260px))' }}
      >
        {items.map((item) => (
          <div key={item.name} className="px-1 w-full max-w-[260px]">
            <StackCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function StackCard({ item }: { item: StackItem }) {
  return (
    <div className="group glass-card border-gradient relative flex h-full min-h-[120px] w-full flex-col items-center justify-center gap-3 rounded-xl px-5 py-5 text-center transition-transform duration-200 hover:-translate-y-1 hover:glow">
      <div className="absolute -inset-0 -z-10 opacity-0 transition group-hover:opacity-100">
        <div className="absolute -top-6 -right-6 h-28 w-28 rounded-full bg-primary/10 blur-3xl" />
      </div>
      <div className="flex items-center justify-center rounded-md bg-background/30 border border-border p-3">
        <item.icon className="h-5 w-5 text-primary transition-transform group-hover:scale-110" />
      </div>
      <div className="mt-3">
        <div className="font-semibold text-lg text-foreground">{item.name}</div>
        {item.subtitle ? (
          <div className="mt-2 whitespace-nowrap text-xs uppercase tracking-[0.24em] text-muted-foreground">
            {item.subtitle}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  return (
    <article
      className="group glass-card border-gradient relative overflow-hidden rounded-2xl p-8 transition hover:-translate-y-1"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="absolute inset-0 -z-10 opacity-0 transition group-hover:opacity-100">
        <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
      </div>
      <div className="flex items-start justify-between">
        <div className="rounded-xl border border-border bg-background/40 p-3">
          <project.icon className="h-5 w-5 text-primary" />
        </div>
        <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
      </div>
      <h3 className="mt-6 text-2xl font-semibold">{project.title}</h3>
      <p className="mt-3 text-muted-foreground">{project.desc}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-border bg-background/30 px-3 py-1 font-mono text-xs text-muted-foreground">
            {tag}
          </span>
        ))}
      </div>
      <ArrowUpRight className="absolute bottom-6 right-6 h-5 w-5 text-muted-foreground transition group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1" />
    </article>
  );
}
