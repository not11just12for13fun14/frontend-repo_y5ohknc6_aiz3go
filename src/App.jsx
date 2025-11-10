import { useEffect } from 'react'

function App() {
  useEffect(() => {
    // Enable smooth scroll for same-page anchors
    if (typeof window !== 'undefined') {
      document.documentElement.style.scrollBehavior = 'smooth'
    }
  }, [])

  const navItems = [
    { id: 'about', label: 'О группе' },
    { id: 'videos', label: 'Видео' },
    { id: 'shows', label: 'Концерты' },
    { id: 'riders', label: 'Райдеры' },
    { id: 'contacts', label: 'Контакты' },
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      {/* Hero with background video */}
      <header className="relative h-[90vh] w-full overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          src="https://cdn.coverr.co/videos/coverr-rock-concert-5172/1080p.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Overlay gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        {/* Top navigation */}
        <div className="absolute top-0 left-0 right-0 z-20">
          <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-red-600 to-amber-400 shadow-[0_0_40px_rgba(255,60,60,0.25)]" />
              <div className="leading-tight">
                <p className="text-sm uppercase tracking-widest text-amber-300/90">Baku</p>
                <h1 className="text-xl font-extrabold">Bir Manat Band</h1>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="px-3 py-2 rounded-md text-sm font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              href="#contacts"
              className="hidden md:inline-flex bg-gradient-to-r from-red-600 to-amber-500 hover:from-red-500 hover:to-amber-400 text-black font-extrabold px-4 py-2 rounded-md shadow-lg shadow-red-900/30 transition-colors"
            >
              Связаться
            </a>
          </div>
        </div>

        {/* Centered hero content */}
        <div className="relative z-10 h-full w-full flex items-center">
          <div className="mx-auto max-w-6xl px-4 w-full">
            <div className="max-w-3xl">
              <p className="mb-3 inline-block rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs tracking-wider text-white/80 backdrop-blur-sm">
                Живая музыка · Рок · Поп · Соул · Фанк
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
                Bir Manat Band —
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-red-400 to-amber-300 drop-shadow-[0_0_25px_rgba(255,80,80,0.25)]">
                  энергия живой музыки
                </span>
              </h2>
              <p className="mt-4 text-white/80 text-base sm:text-lg max-w-2xl">
                Профессиональное звучание и драйв живых выступлений из Баку. Мы объединяем
                стили и создаём яркую атмосферу на клубных сценах, фестивалях и частных
                мероприятиях.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <a
                  href="#videos"
                  className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/20 transition-colors"
                >
                  Смотреть видео
                </a>
                <a
                  href="#contacts"
                  className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-red-600 to-amber-500 px-4 py-2 text-sm font-extrabold text-black shadow-lg shadow-red-900/30 hover:from-red-500 hover:to-amber-400 transition-colors"
                >
                  Связаться с нами
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient edge */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#0a0a0b] z-10" />
      </header>

      {/* About Section */}
      <section id="about" className="relative py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-6">О группе</h3>
          <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
            Bir Manat Band — это команда профессиональных музыкантов из Баку. Наш репертуар
            охватывает рок, поп, соул и фанк: от тонких нюансов до мощной энергетики. Мы
            выступаем на крупных площадках и камерных событиях, настраивая программу под
            формат и аудиторию. Главная ценность — честный live и качественный звук.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { t: 'Репертуар', d: 'Гибкий сет с акцентом на хитах и современном звучании.' },
              { t: 'Состав', d: 'Вокал, гитара, бас, клавиши, ударные. Возможны расширения.' },
              { t: 'Звук', d: 'Тщательная подготовка, саундчек, работа с площадкой.' },
            ].map((card, i) => (
              <div key={i} className="rounded-lg border border-white/10 bg-white/5 p-5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <p className="text-amber-300 font-semibold mb-1">{card.t}</p>
                <p className="text-white/80 text-sm">{card.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="relative py-16 md:py-24 bg-[#0c0c0d]">
        <div className="mx-auto max-w-6xl px-4">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-6">Видео</h3>
          <p className="text-white/70 mb-8">Фрагменты живых выступлений и студийных сессий.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[ 
              'https://www.youtube.com/embed/2vjPBrBU-TM?si=live',
              'https://www.youtube.com/embed/JGwWNGJdvx8?si=live',
              'https://www.youtube.com/embed/KQ6zr6kCPj8?si=live',
            ].map((src, i) => (
              <div key={i} className="relative aspect-video overflow-hidden rounded-lg border border-white/10 bg-black">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={src}
                  title={`Bir Manat Band Video ${i+1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shows Section */}
      <section id="shows" className="relative py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-6">Концерты</h3>
          <p className="text-white/70 mb-6">Следите за анонсами — расписание обновляется.</p>
          <div className="space-y-3">
            {[
              { date: 'ПТ · 22 Ноя', city: 'Баку', venue: 'The Club Venue', note: 'Ночной сет' },
              { date: 'СБ · 14 Дек', city: 'Баку', venue: 'City Stage', note: 'Фестиваль' },
              { date: 'СКОРО', city: '—', venue: 'Частные мероприятия', note: 'Бронирование доступно' },
            ].map((s, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between rounded-lg border border-white/10 bg-white/5 p-4 gap-3">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-md bg-gradient-to-br from-red-600 to-amber-500" />
                  <div>
                    <p className="text-lg font-bold">{s.date} · {s.city}</p>
                    <p className="text-white/70 text-sm">{s.venue} — {s.note}</p>
                  </div>
                </div>
                <a href="#contacts" className="inline-flex items-center justify-center rounded-md bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/20 transition-colors">
                  Бронировать
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Riders Section */}
      <section id="riders" className="relative py-16 md:py-24 bg-[#0c0c0d]">
        <div className="mx-auto max-w-6xl px-4">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-6">Райдеры</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <h4 className="text-amber-300 font-semibold text-lg mb-2">Технический райдер</h4>
              <ul className="list-disc list-inside text-white/80 text-sm space-y-1">
                <li>Пульт не ниже 24 каналов, 4 монитора, DI-боксы</li>
                <li>Сцена от 6×4 м, электропитание 220V</li>
                <li>Время саундчека: 60–90 минут</li>
              </ul>
              <a
                href="#contacts"
                className="mt-4 inline-flex rounded-md border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/20 transition-colors"
              >
                Запросить PDF
              </a>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <h4 className="text-amber-300 font-semibold text-lg mb-2">Гостевой райдер</h4>
              <ul className="list-disc list-inside text-white/80 text-sm space-y-1">
                <li>Гримерка на 5 человек, вода, чай/кофе</li>
                <li>Парковка/пропуск для транспорта</li>
                <li>Представитель площадки на связи</li>
              </ul>
              <a
                href="#contacts"
                className="mt-4 inline-flex rounded-md border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/20 transition-colors"
              >
                Запросить PDF
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="relative py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-6">Контакты</h3>
          <p className="text-white/80 mb-4 max-w-2xl">
            Для предложений по концертам, фестивалям и частным событиям — пишите нам в удобный мессенджер.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://t.me/birmanatband"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-amber-400 to-red-600 px-5 py-3 font-extrabold text-black shadow-lg shadow-red-900/30 hover:from-amber-300 hover:to-red-500 transition-colors"
            >
              Telegram
            </a>
            <a
              href="https://instagram.com/birmanatband"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/10 px-5 py-3 font-semibold hover:bg-white/20 transition-colors"
            >
              Instagram
            </a>
            <a
              href="mailto:booking@birmanatband.com"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 font-semibold hover:bg-white/15 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Bir Manat Band — Баку. Все права защищены.
      </footer>
    </div>
  )
}

export default App
