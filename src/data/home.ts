import { Code2, Cpu, Database, Layers, Lock, Plane, Phone, LineChart, Server, Settings, Smartphone, Sparkles } from "lucide-react";

export const stackCategories = [
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

export const projects = [
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
