'use client'

import Preloader from './Preloader'
import Cursor from './Cursor'
import ScrollProgress from './ScrollProgress'
import Grain from './Grain'

export default function FX() {
  return (
    <>
      <Preloader />
      <Cursor />
      <ScrollProgress />
      <Grain />
    </>
  )
}
