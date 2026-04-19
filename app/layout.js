import './globals.css'
import FX from './components/FX'

export const metadata = {
  title: 'Motor Mania Georgina | 2026',
  description:
    'Motor Mania Georgina 2026 — a one-day, horsepower-fueled community celebration presented by Kinsmen of Georgina & Dirty Birdz Car Club. Coming soon to Sutton Fairgrounds, Ontario.',
  openGraph: {
    title: 'Motor Mania Georgina | 2026',
    description:
      'The horsepower-fueled community celebration returns in 2026. Save the date.',
    images: ['/assets/img/carnuebo.png'],
    siteName: 'Motor Mania Georgina',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Motor Mania Georgina | 2026',
    description:
      'The horsepower-fueled community celebration returns in 2026.',
    images: ['/assets/img/carnuebo.png'],
  },
}

export default function RootLayout({ children }) {
  const currentYear = new Date().getFullYear()
  return (
    <html lang="en">
      <body>
        <FX />
        {children}
        <footer className="site-footer">
          <div className="footer-top">
            <div className="footer-brand">Motor Mania / Georgina</div>
            <div className="footer-logos">
              <img src="/assets/img/Logo - Georgina_Transparent.png" alt="Motor Mania Georgina" />
              <img src="/assets/img/Dirty Birdz Logo.png" alt="Dirty Birdz Ontario" />
              <img src="/assets/img/logoN.png" alt="Kin Canada Georgina" />
            </div>
          </div>
          <div className="footer-bottom">
            <div className="links">
              <a href="/">2026</a>
              <a href="/2025">2025</a>
              <a href="/sponsorship">Sponsorship</a>
            </div>
            <div>© {currentYear} — All rights reserved</div>
          </div>
        </footer>
      </body>
    </html>
  )
}
