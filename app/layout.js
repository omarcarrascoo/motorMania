import './globals.css'

export const metadata = {
  title: 'Motor Mania Georgina',
  description:
    'A one-day, horsepower-fueled community celebration presented by Kinsmen of Georgina & Dirty Birdz Car Club on September 6, 2025 at Sutton Fairgrounds, Ontario',
  openGraph: {
    title: 'Motor Mania Georgina',
    description:
      'Join us September 6, 2025 for a turbo-charged celebration of cars, families, and community',
    images: ['/assets/img/carnuebo.png'],
    siteName: 'Motor Mania Georgina',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Motor Mania Georgina',
    description:
      'A one-day, horsepower-fueled community celebration presented by Kinsmen of Georgina & Dirty Birdz Car Club',
    images: ['/assets/img/carnuebo.png'],
  },
}

export default function RootLayout({ children }) {
  const currentYear = new Date().getFullYear()
  return (
    <html lang="en">
      <body>
        {children}
        <footer className="site-footer">
          <div className="footer-logos">
            <img
              src="/assets/img/Logo - Georgina_Transparent.png"
              alt="Motor Mania Georgina"
            />
            <img
              className="dirtyBirdMini"
              src="/assets/img/Dirty Birdz Logo.png"
              alt="Dirty Birdz Ontario"
            />
            <img src="/assets/img/logoN.png" alt="Kin Canada Georgina" />
          </div>
          <div className="footer-links">
            <p>
              <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a>
            </p>
            <p>© {currentYear} Motor Mania Georgina. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}