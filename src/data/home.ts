import {   
  Binary,
  Blocks,
  Cable,
  Code2,
  Component,
  Cpu,
  Database,
  Globe,
  Layers3,
  LineChart,
  Lock,
  Plane,
  Phone,
  Radar,
  Rocket,
  ScrollText,
  Settings,
  Smartphone,
  Sparkles,
  TestTube2,
  Waypoints, } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

export type StackItem = {
  name: string;
  subtitle?: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export type StackCategory = {
  id: string;
  label: string;
  items: StackItem[];
};

export const stackCategories: StackCategory[] = [
  {
    id: "database",
    label: "DATABASE & ORM",
    items: [
      { name: "MongoDB", subtitle: "NoSQL Database", icon: Database },
      { name: "PostgreSQL", subtitle: "Relational Database", icon: Database },
      { name: "MySQL", subtitle: "Relational Database", icon: Database },
      { name: "ORM • TypeScript", subtitle: "TypeORM • Prisma", icon: Waypoints }
    ],
  },

  {
    id: "backend",
    label: "BACKEND",
    items: [
      { name: "ExpressJS", subtitle: "Node.js Framework", icon: Rocket },
      { name: "NestJS", subtitle: "Node.js Architecture", icon: Blocks },
      { name: "Laravel", subtitle: "PHP Framework", icon: Component },
    ],
  },

  {
    id: "frontend",
    label: "FRONTEND",
    items: [
      { name: "JavaScript", subtitle: "Vanilla", icon: Code2 },
      { name: "PrimeNG", subtitle: "Web UI", icon: Layers3 },
      { name: "React", subtitle: "Web • Mobile • Desktop", icon: Sparkles },
      { name: "Ionic", subtitle: "Mobile • Desktop", icon: Smartphone },
    ],
  },

  {
    id: "testing",
    label: "API TEST TOOLS",
    items: [
      { name: "Postman", subtitle: "API Testing", icon: Radar },
      { name: "Swagger", subtitle: "API Documentation", icon: ScrollText },
      { name: "Insomnia", subtitle: "API Client", icon: TestTube2 },
    ],
  },

  {
    id: "communication",
    label: "COMUNICAÇÃO & TEMPO REAL",
    items: [
      { name: "Linphone", subtitle: "VoIP Client", icon: Phone },
      { name: "JS-SIP", subtitle: "SIP over WebSocket", icon: Cable },
      { name: "SIP.js", subtitle: "WebRTC SIP Library", icon: Globe },
      { name: "JWT", subtitle: "Authentication & Security", icon: Lock }
    ],
  },
];

export const projects = [
  {
    title: "Plataforma Financeira",
    desc: "Desenvolvimento de API REST para serviços financeiros utilizando NestJS, autenticação segura e integração com banco de dados.",
    tags: ["NestJS", "MySQL", "TypeORM", "Swagger"],
    icon: LineChart,
  },
  {
    title: "Softphone VoIP",
    desc: "Aplicação mobile com Ionic integrada a serviços SIP e comunicação VoIP.",
    tags: ["Ionic (Angular)", "SIP", "Plugin Linphone(Java & Objetive-C)"],
    icon: Phone,
  },
  {
    title: "Sistema de Gestão de Softphone",
    desc: "Plataforma web administrativa desenvolvida para gerenciamento operacional do sistema de softphone.",
    tags: ["Laravel (PHP)", "MySQL", "Docker"],
    icon: Settings,
  },
  {
    title: "Sistema de Gestão Aeronáutica",
    desc: "Plataforma web administrativa para gerenciamento de manutenção e lavagem de aeronaves.",
    tags: ["Laravel (PHP)", "MySQL", "Docker"],
    icon: Plane,
  },
];
