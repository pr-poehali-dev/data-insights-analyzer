import { LiquidButton } from "@/components/ui/liquid-glass-button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "О мероприятии", href: "#mission" },
    { name: "Аудитория", href: "#community" },
    { name: "Отзывы", href: "#testimonials" },
    { name: "Стать спонсором", href: "#join" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div id="hero" className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background gradient */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/beauty-hero.png')`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-purple-950/40 to-black/70" />
      </div>

      {/* Gold decorative line top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent z-20" />

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between p-6 md:p-8">
        <div className="text-white font-bold text-lg tracking-widest uppercase">
          <span className="text-yellow-400">✦</span> Саранская красавица
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="relative text-white hover:text-yellow-300 transition-colors duration-300 font-medium tracking-wide pb-1 group text-sm"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 ease-out group-hover:w-full"></span>
            </button>
          ))}
        </div>

        <button
          className="md:hidden text-white hover:text-yellow-300 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-black/95 z-30 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-white text-2xl font-bold tracking-wider hover:text-yellow-300 transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="text-center text-white max-w-5xl">
          <p className="text-yellow-400 text-sm md:text-base font-semibold tracking-[0.3em] uppercase mb-4">
            Коммерческое предложение для спонсоров
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-wide mb-4 leading-none">
            САРАНСКАЯ
            <br />
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              КРАСАВИЦА
            </span>
          </h1>

          <p className="text-xl md:text-2xl font-light tracking-wide mb-3 text-gray-200">
            Конкурс красоты и таланта · Саранск, 2026
          </p>

          <p className="text-base md:text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Станьте частью главного культурного события года и получите уникальную возможность 
            для продвижения вашего бренда
          </p>

          <LiquidButton
            size="xxl"
            className="font-semibold text-lg tracking-wide"
            onClick={() => scrollToSection("#join")}
          >
            Стать спонсором
          </LiquidButton>
        </div>
      </div>

      {/* Gold decorative line bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent z-20" />
    </div>
  )
}
