import Event2025Client from './Event2025Client'

export const metadata = {
  title: 'Motor Mania Georgina | 2025 Recap',
  description:
    'A look back at Motor Mania Georgina 2025 — the one-day, horsepower-fueled community celebration presented by Kinsmen of Georgina & Dirty Birdz Car Club at Sutton Fairgrounds.',
  openGraph: {
    title: 'Motor Mania Georgina | 2025',
    description:
      'Relive the 2025 edition: event details, the people behind it, demographics and highlights.',
    images: ['/assets/img/carnuebo.png'],
    siteName: 'Motor Mania Georgina',
  },
}

export default function Page() {
  return <Event2025Client />
}
