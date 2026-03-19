import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

interface Benefit {
  id: number
  title: string
  description: string
  category: string
  package_level: string
  icon: string
  sort_order: number
}

const CATEGORY_LABELS: Record<string, string> = {
  branding: "Брендирование",
  pr: "PR",
  media: "Медиа",
  digital: "Digital",
  vip: "VIP",
}

const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string; dot: string }> = {
  branding: { bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200", dot: "bg-purple-400" },
  pr:       { bg: "bg-rose-50",   text: "text-rose-700",   border: "border-rose-200",   dot: "bg-rose-400" },
  media:    { bg: "bg-blue-50",   text: "text-blue-700",   border: "border-blue-200",   dot: "bg-blue-400" },
  digital:  { bg: "bg-emerald-50",text: "text-emerald-700",border: "border-emerald-200",dot: "bg-emerald-400" },
  vip:      { bg: "bg-yellow-50", text: "text-yellow-700", border: "border-yellow-200", dot: "bg-yellow-400" },
}

const PACKAGE_BADGE: Record<string, { label: string; style: string }> = {
  all:    { label: "Все пакеты",  style: "bg-gray-100 text-gray-600" },
  bronze: { label: "Бронзовый+", style: "bg-amber-100 text-amber-700" },
  silver: { label: "Серебряный+", style: "bg-gray-200 text-gray-600" },
  gold:   { label: "Золотой",    style: "bg-yellow-100 text-yellow-700" },
}

const CATEGORIES_ORDER = ["branding", "pr", "media", "digital", "vip"]

export default function SponsorBenefitsGrid() {
  const [benefits, setBenefits] = useState<Benefit[]>([])
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://functions.poehali.dev/9a6daaff-0015-4961-b3ab-b1ed82cb7546")
      .then((r) => r.json())
      .then((data) => {
        setBenefits(data.benefits || [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const categories = ["all", ...CATEGORIES_ORDER.filter((c) => benefits.some((b) => b.category === c))]

  const filtered = activeCategory === "all"
    ? benefits
    : benefits.filter((b) => b.category === activeCategory)

  return (
    <section className="relative py-24 bg-white">
      <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-yellow-500 text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Что вы получаете
          </p>
          <h2 className="text-4xl md:text-6xl font-light tracking-wider text-gray-900 mb-6">
            ПРЕИМУЩЕСТВА{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent">
              СПОНСОРА
            </span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Брендирование, PR и медийное присутствие — всё в одном партнёрстве
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => {
            const colors = CATEGORY_COLORS[cat]
            const isActive = activeCategory === cat
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-sm font-semibold tracking-wide transition-all duration-200 border-2 ${
                  isActive
                    ? cat === "all"
                      ? "bg-gray-900 text-white border-gray-900"
                      : `${colors.bg} ${colors.text} ${colors.border}`
                    : "bg-white text-gray-500 border-gray-200 hover:border-gray-300"
                }`}
                style={{ clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0 100%)" }}
              >
                {cat === "all" ? "Все" : CATEGORY_LABELS[cat]}
              </button>
            )
          })}
        </motion.div>

        {/* Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-44 bg-gray-100 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((benefit, i) => {
              const colors = CATEGORY_COLORS[benefit.category] || CATEGORY_COLORS.branding
              const badge = PACKAGE_BADGE[benefit.package_level] || PACKAGE_BADGE.all
              return (
                <motion.div
                  key={benefit.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="group bg-white border-2 border-gray-100 p-7 hover:border-gray-300 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                  style={{ clipPath: "polygon(16px 0%, 100% 0%, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)" }}
                >
                  {/* Category accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 ${colors.dot}`} />

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-none flex items-center justify-center mb-5 ${colors.bg} border ${colors.border}`}>
                    <Icon name={benefit.icon} fallback="Star" size={22} className={colors.text} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-medium text-gray-900 mb-2 tracking-wide leading-tight">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed mb-5">
                    {benefit.description}
                  </p>

                  {/* Footer badges */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-xs font-semibold px-3 py-1 ${colors.bg} ${colors.text}`}>
                      {CATEGORY_LABELS[benefit.category]}
                    </span>
                    <span className={`text-xs font-semibold px-3 py-1 ${badge.style}`}>
                      {badge.label}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-sm mb-4">
            Полный набор преимуществ зависит от выбранного пакета спонсорства
          </p>
          <button
            onClick={() => document.querySelector("#join")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 font-bold tracking-widest text-sm hover:bg-gray-700 transition-colors duration-300"
            style={{ clipPath: "polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0 100%)" }}
          >
            <Icon name="Crown" size={16} />
            ОБСУДИТЬ ПАКЕТ
          </button>
        </motion.div>
      </div>
    </section>
  )
}