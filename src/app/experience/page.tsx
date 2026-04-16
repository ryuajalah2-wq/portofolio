const experiences = [
  {
    title: "Frontend Freelancer",
    period: "2024 - Sekarang",
    description: "Ngerjain landing page, dashboard, dan website company profile dengan fokus UI clean dan performa.",
  },
  {
    title: "Personal Project Builder",
    period: "2023 - Sekarang",
    description: "Eksplorasi Next.js ecosystem, integrasi API, dan pola component reusable untuk deployment cepat.",
  },
];

export default function ExperiencePage() {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold text-red-400">Experience</h2>
      <div className="space-y-4">
        {experiences.map((experience) => (
          <article
            key={experience.title}
            className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-5"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-xl font-semibold text-zinc-100">{experience.title}</h3>
              <p className="text-sm text-red-300">{experience.period}</p>
            </div>
            <p className="mt-2 text-zinc-300">{experience.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
