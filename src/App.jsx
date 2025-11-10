import { useEffect } from 'react'

function App() {
  useEffect(() => {
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

  const lineup = [
    { name: 'Юлия Дегтева', role: 'вокал' },
    { name: 'Алексей Андреев', role: 'вокал, гитара' },
    { name: 'Самир Ахмедов', role: 'вокал, электрогитара' },
    { name: 'Руслан Мавлянов', role: 'вокал, клавиши' },
    { name: 'Валерий Логвиненко', role: 'бас-гитара' },
    { name: 'Эмин Иманов', role: 'ударные' },
    { name: 'Максим Князев', role: 'звукорежиссёр' },
  ]

  const gallery = [
    'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1200&auto=format&fit=crop',
  ]

  const videoItems = [
    { type: 'youtube', id: '2vjPBrBU-TM', venue: 'Live Club', city: 'Баку', date: '2024' },
    { type: 'youtube', id: 'JGwWNGJdvx8', venue: 'City Stage', city: 'Баку', date: '2024' },
    { type: 'link', platform: 'Instagram', url: 'https://instagram.com/bir_manat_band', venue: 'Backstage', city: 'Баку', date: '—' },
    { type: 'link', platform: 'TikTok', url: 'https://tiktok.com/@bir_manat_band', venue: 'Clips', city: '—', date: '—' },
    { type: 'link', platform: 'YouTube', url: 'https://youtube.com/@bir_manat_band', venue: 'Channel', city: '—', date: '—' },
  ]

  const upcoming = [
    { date: 'ПТ · 22 Ноя 2024', city: 'Баку', venue: 'The Club Venue', links: {} },
    { date: 'СБ · 14 Дек 2024', city: 'Баку', venue: 'City Stage', links: {} },
  ]

  const past = [
    { date: 'СБ · 28 Сен 2024', city: 'Баку', venue: 'Seaside Fest', links: { photos: '#', youtube: '#', instagram: '#' } },
    { date: 'ПТ · 06 Сен 2024', city: 'Баку', venue: 'Bar 12', links: { photos: '#', instagram: '#' } },
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

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#0a0a0b] z-10" />
      </header>

      {/* About Section */}
      <section id="about" className="relative py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-6">О группе</h3>
          <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
            Мы играем живьём в барах и ресторанах, выступаем на фестивалях, свадьбах и
            корпоративах. Наш сет подстраивается под формат события — от мягкого лаунжа до
            мощного танцевального драйва. Главная ценность — честный live и качественный звук.
          </p>

          {/* Lineup */}
          <div className="mt-10">
            <h4 className="text-amber-300 font-semibold tracking-wide mb-4">Состав</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {lineup.map((p, i) => (
                <div key={i} className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <p className="font-bold">{p.name}</p>
                  <p className="text-white/70 text-sm">{p.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery */}
          <div className="mt-12">
            <h4 className="text-amber-300 font-semibold tracking-wide mb-4">Галерея</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {gallery.map((src, i) => (
                <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10 bg-black">
                  <img src={src} alt={`Bir Manat Band photo ${i+1}`} className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="relative py-16 md:py-24 bg-[#0c0c0d]">
        <div className="mx-auto max-w-6xl px-4">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-6">Видео</h3>
          <p className="text-white/70 mb-8">YouTube, Instagram, TikTok — bir_manat_band. После концертов добавляем фотоотчёты.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoItems.map((v, i) => (
              <div key={i} className="group rounded-lg border border-white/10 bg-white/5 overflow-hidden">
                {v.type === 'youtube' ? (
                  <div className="relative aspect-video bg-black">
                    <iframe
                      className="absolute inset-0 h-full w-full"
                      src={`https://www.youtube.com/embed/${v.id}`}
                      title={`Bir Manat Band Video ${i+1}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <a href={v.url} target="_blank" rel="noreferrer" className="block">
                    <div className="relative aspect-video bg-gradient-to-br from-red-600/40 to-amber-400/30 flex items-center justify-center">
                      <span className="text-sm font-bold bg-black/50 px-3 py-1 rounded-full">{v.platform}</span>
                    </div>
                  </a>
                )}
                <div className="p-4 border-t border-white/10">
                  <p className="font-semibold">{v.venue} · {v.city}</p>
                  <p className="text-white/60 text-sm">{v.date}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <a href="#shows" className="inline-flex rounded-md border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/20 transition-colors">Смотреть афишу</a>
          </div>
        </div>
      </section>

      {/* Shows Section */}
      <section id="shows" className="relative py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-6">Концерты</h3>

          <div className="mb-8">
            <h4 className="text-amber-300 font-semibold tracking-wide mb-3">Афиша</h4>
            <div className="space-y-3">
              {upcoming.map((s, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between rounded-lg border border-white/10 bg-white/5 p-4 gap-3">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-md bg-gradient-to-br from-red-600 to-amber-500" />
                    <div>
                      <p className="text-lg font-bold">{s.date} · {s.city}</p>
                      <p className="text-white/70 text-sm">{s.venue}</p>
                    </div>
                  </div>
                  <a href="#contacts" className="inline-flex items-center justify-center rounded-md bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/20 transition-colors">
                    Бронировать
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-amber-300 font-semibold tracking-wide mb-3">Прошедшие</h4>
            <div className="space-y-3">
              {past.map((s, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between rounded-lg border border-white/10 bg-white/5 p-4 gap-3">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-md bg-gradient-to-br from-amber-500 to-red-600" />
                    <div>
                      <p className="text-lg font-bold">{s.date} · {s.city}</p>
                      <p className="text-white/70 text-sm">{s.venue}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {s.links.photos && (
                      <a href={s.links.photos} className="rounded-md border border-white/15 bg-white/10 px-3 py-2 text-sm hover:bg-white/20">Фотоотчёт</a>
                    )}
                    {s.links.youtube && (
                      <a href={s.links.youtube} className="rounded-md border border-white/15 bg-white/10 px-3 py-2 text-sm hover:bg-white/20">YouTube</a>
                    )}
                    {s.links.instagram && (
                      <a href={s.links.instagram} className="rounded-md border border-white/15 bg-white/10 px-3 py-2 text-sm hover:bg-white/20">Instagram</a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Riders Section */}
      <section id="riders" className="relative py-16 md:py-24 bg-[#0c0c0d]">
        <div className="mx-auto max-w-6xl px-4">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-6">Райдеры</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Технический райдер — в пределах Баку', desc: 'Полный список оборудования для городских площадок.' },
              { title: 'Бытовой райдер — в пределах Баку', desc: 'Комфортные условия для команды и подготовка к сету.' },
              { title: 'Технический райдер — за пределами Баку', desc: 'Транспорт, площадка, локальный бэклайн.' },
              { title: 'Бытовой райдер — за пределами Баку', desc: 'Проживание, питание, тайминг и логистика.' },
            ].map((block, i) => (
              <div key={i} className="rounded-lg border border-white/10 bg-white/5 p-6">
                <h4 className="text-amber-300 font-semibold text-lg mb-2">{block.title}</h4>
                <p className="text-white/80 text-sm">{block.desc}</p>
                <button
                  disabled
                  className="mt-4 inline-flex cursor-not-allowed rounded-md border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/70"
                  title="PDF будет добавлен позже"
                >
                  Скачать PDF
                </button>
              </div>
            ))}
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
              href="https://instagram.com/bir_manat_band"
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
