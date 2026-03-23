import type React from "react"

const testimonials = [
  {
    id: 0,
    testimonial:
      "Спонсорство «Саранской красавицы» стало для нас настоящим открытием. Наши гости узнавали логотип Культ на всех площадках мероприятия — атмосфера шоу идеально совпала с духом нашего заведения. Уже готовимся к следующему году.",
    by: "Луконин Н.А.",
    company: "Ресто-клуб «Культ»",
    imgSrc: "https://cdn.poehali.dev/projects/ef77ea85-5071-4b1f-893a-2d42a52e5e31/bucket/a21376a9-61ad-41eb-89a1-20e21ce158db.jpg",
    imgObjectPosition: "50% 42%",
    imgScale: "scale(1.8)",
    rotate: "-3deg",
    translateY: "0px",
  },
  {
    id: 1,
    testimonial:
      "Партнёрство с «Саранской красавицей» дало нам прямой выход на целевую аудиторию — владельцев автомобилей, которые ценят качество. Публикации с нашим брендом охватили тысячи подписчиков. Отличная инвестиция в репутацию студии.",
    by: "Ульянов А.В.",
    company: "Toner 13/58 Pro",
    imgSrc: "https://cdn.poehali.dev/projects/ef77ea85-5071-4b1f-893a-2d42a52e5e31/bucket/4dd29801-71a9-416b-a495-712d644248ac.jpg",
    imgObjectPosition: "50% 42%",
    imgScale: "scale(2.4)",
    rotate: "2deg",
    translateY: "40px",
  },
  {
    id: 2,
    testimonial:
      "Конкурс красоты — это именно та среда, где наш бренд говорит сам за себя. Мы получили живые отзывы, новых клиентов и мощный охват в соцсетях. Каждая участница и зрительница — наша потенциальная гостья.",
    by: "Лукина А.М.",
    company: "AL. Alena Lukina",
    imgSrc: "https://cdn.poehali.dev/projects/ef77ea85-5071-4b1f-893a-2d42a52e5e31/bucket/8da12843-74b7-43e3-953f-0d86510e2875.jpg",
    imgObjectPosition: "50% 50%",
    imgScale: "scale(1.7)",
    rotate: "-1.5deg",
    translateY: "20px",
  },
  {
    id: 3,
    testimonial:
      "Неожиданно для себя нашли здесь именно ту аудиторию — активные семьи, владельцы загородных домов. Узнаваемость НЕВА выросла заметно. Организаторы — профессионалы, всё чётко и в срок. Однозначно рекомендуем.",
    by: "Щербаков К.В.",
    company: "НЕВА Септик-Сервис",
    imgSrc: "https://cdn.poehali.dev/projects/ef77ea85-5071-4b1f-893a-2d42a52e5e31/bucket/e4d8d180-b1b5-488e-8322-aa8b3b3e0152.jpg",
    imgObjectPosition: "50% 30%",
    imgScale: "scale(0.75)",
    rotate: "3deg",
    translateY: "-10px",
  },
]

export const StaggerTestimonials: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2">
      {testimonials.map((t) => (
        <div
          key={t.id}
          className="bg-white border-2 border-gray-200 p-6 shadow-md"
          style={{
            transform: `rotate(${t.rotate}) translateY(${t.translateY})`,
            clipPath: "polygon(24px 0%, 100% 0%, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%, 0 24px)",
          }}
        >
          <div className="mb-4 h-14 w-14 rounded-full overflow-hidden">
            <img
              src={t.imgSrc}
              alt={t.by}
              className="h-full w-full object-cover"
              style={{
                objectPosition: t.imgObjectPosition,
                transform: t.imgScale,
                transformOrigin: "center",
              }}
            />
          </div>
          <p className="text-gray-800 text-sm leading-relaxed mb-4">
            «{t.testimonial}»
          </p>
          <div className="border-t border-gray-100 pt-3">
            <p className="text-gray-900 font-semibold text-sm">{t.by}</p>
            <p className="text-gray-500 text-xs">{t.company}</p>
          </div>
        </div>
      ))}
    </div>
  )
}