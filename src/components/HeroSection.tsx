import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Icon from "@/components/ui/icon"

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "О мероприятии", href: "#mission" },
    { name: "Аудитория", href: "#community" },
    { name: "Преимущества", href: "#benefits" },
    { name: "Стать спонсором", href: "#join" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) element.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <div id="hero" className="relative h-screen w-full overflow-hidden" style={{ backgroundColor: "#0a1a0d" }}>

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://cdn.poehali.dev/projects/ef77ea85-5071-4b1f-893a-2d42a52e5e31/files/810670a1-40ca-4433-869e-5c597e06578b.jpg')` }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(to bottom, rgba(10,26,13,0.55) 0%, rgba(10,26,13,0.3) 40%, rgba(10,26,13,0.75) 100%)"
      }} />

      {/* Left vertical gold line accent */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 h-40 w-px bg-gradient-to-b from-transparent via-yellow-400 to-transparent hidden md:block z-20" />
      {/* Right vertical gold line accent */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 h-40 w-px bg-gradient-to-b from-transparent via-yellow-400 to-transparent hidden md:block z-20" />

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-8 py-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2 text-white"
        >
          <span className="text-yellow-400 text-lg">✦</span>
          <span className="font-semibold text-sm tracking-[0.2em] uppercase" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem" }}>
            Саранская красавица
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:flex items-center gap-8"
        >
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="relative text-white/80 hover:text-yellow-300 transition-colors duration-300 text-xs font-medium tracking-[0.15em] uppercase pb-1 group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-yellow-400 transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </motion.div>

        <button className="md:hidden text-white z-40 relative" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute inset-0 z-30 md:hidden flex flex-col items-center justify-center" style={{ backgroundColor: "rgba(10,26,13,0.97)" }}>
          {navItems.map((item, i) => (
            <motion.button
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => scrollToSection(item.href)}
              className="text-white text-2xl mb-8 tracking-wider hover:text-yellow-300 transition-colors"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {item.name}
            </motion.button>
          ))}
        </div>
      )}

      {/* Hero content — split layout */}
      <div className="relative z-10 flex h-full items-end pb-20 px-8 md:px-16">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-end">

          {/* Left — main title */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-yellow-400 text-xs font-semibold tracking-[0.35em] uppercase mb-5">
              Коммерческое предложение · 2026
            </p>
            <h1
              className="text-white leading-[0.9] mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(3.5rem, 8vw, 7rem)", fontWeight: 500 }}
            >
              Саранская<br />
              <em className="not-italic bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-200 bg-clip-text text-transparent italic">
                Красавица
              </em>
            </h1>

            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-10 bg-yellow-400/60" />
              <p className="text-white/60 text-sm tracking-widest uppercase">Конкурс красоты и таланта</p>
            </div>

            <button
              onClick={() => scrollToSection("#join")}
              className="inline-flex items-center gap-3 text-gray-900 font-medium text-sm tracking-widest uppercase px-8 py-4 transition-all duration-300 hover:scale-105"
              style={{ background: "linear-gradient(135deg, #f5d060, #e8a020)", clipPath: "polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0 100%)" }}
            >
              <Icon name="Crown" size={16} />
              Стать спонсором
            </button>
          </motion.div>

          {/* Right — stats + description */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:text-right"
          >
            <p className="text-white/70 text-base leading-relaxed mb-8 max-w-md md:ml-auto">
              Станьте частью главного культурного события Саранска. Прямой контакт с тысячами жителей города и уникальные возможности для продвижения вашего бренда.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "3 000+", label: "Зрителей" },
                { value: "100 000+", label: "Охват в СМИ" },
                { value: "3", label: "Года на площадках" },
              ].map((s) => (
                <div key={s.label} className="border border-yellow-400/20 p-4 text-center" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
                  <div className="text-yellow-400 font-light mb-1" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem", letterSpacing: "0.05em" }}>
                    {s.value}
                  </div>
                  <div className="text-white/50 text-xs tracking-widest uppercase">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent z-20" />
    </div>
  )
}