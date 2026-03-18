import type * as React from "react"
import { useRef } from "react"
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion"
import { LiquidButton } from "@/components/ui/liquid-glass-button"
import { MapPin, Users, Calendar, Trophy, Phone, Mail } from "lucide-react"

interface SmoothScrollHeroProps {
  scrollHeight?: number
  desktopImage: string
  mobileImage: string
  initialClipPercentage?: number
  finalClipPercentage?: number
}

const SmoothScrollHero: React.FC<SmoothScrollHeroProps> = ({
  scrollHeight = 1875,
  desktopImage,
  mobileImage,
  initialClipPercentage = 25,
  finalClipPercentage = 75,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Clip path animation - image fully reveals by 70% scroll progress
  const clipStart = useTransform(scrollYProgress, [0, 0.7], [initialClipPercentage, 0])
  const clipEnd = useTransform(scrollYProgress, [0, 0.7], [finalClipPercentage, 100])
  const clipPath = useMotionTemplate`polygon(${clipStart}% ${clipStart}%, ${clipEnd}% ${clipStart}%, ${clipEnd}% ${clipEnd}%, ${clipStart}% ${clipEnd}%)`

  // Background size animation - completes when image is fully revealed
  const backgroundSize = useTransform(scrollYProgress, [0, 0.7], ["170%", "100%"])

  // Scale animation - completes when image is fully revealed
  const scale = useTransform(scrollYProgress, [0, 0.7], [1.2, 1])

  // CTA overlay animations - appears earlier and completes by 50%
  const ctaOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1])
  const ctaY = useTransform(scrollYProgress, [0.3, 0.5], [50, 0])

  return (
    <div ref={containerRef} style={{ height: `${scrollHeight}px` }} className="relative w-full">
      <motion.div
        className="sticky top-0 h-screen w-full bg-black overflow-hidden"
        style={{
          clipPath,
          willChange: "transform",
        }}
      >
        {/* Desktop background */}
        <motion.div
          className="absolute inset-0 hidden md:block"
          style={{
            backgroundImage: `url(${desktopImage})`,
            backgroundSize,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            scale,
          }}
        />
        {/* Mobile background */}
        <motion.div
          className="absolute inset-0 md:hidden"
          style={{
            backgroundImage: `url(${mobileImage})`,
            backgroundSize,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            scale,
          }}
        />

        {/* Dark overlay for better contrast */}
        <div className="absolute inset-0 bg-black/40" />

        {/* CTA Overlay */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-20"
          style={{
            opacity: ctaOpacity,
            y: ctaY,
          }}
        >
          <div className="text-center text-white max-w-4xl mx-auto px-6">
            {/* Main CTA Heading */}
            <p className="text-yellow-400 text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Стать спонсором
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-wider mb-6 leading-none">
              ГОТОВЫ
              <br />
              <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                СОТРУДНИЧАТЬ?
              </span>
            </h2>

            {/* Supporting Text */}
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed font-medium">
              Свяжитесь с нами сегодня — обсудим условия партнёрства
              <br className="hidden md:block" />
              и подберём оптимальный пакет для вашего бренда.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="w-10 h-10 bg-yellow-400/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-yellow-300" />
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-black text-white mb-1">2 000+</div>
                <div className="text-xs md:text-sm text-gray-300 font-medium">Зрителей на шоу</div>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="w-10 h-10 bg-yellow-400/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-yellow-300" />
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-black text-white mb-1">50 000+</div>
                <div className="text-xs md:text-sm text-gray-300 font-medium">Охват онлайн</div>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="w-10 h-10 bg-yellow-400/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-yellow-300" />
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-black text-white mb-1">2026</div>
                <div className="text-xs md:text-sm text-gray-300 font-medium">Год проведения</div>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="w-10 h-10 bg-yellow-400/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-yellow-300" />
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-black text-white mb-1">5</div>
                <div className="text-xs md:text-sm text-gray-300 font-medium">Лет мероприятию</div>
              </div>
            </div>

            {/* CTA Button */}
            <LiquidButton
              size="xxl"
              className="font-bold text-xl tracking-wide px-12 py-4"
            >
              ОБСУДИТЬ СОТРУДНИЧЕСТВО
            </LiquidButton>

            {/* Contact Info */}
            <div className="mt-12 pt-6 border-t border-yellow-400/30">
              <p className="text-xs text-yellow-400 mb-6 font-bold tracking-[0.3em] uppercase">Контакты организаторов</p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                {/* Contact cards */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+79026683540"
                    className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-yellow-400/50 px-5 py-3 transition-all duration-200 group"
                    style={{ clipPath: "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0 100%)" }}
                  >
                    <div className="w-8 h-8 bg-yellow-400/20 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-yellow-400" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-gray-400 font-medium">Телефон</div>
                      <div className="text-white font-bold text-sm group-hover:text-yellow-300 transition-colors">+7 (902) 668-35-40</div>
                    </div>
                  </a>

                  <a
                    href="mailto:saransk1641@bk.ru"
                    className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-yellow-400/50 px-5 py-3 transition-all duration-200 group"
                    style={{ clipPath: "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0 100%)" }}
                  >
                    <div className="w-8 h-8 bg-yellow-400/20 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-yellow-400" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-gray-400 font-medium">Email / Telegram</div>
                      <div className="text-white font-bold text-sm group-hover:text-yellow-300 transition-colors">saransk1641@bk.ru</div>
                    </div>
                  </a>
                </div>

                {/* QR code */}
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-white p-3">
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${encodeURIComponent('https://t.me/+79026683540')}&color=111111&bgcolor=ffffff`}
                      alt="QR-код Telegram"
                      width={100}
                      height={100}
                    />
                  </div>
                  <span className="text-xs text-gray-500 font-medium">Сканируй для Telegram</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default SmoothScrollHero