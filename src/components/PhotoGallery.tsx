import { useState } from "react"
import Icon from "@/components/ui/icon"

const photos = [
  {
    url: "https://cdn.poehali.dev/projects/ef77ea85-5071-4b1f-893a-2d42a52e5e31/bucket/d49d45aa-4534-4555-b72f-a1953e7b76fb.jpg",
    alt: "Участницы конкурса на сцене",
  },
  {
    url: "https://cdn.poehali.dev/projects/ef77ea85-5071-4b1f-893a-2d42a52e5e31/bucket/d8585365-8d6b-4928-8917-785aeac2bfba.jpg",
    alt: "Гости мероприятия",
  },
  {
    url: "https://cdn.poehali.dev/projects/ef77ea85-5071-4b1f-893a-2d42a52e5e31/bucket/11f83693-a28e-4280-a872-d6b9f00796e3.jpg",
    alt: "Конкурсный показ",
  },
  {
    url: "https://cdn.poehali.dev/projects/ef77ea85-5071-4b1f-893a-2d42a52e5e31/bucket/0330dd91-0eb3-4e08-ac8a-a517e71e6a03.jpg",
    alt: "Жюри конкурса",
  },
  {
    url: "https://cdn.poehali.dev/projects/ef77ea85-5071-4b1f-893a-2d42a52e5e31/bucket/1d00ba6e-e700-4808-8a1f-8223e99ece96.jpg",
    alt: "Живая музыка на мероприятии",
  },
  {
    url: "https://cdn.poehali.dev/projects/ef77ea85-5071-4b1f-893a-2d42a52e5e31/bucket/5f4838eb-41b3-40b4-8ae1-aa1401ff4560.jpg",
    alt: "Гости на фотозоне",
  },
]

export default function PhotoGallery() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  const prev = () => setLightbox((i) => (i !== null ? (i - 1 + photos.length) % photos.length : null))
  const next = () => setLightbox((i) => (i !== null ? (i + 1) % photos.length : null))

  return (
    <section className="relative py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-yellow-500 text-sm font-semibold tracking-[0.3em] uppercase mb-4">Атмосфера</p>
          <h2 className="text-4xl md:text-6xl font-light tracking-wider text-gray-900">
            ЖИВЫЕ{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent">
              КАДРЫ
            </span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-5xl mx-auto">
          {/* Большое фото */}
          <div
            className="col-span-2 md:col-span-2 row-span-2 cursor-pointer overflow-hidden group relative"
            style={{ clipPath: "polygon(16px 0%, 100% 0%, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)" }}
            onClick={() => setLightbox(0)}
          >
            <img
              src={photos[0].url}
              alt={photos[0].alt}
              className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <Icon name="ZoomIn" size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* Маленькие фото */}
          {photos.slice(1).map((photo, i) => (
            <div
              key={i}
              className="cursor-pointer overflow-hidden group relative"
              style={{ clipPath: "polygon(12px 0%, 100% 0%, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)" }}
              onClick={() => setLightbox(i + 1)}
            >
              <img
                src={photo.url}
                alt={photo.alt}
                className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <Icon name="ZoomIn" size={24} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white"
            onClick={() => setLightbox(null)}
          >
            <Icon name="X" size={32} />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
            onClick={(e) => { e.stopPropagation(); prev() }}
          >
            <Icon name="ChevronLeft" size={40} />
          </button>
          <img
            src={photos[lightbox].url}
            alt={photos[lightbox].alt}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
            onClick={(e) => { e.stopPropagation(); next() }}
          >
            <Icon name="ChevronRight" size={40} />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setLightbox(i) }}
                className={`w-2 h-2 rounded-full transition-colors ${i === lightbox ? "bg-yellow-400" : "bg-white/40"}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}