import { stackCategories } from "@/data/home";
import { SectionHeader, StatCard } from "./shared";

export function HomeAbout() {
  const totalStacks = stackCategories.reduce((sum, category) => sum + category.items.length, 0);

  return (
    <section id="about" className="relative z-10 mx-auto max-w-6xl px-6 py-20">
      <SectionHeader index="02" title="Sobre mim" subtitle="Quem sou e o que faço" />
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <p className="text-2xl font-light leading-relaxed text-foreground/90 md:text-3xl">
            Atuo no desenvolvimento de aplicações <span className="text-gradient font-medium">web e mobile</span>,
            APIs REST e sistemas em produção. Tenho experiência com backend utilizando <span className="text-primary">Nest (Node.js)</span> e <span className="text-primary">Laravel (PHP)</span>,
            além de frontend com <span className="text-primary">Angular, Ionic</span> e <span className="text-primary">React</span>.
          </p>
        </div>
        <div className="space-y-4">
          <StatCard label="Anos com fullstack" value="5+" />
          <StatCard label="Stacks principais" value={`${totalStacks}`} />
          <StatCard label="Foco atual" value="AI · APIs" />
        </div>
      </div>
    </section>
  );
}
