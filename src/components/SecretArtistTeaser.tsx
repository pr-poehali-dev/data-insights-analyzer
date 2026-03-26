export default function SecretArtistTeaser() {
  return (
    <section className="relative overflow-hidden bg-black py-32 px-6">
      {/* Фоновый шум */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Золотое свечение */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #d4a017 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="text-yellow-500 text-xs font-semibold tracking-[0.4em] uppercase mb-8">
          Специальная программа
        </p>

        <h2
          className="text-white font-light tracking-widest mb-6"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(0.7rem, 1vw, 0.85rem)", lineHeight: 1.15 }}
        >
          На сцене выступит
          <br />
          <span className="text-yellow-400 italic">известный артист</span>
        </h2>

        <div className="flex items-center gap-4 justify-center mb-10">
          <div className="h-px w-16 bg-yellow-500/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
          <div className="h-px w-16 bg-yellow-500/40" />
        </div>

        <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-12">
          Имя хедлайнера пока хранится в тайне —<br className="hidden md:block" />
          но мы обещаем: это будет&nbsp;
          <span className="text-white font-medium">громко</span>.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {["Топ чартов", "Миллионы слушателей", "Живое выступление"].map((hint) => (
            <div
              key={hint}
              className="border border-yellow-500/30 text-yellow-400/80 text-xs tracking-[0.25em] uppercase px-5 py-2.5"
            >
              {hint}
            </div>
          ))}
        </div>

        <p className="mt-16 text-gray-600 text-sm tracking-widest uppercase">
          Следите за анонсами ✦
        </p>
      </div>
    </section>
  )
}