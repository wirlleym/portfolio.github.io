import { createFileRoute } from "@tanstack/react-router";
import { Home } from "../pages/home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wirlley Melo � Fullstack Developer" },
      { name: "description", content: "Desenvolvedor fullstack � Node.js, NestJS, Laravel, Angular, Ionic, React. APIs REST, sistemas administrativos e integra��es VoIP." },
      { property: "og:title", content: "Wirlley Melo � Fullstack Developer" },
      { property: "og:description", content: "Portfolio de Wirlley Melo, desenvolvedor fullstack." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
  }),
  component: Home,
});
