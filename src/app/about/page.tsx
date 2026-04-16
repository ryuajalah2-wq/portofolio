const skills = ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "REST API"];

export default function AboutPage() {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold text-red-400">About Me</h2>
      <p className="max-w-3xl text-zinc-300">
        Perkenalkan, saya Ryuu, seorang Full-stack Web Developer yang berfokus pada pengembangan antarmuka modern dengan performa tinggi. Saya memiliki spesialisasi dalam membangun aplikasi web yang tidak hanya responsif secara visual, tetapi juga memberikan pengalaman pengguna yang intuitif dan cepat. Saya sangat memperhatikan detail pada tata letak dan optimasi kode untuk memastikan setiap proyek memiliki identitas visual yang kuat dan fungsionalitas yang stabil.
      </p>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-zinc-100">Skills</h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-red-800/70 bg-red-950/40 px-4 py-1 text-sm text-red-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
