import type * as React from "react"
import { LiquidButton } from "@/components/ui/liquid-glass-button"
import { MapPin, Users, Calendar, Trophy, Phone, Mail } from "lucide-react"

interface SmoothScrollHeroProps {
  scrollHeight?: number
  desktopImage: string
  mobileImage: string
  initialClipPercentage?: number
  finalClipPercentage?: number
}

const SmoothScrollHero: React.FC<SmoothScrollHeroProps> = ({ desktopImage, mobileImage }) => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden" style={{ backgroundColor: "#0d0d0d" }}>
      {/* Gold top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

      {/* Subtle background image with dark overlay */}
      <div
        className="absolute inset-0 hidden md:block opacity-10"
        style={{ backgroundImage: `url(${desktopImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div
        className="absolute inset-0 md:hidden opacity-10"
        style={{ backgroundImage: `url(${mobileImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />

      {/* Gold gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/5 via-transparent to-yellow-400/5 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen py-24">
        <div className="text-center text-white max-w-4xl mx-auto px-6">

          <p className="text-yellow-400 text-sm font-medium tracking-[0.3em] uppercase mb-4">
            Стать спонсором
          </p>

          <h2
            className="text-5xl md:text-7xl lg:text-8xl font-light tracking-wide mb-6 leading-none"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Готовы
            <br />
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-200 bg-clip-text text-transparent italic">
              сотрудничать?
            </span>
          </h2>

          <p className="text-lg md:text-xl text-white/60 mb-12 leading-relaxed max-w-2xl mx-auto">
            Свяжитесь с нами сегодня — обсудим условия партнёрства
            <br className="hidden md:block" />
            и подберём оптимальный пакет для вашего бренда.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Users, value: "2 000+", label: "Зрителей на шоу" },
              { icon: MapPin, value: "50 000+", label: "Охват онлайн" },
              { icon: Calendar, value: "2026", label: "Год проведения" },
              { icon: Trophy, value: "3", label: "Лет мероприятию" },
            ].map((s) => (
              <div key={s.label} className="text-center border border-yellow-400/15 p-5" style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
                <div className="w-9 h-9 bg-yellow-400/10 flex items-center justify-center mx-auto mb-3">
                  <s.icon className="w-4 h-4 text-yellow-400" />
                </div>
                <div className="text-2xl md:text-3xl font-extralight text-white mb-1" style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.08em" }}>
                  {s.value}
                </div>
                <div className="text-xs text-white/40 tracking-widest uppercase">{s.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <LiquidButton size="xxl" className="font-light text-lg tracking-widest px-12 py-4">
            ОБСУДИТЬ СОТРУДНИЧЕСТВО
          </LiquidButton>

          {/* Contact Info */}
          <div className="mt-14 pt-8 border-t border-yellow-400/20">
            <p className="text-xs text-yellow-400/70 mb-6 font-medium tracking-[0.3em] uppercase">Контакты организаторов</p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+79026683540"
                  className="flex items-center gap-3 border border-white/10 hover:border-yellow-400/40 px-5 py-3 transition-all duration-200 group"
                  style={{ clipPath: "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0 100%)", backgroundColor: "rgba(255,255,255,0.04)" }}
                >
                  <div className="w-8 h-8 bg-yellow-400/10 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-yellow-400" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-white/40 font-medium">Телефон</div>
                    <div className="text-white font-light text-sm group-hover:text-yellow-300 transition-colors">+7 (902) 668-35-40</div>
                  </div>
                </a>

                <a
                  href="mailto:saransk1641@bk.ru"
                  className="flex items-center gap-3 border border-white/10 hover:border-yellow-400/40 px-5 py-3 transition-all duration-200 group"
                  style={{ clipPath: "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0 100%)", backgroundColor: "rgba(255,255,255,0.04)" }}
                >
                  <div className="w-8 h-8 bg-yellow-400/10 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-yellow-400" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-white/40 font-medium">Email / Telegram</div>
                    <div className="text-white font-light text-sm group-hover:text-yellow-300 transition-colors">saransk1641@bk.ru</div>
                  </div>
                </a>
              </div>

              {/* QR code */}
              <div className="flex flex-col items-center gap-2">
                <div className="border border-yellow-400/20 p-3 bg-white">
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${encodeURIComponent('https://t.me/+79026683540')}&color=111111&bgcolor=ffffff`}
                    alt="QR-код Telegram"
                    width={100}
                    height={100}
                  />
                </div>
                <span className="text-xs text-white/30 font-medium">Сканируй для Telegram</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Gold bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
    </div>
  )
}

export default SmoothScrollHero