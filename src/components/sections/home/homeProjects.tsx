import { projects } from "@/data/home";
import { SectionHeader, ProjectCard } from "./shared";

export function HomeProjects() {
  return (
    <section id="projects" className="relative z-10 mx-auto max-w-6xl px-6 py-20">
      <SectionHeader index="03" title="Projetos & Experiências" subtitle="Algumas coisas que construí" />
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
