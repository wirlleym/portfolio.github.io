export default function Portfolio() {
  const projects = [
    {
      title: 'Plataforma Financeira',
      description:
        'Backend desenvolvido com NestJS para gerenciamento de serviços financeiros e APIs REST.',
    },
    {
      title: 'Softphone VoIP',
      description:
        'Aplicação mobile com Ionic integrada a serviços SIP e comunicação VoIP.',
    },
    {
      title: 'Sistema Administrativo',
      description:
        'Sistema web utilizando Laravel para gestão administrativa e operacional.',
    },
    {
      title: 'Sistema Aeronáutico',
      description:
        'Plataforma para gerenciamento de manutenção e lavagem de aeronaves.',
    },
  ];

  const stack = [
    'Node.js',
    'NestJS',
    'Laravel',
    'Angular',
    'Ionic',
    'React',
    'TypeScript',
    'Docker',
    'PostgreSQL',
    'MongoDB',
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-400 text-sm tracking-[0.3em] uppercase mb-4">
              Fullstack Developer
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Wirlley Melo
            </h1>

            <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-xl">
              Desenvolvedor fullstack com experiência em aplicações web e mobile,
              APIs REST, sistemas administrativos e integrações VoIP utilizando
              Node.js, Laravel, Angular e Ionic.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/seuusuario"
                target="_blank"
                className="px-6 py-3 rounded-2xl bg-white text-black font-medium hover:scale-105 transition"
              >
                GitHub
              </a>

              <a
                href="mailto:wirlley17@gmail.com"
                className="px-6 py-3 rounded-2xl border border-zinc-700 hover:border-zinc-500 transition"
              >
                Contato
              </a>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
            <p className="text-zinc-500 text-sm mb-4">Stack Principal</p>

            <div className="flex flex-wrap gap-3">
              {stack.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 bg-zinc-800 rounded-xl text-sm text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="mb-14">
          <h2 className="text-4xl font-bold mb-4">Sobre mim</h2>

          <p className="text-zinc-400 max-w-3xl leading-relaxed text-lg">
            Atuo no desenvolvimento de aplicações web e mobile, APIs REST e
            sistemas em produção. Tenho experiência com backend utilizando
            Node.js e Laravel, além de frontend com Angular, Ionic e React.
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-10">Projetos & Experiências</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-blue-500 transition"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  {project.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-900 py-10 px-6 text-center text-zinc-500">
        <p>© 2026 Wirlley Melo • Fullstack Developer</p>
      </footer>
    </div>
  );
}
