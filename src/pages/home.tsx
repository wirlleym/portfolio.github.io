import { HomeHero, HomeStack, HomeAbout, HomeProjects, HomeFooter } from "@/components/sections/home";

export function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <div className="pointer-events-none fixed inset-0 bg-hero" />
      <div className="pointer-events-none fixed inset-0 bg-grid opacity-60" />
      <div className="pointer-events-none fixed top-1/4 -left-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-blob" />
      <div className="pointer-events-none fixed bottom-0 right-0 h-112 w-md rounded-full bg-primary/20 blur-3xl animate-blob" style={{ animationDelay: "-6s" }} />

      <HomeHero />
      <HomeStack />
      <HomeAbout />
      <HomeProjects />
      <HomeFooter />
    </div>
  );
}
