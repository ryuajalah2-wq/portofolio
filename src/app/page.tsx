"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type Project = {
  id: string;
  name: string;
  url: string | null;
  status: string;
  repo: string | null;
};

const experiences = [
  {
    title: "Frontend Freelancer",
    period: "2024 - Present",
    description: "Building polished landing pages and custom dashboards with fast and maintainable UI architecture.",
  },
  {
    title: "Full-stack Project Builder",
    period: "2023 - Present",
    description: "Developing and deploying end-to-end web applications with strong focus on performance and clean structure.",
  },
];

const testimonials = [
  {
    quote:
      "Ryuu delivers clean interfaces with strong attention to detail. The final result always feels premium and smooth.",
    author: "Testimonial 1",
  },
  {
    quote:
      "Great communication and very fast iteration cycle. Every revision improved both UX and visual consistency.",
    author: "Testimonial 2",
  },
];

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const run = async () => {
      try {
        const response = await fetch("/api/projects");
        const data = (await response.json()) as {
          projects?: Project[];
          error?: string;
        };

        if (!response.ok) {
          setError(data.error ?? "Failed to load projects.");
          return;
        }

        setProjects(data.projects ?? []);
      } catch {
        setError("Unexpected error while loading projects.");
      } finally {
        setLoading(false);
      }
    };

    run();
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3200);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="space-y-20 py-12">
      <section id="home" className="space-y-8 scroll-mt-24">
        <p className="inline-flex rounded-full border border-red-500/50 bg-red-950/30 px-4 py-1 text-sm text-red-300">
          Itachi inspired portfolio
        </p>
        <div className="grid items-center gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            <h1 className="text-5xl font-black uppercase tracking-[0.15em] text-zinc-100 sm:text-7xl">
              ryuu
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-zinc-300">
              Frontend-focused developer who builds clean web experiences with bold visuals, smooth motion, and solid performance.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-red-900/60 bg-black/60 shadow-[0_0_40px_rgba(185,28,28,0.25)]">
            <iframe
              title="Ryuu featured video"
              src="https://www.youtube-nocookie.com/embed/B7aFTOlA1Fo?autoplay=1&mute=1&loop=1&playlist=B7aFTOlA1Fo&controls=0&modestbranding=1&rel=0&disablekb=1"
              className="pointer-events-none aspect-video w-full"
              allow="autoplay; encrypted-media; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              tabIndex={-1}
            />
          </div>
        </div>
      </section>

      <section id="about" className="space-y-6 scroll-mt-24">
        <h2 className="text-3xl font-bold text-red-400">About Me</h2>
        <div className="grid items-center gap-6 lg:grid-cols-2">
          <p className="max-w-4xl text-zinc-300">
            Perkenalkan, saya Ryuu, seorang Full-stack Web Developer yang berfokus pada pengembangan antarmuka modern dengan performa tinggi. Saya memiliki spesialisasi dalam membangun aplikasi web yang tidak hanya responsif secara visual, tetapi juga memberikan pengalaman pengguna yang intuitif dan cepat. Saya sangat memperhatikan detail pada tata letak dan optimasi kode untuk memastikan setiap proyek memiliki identitas visual yang kuat dan fungsionalitas yang stabil.
          </p>
          <div className="overflow-hidden rounded-2xl border border-red-900/60 bg-black/60 shadow-[0_0_40px_rgba(185,28,28,0.2)]">
            <iframe
              title="About section featured video"
              src="https://www.youtube-nocookie.com/embed/IcBF7rZ1yis?autoplay=1&mute=1&loop=1&playlist=IcBF7rZ1yis&controls=0&modestbranding=1&rel=0&disablekb=1"
              className="pointer-events-none aspect-video w-full"
              allow="autoplay; encrypted-media; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              tabIndex={-1}
            />
          </div>
        </div>
      </section>

      <section id="experience" className="space-y-6 scroll-mt-24">
        <h2 className="text-3xl font-bold text-red-400">Experience</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {experiences.map((experience) => (
            <article
              key={experience.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-5"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-xl font-semibold text-zinc-100">{experience.title}</h3>
                <p className="text-sm text-red-300">{experience.period}</p>
              </div>
              <p className="mt-2 text-zinc-300">{experience.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="space-y-6 scroll-mt-24">
        <h2 className="text-3xl font-bold text-red-400">Projects</h2>
        {loading && (
          <p className="rounded-xl border border-zinc-700 bg-zinc-950/70 p-4 text-zinc-300">
            Loading your deployed projects from Vercel...
          </p>
        )}
        {error && (
          <p className="rounded-xl border border-red-700/70 bg-red-950/30 p-4 text-red-200">
            {error}
          </p>
        )}
        {!loading && !error && projects.length === 0 && (
          <p className="rounded-xl border border-zinc-700 bg-zinc-950/70 p-4 text-zinc-300">
            Belum ada project yang sudah deploy (READY) di Vercel.
          </p>
        )}
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-6"
            >
              <h3 className="text-xl font-semibold text-zinc-100">{project.name}</h3>
              <p className="mt-2 text-sm text-zinc-400">Status: {project.status}</p>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex rounded-full border border-red-500/80 px-4 py-1 text-sm text-red-300 transition hover:bg-red-950/50"
                >
                  Open deployment
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="space-y-6 scroll-mt-24">
        <h2 className="text-3xl font-bold text-red-400">Contact</h2>
        <p className="text-zinc-300">
          Email:{" "}
          <a className="text-red-300 underline decoration-red-700" href="mailto:ryuajalah2@gmail.com">
            ryuajalah2@gmail.com
          </a>
        </p>
      </section>

      <section id="testimonials" className="space-y-6 pb-8 scroll-mt-24">
        <h2 className="text-3xl font-bold text-red-400">Testimonials</h2>
        <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/80 p-6">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={activeTestimonial}
              initial={{ opacity: 0, x: 22 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -22 }}
              transition={{ duration: 0.35 }}
              className="space-y-3"
            >
              <p className="text-lg text-zinc-200">
                &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
              </p>
              <footer className="text-sm text-red-300">{testimonials[activeTestimonial].author}</footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
