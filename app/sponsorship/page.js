// app/sponsorship/page.js
import SponsorshipClient from './SponsorshipClient'
import './sponsorship.css'

export const metadata = {
  title: 'Motor Mania Georgina | Sponsorship',
  description:
    'Support Motor Mania Georgina and showcase your brand to a passionate, engaged community—see our Silver, Gold, Platinum & Title Partner packages.',
  openGraph: {
    title: 'Motor Mania Georgina | Sponsorship',
    description:
      'Discover sponsorship opportunities at Motor Mania Georgina—partner with us for maximum brand exposure and community engagement.',
    url: '/sponsorship',
  },
}

export default function Page() {
  return <SponsorshipClient />
}