"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type Project = {
  id: string;
  name: string;
  url: string | null;
  status: string;
  repo: string | null;
  previewImage: string | null;
};

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  return (
    <section className="space-y-8">
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
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06, duration: 0.3 }}
            className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-5"
          >
            {project.previewImage && (
              <Image
                src={project.previewImage}
                alt={`Preview ${project.name}`}
                width={1200}
                height={675}
                className="mb-4 aspect-video w-full rounded-xl border border-zinc-800 object-cover"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
            )}
            <h3 className="text-xl font-semibold text-zinc-100">{project.name}</h3>
            <p className="mt-2 text-sm text-zinc-400">Status: {project.status}</p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-red-500/80 px-4 py-1 text-red-300 transition hover:bg-red-950/50"
                >
                  Open deployment
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-zinc-700 px-4 py-1 text-zinc-300 transition hover:border-zinc-500"
                >
                  Source repo
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
