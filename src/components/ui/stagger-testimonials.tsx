import type React from "react"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const SQRT_5000 = Math.sqrt(5000)

// Testimonials from sponsors and participants of «Саранская красавица»
const testimonials = [
  {
    tempId: 0,
    testimonial:
      "Наш бренд впервые стал партнёром «Саранской красавицы» — и это лучшее маркетинговое решение года. Живой контакт с аудиторией, охват в соцсетях и искренние эмоции зрителей — это не купишь за деньги.",
    by: "Алексей Романов, директор по маркетингу, ТЦ «Меридиан»",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AlexeyRomanov&backgroundColor=b45309&textColor=ffffff",
  },
  {
    tempId: 1,
    testimonial:
      "Участие в конкурсе изменило мою жизнь. Я обрела уверенность, нашла потрясающих подруг и получила предложение о работе. «Саранская красавица» — это трамплин для каждой девушки.",
    by: "Алина Кузнецова, победительница 2024 года",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AlinaKuznetsova&backgroundColor=db2777&textColor=ffffff",
  },
  {
    tempId: 2,
    testimonial:
      "Мероприятие собрало весь цвет Саранска — от молодёжи до уважаемых горожан. Наш стенд посетили сотни человек, и мы получили в три раза больше лидов, чем на обычной выставке.",
    by: "Ирина Власова, руководитель, «Красота и Здоровье»",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=IrinaVlasova&backgroundColor=7c3aed&textColor=ffffff",
  },
  {
    tempId: 3,
    testimonial:
      "Организаторы — профессионалы. Всё продумано до мелочей: брендирование, медиа, координация. Я рекомендую «Саранскую красавицу» как надёжную площадку для продвижения бренда.",
    by: "Дмитрий Орлов, предприниматель",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=DmitryOrlov&backgroundColor=0891b2&textColor=ffffff",
  },
  {
    tempId: 4,
    testimonial:
      "Зал был переполнен, атмосфера — потрясающая. Публикации в соцсетях с нашим логотипом набрали десятки тысяч просмотров. Мы уже подтвердили участие в следующем году.",
    by: "Наталья Степанова, бренд-менеджер, сеть аптек «Фармацея»",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=NatalyaStepanova&backgroundColor=16a34a&textColor=ffffff",
  },
  {
    tempId: 5,
    testimonial:
      "Для нас это был первый опыт спонсорства конкурса красоты. Мы были приятно удивлены: целевая аудитория — именно наши клиенты. Конверсия от мероприятия превзошла ожидания.",
    by: "Марина Фёдорова, владелец студии красоты «Luxe»",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=MarinaFedorova&backgroundColor=dc2626&textColor=ffffff",
  },
  {
    tempId: 6,
    testimonial:
      "«Саранская красавица» — это не просто шоу. Это событие, которое объединяет город. Стать его частью в качестве спонсора — значит быть рядом с тем, что важно людям.",
    by: "Сергей Белов, генеральный директор, IT-компания «ТехноСаранск»",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=SergeyBelov&backgroundColor=2563eb&textColor=ffffff",
  },
  {
    tempId: 7,
    testimonial:
      "Я участвовала в конкурсе три года назад, а сейчас веду свой бизнес и сама хочу стать спонсором. Это мероприятие даёт девушкам крылья — и я хочу поддержать это.",
    by: "Екатерина Лебедева, участница 2021, предприниматель",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=EkaterinaLebedeva&backgroundColor=ea580c&textColor=ffffff",
  },
  {
    tempId: 8,
    testimonial:
      "Пресс-волл с нашим логотипом попал во все местные СМИ и социальные сети. Узнаваемость бренда после конкурса выросла ощутимо — и это без дополнительных вложений в рекламу.",
    by: "Андрей Кириллов, ювелирный дом «Золотая Мордовия»",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AndreyKirillov&backgroundColor=a855f7&textColor=ffffff",
  },
  {
    tempId: 9,
    testimonial:
      "Зрители запоминают не только участниц, но и партнёров мероприятия. Наш бренд ассоциируется теперь с красотой, женственностью и праздником — лучшего позиционирования не придумать.",
    by: "Юлия Иванова, директор, школа танцев «Эстрелья»",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=YuliyaIvanova&backgroundColor=0d9488&textColor=ffffff",
  },
  {
    tempId: 10,
    testimonial:
      "Мероприятие отличается высоким уровнем организации и статусной аудиторией. Для нас спонсорство — это инвестиция в репутацию, и «Саранская красавица» оправдала каждый рубль.",
    by: "Олег Захаров, ресторан «Мордовская усадьба»",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=OlegZakharov&backgroundColor=be185d&textColor=ffffff",
  },
  {
    tempId: 11,
    testimonial:
      "Именная номинация от нашего бренда вызвала огромный резонанс. Победительница активно нас упоминает в соцсетях — это живая реклама, которая работает ещё год после конкурса.",
    by: "Татьяна Михайлова, бренд «TM Cosmetics Saransk»",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=TatianaMikhailova&backgroundColor=1d4ed8&textColor=ffffff",
  },
]

interface TestimonialCardProps {
  position: number
  testimonial: (typeof testimonials)[0]
  handleMove: (steps: number) => void
  cardSize: number
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ position, testimonial, handleMove, cardSize }) => {
  const isCenter = position === 0
  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 bg-gray-900 text-white border-gray-900"
          : "z-0 bg-white text-gray-900 border-gray-200 hover:border-gray-400",
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent",
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-gray-300"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
        }}
      />
      <img
        src={testimonial.imgSrc || "/placeholder.svg"}
        alt={`${testimonial.by.split(",")[0]}`}
        className="mb-4 h-14 w-12 bg-gray-100 object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px hsl(var(--background))",
        }}
      />
      <h3 className={cn("text-base sm:text-xl font-medium", isCenter ? "text-white" : "text-gray-900")}>
        "{testimonial.testimonial}"
      </h3>
      <p
        className={cn(
          "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
          isCenter ? "text-gray-300" : "text-gray-600",
        )}
      >
        - {testimonial.by}
      </p>
    </div>
  )
}

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365)
  const [testimonialsList, setTestimonialsList] = useState(testimonials)

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList]
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift()
        if (!item) return
        newList.push({ ...item, tempId: Math.random() })
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop()
        if (!item) return
        newList.unshift({ ...item, tempId: Math.random() })
      }
    }
    setTestimonialsList(newList)
  }

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)")
      setCardSize(matches ? 365 : 290)
    }
    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return (
    <div className="relative w-full overflow-hidden bg-white" style={{ height: 600 }}>
      {testimonialsList.map((testimonial, index) => {
        const position =
          testimonialsList.length % 2 ? index - (testimonialsList.length + 1) / 2 : index - testimonialsList.length / 2
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        )
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-gray-300 hover:bg-gray-900 hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2",
          )}
          aria-label="Предыдущий отзыв"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-gray-300 hover:bg-gray-900 hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2",
          )}
          aria-label="Следующий отзыв"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}