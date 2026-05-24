import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { stackCategories } from "@/data/home";
import { SectionHeader, StackGrid } from "./shared";

export function HomeStack() {
  return (
    <section id="stack" className="relative z-10 mx-auto max-w-6xl px-6 py-20">
      <SectionHeader index="01" title="Stacks & Arquiteturas" subtitle="Tecnologias do meu ecossistema" />
      <Tabs defaultValue="backend" className="mt-12">
        <TabsList className="flex flex-wrap gap-2 bg-transparent p-0 h-auto">
          {stackCategories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="rounded-full border border-border bg-card/30 px-4 py-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary"
            >
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {stackCategories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-6">
            <StackGrid items={category.items} />
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
