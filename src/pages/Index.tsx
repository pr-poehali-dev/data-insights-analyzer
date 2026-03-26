import HeroSection from "@/components/HeroSection"
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll"
import { Timeline } from "@/components/ui/timeline"
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials"
import SmoothScrollHero from "@/components/ui/smooth-scroll-hero"
import SponsorBenefitsGrid from "@/components/SponsorBenefitsGrid"
import EventLocation from "@/components/EventLocation"
import PhotoGallery from "@/components/PhotoGallery"
import SecretArtistTeaser from "@/components/SecretArtistTeaser"

export default function Index() {
  const missionStatement =
    "«Саранская красавица» — это не просто конкурс красоты. Это ежегодный городской праздник, который объединяет молодёжь города. Мы создаём платформу для вдохновения, самовыражения и признания. Партнёрство с нашим событием — это прямой диалог с активной, лояльной и платёжеспособной аудиторией Саранска и всей республики Мордовия."

  const timelineEntries = [
    {
      id: 1,
      image: "https://cdn.poehali.dev/projects/ef77ea85-5071-4b1f-893a-2d42a52e5e31/bucket/d3f66735-3569-4ebc-adc9-57cfd9c503a1.jpg",
      alt: "Аудитория мероприятия",
      title: "Кто приходит на «Саранскую красавицу»",
      description:
        "Более 2 000 зрителей на площадке и охваты 100 000+. Молодёжь города, представители бизнеса и городской культурной элиты. Это лояльная, вовлечённая аудитория с высоким уровнем доверия к брендам-партнёрам мероприятия.",
      layout: "left" as const,
    },
    {
      id: 2,
      image: "https://cdn.poehali.dev/projects/ef77ea85-5071-4b1f-893a-2d42a52e5e31/bucket/940a674c-2c44-4dbc-8866-03f3b4f4d276.jpg",
      alt: "Медийное покрытие",
      title: "Медийное присутствие вашего бренда",
      description:
        "Логотип спонсора на афишах, баннерах и пресс-волле. Упоминания в пресс-релизах и новостных публикациях. Интеграция бренда в трансляцию мероприятия. Публикации в официальных социальных сетях с охватом свыше 100 000. Ваш бренд — рядом с главным событием города.",
      layout: "right" as const,
    },
    {
      id: 3,
      image: "https://cdn.poehali.dev/projects/ef77ea85-5071-4b1f-893a-2d42a52e5e31/bucket/726183e4-eacb-4dce-b83d-6e841f0047a6.jpg",
      alt: "Спонсорские пакеты",
      title: "Три уровня партнёрства",
      description:
        "Мы предлагаем гибкие спонсорские пакеты: Премиум (генеральный спонсор), Платинум (официальный партнёр) и Стандарт (партнёр мероприятия). Каждый пакет включает уникальный набор возможностей — от эксклюзивного брендирования до именных номинаций и VIP-присутствия на мероприятии.",
      layout: "left" as const,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Mission Section */}
      <section id="mission" className="relative min-h-screen flex items-center justify-center py-20 bg-white">
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-yellow-500 text-sm font-semibold tracking-[0.3em] uppercase mb-4">О мероприятии</p>
            <h2 className="text-4xl md:text-6xl font-light tracking-wider mb-12 text-gray-900">
              ПОЧЕМУ МЫ?
            </h2>
            <TextGradientScroll
              text={missionStatement}
              className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-gray-800"
              type="word"
              textOpacity="soft"
            />

            {/* Key Facts */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
              {[
                { value: "3 000+", label: "Зрителей на площадке" },
                { value: "100 000+", label: "Охватов" },
                { value: "13", label: "Участниц конкурса" },
                { value: "3", label: "Года мероприятию" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-light text-gray-900 mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.05em" }}>{stat.value}</div>
                  <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Audience & Packages Section */}
      <section id="community" className="relative py-20 bg-white">
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="relative z-10">
          <div className="container mx-auto px-6 mb-16">
            <div className="text-center">
              <p className="text-yellow-500 text-sm font-semibold tracking-[0.3em] uppercase mb-4">
                Аудитория и возможности
              </p>
              <h2 className="text-4xl md:text-6xl font-light tracking-wider mb-6 text-gray-900">
                ВАШ БРЕНД В ЦЕНТРЕ СОБЫТИЯ
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                Узнайте, как спонсорство «Саранской красавицы» работает на ваш бизнес.
              </p>
            </div>
          </div>

          <Timeline entries={timelineEntries} />
        </div>
      </section>

      {/* Event Location */}
      <EventLocation />

      {/* Photo Gallery */}
      <PhotoGallery />

      {/* Secret Artist Teaser */}
      <SecretArtistTeaser />

      {/* Sponsorship Packages Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-yellow-500 text-sm font-semibold tracking-[0.3em] uppercase mb-4">Пакеты спонсорства</p>
            <h2 className="text-4xl md:text-6xl font-light tracking-wider text-gray-900">
              ВЫБЕРИТЕ УРОВЕНЬ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Bronze */}
            <div
              className="bg-white border-2 border-amber-700/30 p-8 rounded-none relative"
              style={{ clipPath: "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)" }}
            >
              <div className="text-amber-700 text-xs font-medium tracking-[0.3em] uppercase mb-2">Стандарт</div>
              <div className="text-3xl font-light text-gray-900 mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>от 100 000 ₽</div>
              <div className="text-gray-400 text-sm mb-6">Партнёр мероприятия</div>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2"><span className="text-amber-600 mt-0.5">✦</span> Логотип на афише и баннерах</li>
                <li className="flex items-start gap-2"><span className="text-amber-600 mt-0.5">✦</span> Упоминание на мероприятии</li>
                <li className="flex items-start gap-2"><span className="text-amber-600 mt-0.5">✦</span> Публикации в соцсетях мероприятия</li>
                <li className="flex items-start gap-2"><span className="text-amber-600 mt-0.5">✦</span> Упоминание в пресс-релизах</li>
                <li className="flex items-start gap-2"><span className="text-amber-600 mt-0.5">✦</span> Приглашение на фуршет</li>
              </ul>
            </div>

            {/* Silver */}
            <div
              className="bg-white border-2 border-gray-400/50 p-8 rounded-none relative"
              style={{ clipPath: "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)" }}
            >
              <div className="text-gray-500 text-xs font-medium tracking-[0.3em] uppercase mb-2">Платинум</div>
              <div className="text-3xl font-light text-gray-900 mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>от 200 000 ₽</div>
              <div className="text-gray-400 text-sm mb-6">Официальный партнёр</div>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2"><span className="text-gray-500 mt-0.5">✦</span> Всё из пакета Стандарт</li>
                <li className="flex items-start gap-2"><span className="text-gray-500 mt-0.5">✦</span> Брендированная зона на площадке</li>
                <li className="flex items-start gap-2"><span className="text-gray-500 mt-0.5">✦</span> Расширенные публикации в соцсетях</li>
                <li className="flex items-start gap-2"><span className="text-gray-500 mt-0.5">✦</span> Упоминание в пресс-релизах и СМИ</li>
                <li className="flex items-start gap-2"><span className="text-gray-500 mt-0.5">✦</span> Приглашение на фуршет</li>
              </ul>
            </div>

            {/* Gold */}
            <div
              className="border-2 border-yellow-400 p-8 rounded-none relative text-white"
              style={{ backgroundColor: "#0f1f14", clipPath: "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)" }}
            >
              <div className="text-yellow-400 text-xs font-medium tracking-[0.3em] uppercase mb-2">Премиум</div>
              <div className="text-3xl font-light text-white mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>от 300 000 ₽</div>
              <div className="text-gray-400 text-sm mb-6">Генеральный спонсор</div>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-2"><span className="text-yellow-400 mt-0.5">✦</span> Всё из пакета Платинум</li>
                <li className="flex items-start gap-2"><span className="text-yellow-400 mt-0.5">✦</span> Именная номинация от бренда</li>
                <li className="flex items-start gap-2"><span className="text-yellow-400 mt-0.5">✦</span> Эксклюзивное брендирование сцены</li>
                <li className="flex items-start gap-2"><span className="text-yellow-400 mt-0.5">✦</span> Видеоролик о бренде на шоу</li>
                <li className="flex items-start gap-2"><span className="text-yellow-400 mt-0.5">✦</span> Пресс-волл с логотипом спонсора</li>
                <li className="flex items-start gap-2"><span className="text-yellow-400 mt-0.5">✦</span> Приглашение на фуршет</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor Benefits Grid */}
      <SponsorBenefitsGrid />

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-20 bg-white">
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <p className="text-yellow-500 text-sm font-semibold tracking-[0.3em] uppercase mb-4">Обратная связь</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-wider text-gray-900 mb-6">
              Что говорят наши{" "}
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                ПАРТНЁРЫ
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
              Реальные отзывы спонсоров и участниц предыдущих конкурсов.
            </p>
          </div>

          <StaggerTestimonials />
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="join" className="relative">
        <SmoothScrollHero
          desktopImage="https://cdn.poehali.dev/projects/ef77ea85-5071-4b1f-893a-2d42a52e5e31/files/265abc39-520d-44cb-8268-e56fdf815d52.jpg"
          mobileImage="https://cdn.poehali.dev/projects/ef77ea85-5071-4b1f-893a-2d42a52e5e31/files/265abc39-520d-44cb-8268-e56fdf815d52.jpg"
        />
      </section>
    </div>
  )
}