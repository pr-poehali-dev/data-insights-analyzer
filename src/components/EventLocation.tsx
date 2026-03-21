import { useEffect, useState } from "react"
import Icon from "@/components/ui/icon"

interface Location {
  name: string
  address: string
  city: string
  region: string
  description: string
  capacity: number
  area_sqm: number
  parking: boolean
  parking_spaces: number
  landmark: string
  latitude: number | null
  longitude: number | null
  website: string | null
  phone: string | null
}

export default function EventLocation() {
  const [location, setLocation] = useState<Location | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://functions.poehali.dev/ef5490f6-3e13-45f5-8491-7ae533ac9c61")
      .then((r) => r.json())
      .then((data) => {
        setLocation(data.location)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const mapsUrl = location?.latitude && location?.longitude
    ? `https://maps.yandex.ru/?ll=${location.longitude},${location.latitude}&z=16&text=${encodeURIComponent(location.name + ', ' + location.address)}`
    : `https://maps.yandex.ru/?text=${encodeURIComponent("Огарев Арена Саранск")}`

  const stats = location ? [
    { icon: "Users", label: "Вместимость", value: `${location.capacity.toLocaleString("ru")}+` },
    { icon: "Maximize2", label: "Площадь", value: `${location.area_sqm.toLocaleString("ru")} м²` },
    { icon: "MapPin", label: "Ориентир", value: location.landmark },
  ] : []

  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: "#0f1f14" }}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #eab308 0%, transparent 50%), radial-gradient(circle at 80% 50%, #1a4a28 0%, transparent 50%)" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-yellow-400 text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Место проведения
          </p>
          <h2 className="text-4xl md:text-6xl font-light tracking-wider text-white mb-4">
            ГДЕ{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              ПРОЙДЁТ КОНКУРС
            </span>
          </h2>
        </div>

        {loading ? (
          <div className="max-w-5xl mx-auto h-80 bg-white/5 animate-pulse" />
        ) : location ? (
          <div className="max-w-5xl mx-auto">
            {/* Main card */}
            <div className="border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden"
              style={{ clipPath: "polygon(24px 0%, 100% 0%, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%, 0 24px)" }}
            >
              {/* Gold top line */}
              <div className="h-1 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400" />

              <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                  {/* Left: Info */}
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-yellow-400/20 flex items-center justify-center">
                        <Icon name="Building2" size={16} className="text-yellow-400" />
                      </div>
                      <span className="text-yellow-400 text-xs font-medium tracking-widest uppercase">Площадка</span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-light text-white mb-3 leading-tight">
                      {location.name}
                    </h3>

                    <div className="flex items-center gap-2 mb-6">
                      <Icon name="MapPin" size={14} className="text-gray-400 shrink-0" />
                      <span className="text-gray-300 text-sm">{location.address}, {location.city}</span>
                    </div>

                    <p className="text-gray-400 leading-relaxed text-sm mb-8">
                      {location.description}
                    </p>

                    {/* Action buttons */}
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-6 py-3 font-medium text-sm tracking-wide hover:bg-yellow-300 transition-colors duration-200"
                        style={{ clipPath: "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0 100%)" }}
                      >
                        <Icon name="Navigation" size={15} />
                        Как добраться
                      </a>

                      {location.website && (
                        <a
                          href={location.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 font-semibold text-sm tracking-wide hover:border-white/40 hover:bg-white/5 transition-all duration-200"
                          style={{ clipPath: "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0 100%)" }}
                        >
                          <Icon name="Globe" size={15} />
                          Сайт площадки
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right: Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-white/5 border border-white/10 p-5"
                        style={{ clipPath: "polygon(12px 0%, 100% 0%, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)" }}
                      >
                        <div className="w-9 h-9 bg-yellow-400/10 flex items-center justify-center mb-3">
                          <Icon name={stat.icon} size={16} className="text-yellow-400" />
                        </div>
                        <div className="text-xl font-light text-white mb-1" style={{ letterSpacing: "0.05em" }}>{stat.value}</div>
                        <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom hint */}
            <p className="text-center text-gray-600 text-xs mt-6 tracking-wide">
              {location.region} · Точная дата будет объявлена дополнительно
            </p>
          </div>
        ) : null}
      </div>
    </section>
  )
}
