export default function ContactPage() {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold text-red-400">Contact</h2>
      <p className="max-w-2xl text-zinc-300">
        Tertarik kolaborasi? Hubungi gue lewat form di bawah atau social link.
      </p>
      <form className="grid max-w-2xl gap-4">
        <input
          type="text"
          placeholder="Nama"
          className="rounded-xl border border-zinc-700 bg-black/40 px-4 py-3 text-zinc-100 outline-none focus:border-red-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="rounded-xl border border-zinc-700 bg-black/40 px-4 py-3 text-zinc-100 outline-none focus:border-red-500"
        />
        <textarea
          rows={5}
          placeholder="Pesan"
          className="rounded-xl border border-zinc-700 bg-black/40 px-4 py-3 text-zinc-100 outline-none focus:border-red-500"
        />
        <button
          type="button"
          className="w-fit rounded-full border border-red-500 bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-500"
        >
          Kirim
        </button>
      </form>
    </section>
  );
}
