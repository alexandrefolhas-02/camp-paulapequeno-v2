import { lazy, Suspense } from 'react'

// Eager (acima da dobra)
import StickyUrgencyBar from '@/components/StickyUrgencyBar'
import Hero from '@/components/Hero'
import Divider from '@/components/Divider'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

// Lazy (abaixo da dobra)
const BlocoDor = lazy(() => import('@/components/BlocoDor'))
const PorQueAPaula = lazy(() => import('@/components/PorQueAPaula'))
const ParaQuemE = lazy(() => import('@/components/ParaQuemE'))
const Transformacao = lazy(() => import('@/components/Transformacao'))
const Experiencia3Dias = lazy(() => import('@/components/Experiencia3Dias'))
const Estrutura = lazy(() => import('@/components/Estrutura'))
const KitAtleta = lazy(() => import('@/components/KitAtleta'))
const Ancoragem = lazy(() => import('@/components/Ancoragem'))
const Investimento = lazy(() => import('@/components/Investimento'))
const FAQ = lazy(() => import('@/components/FAQ'))
const UltimaChamada = lazy(() => import('@/components/UltimaChamada'))
const Footer = lazy(() => import('@/components/Footer'))

function App() {
  return (
    <>
      <StickyUrgencyBar />
      <FloatingWhatsApp />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-20" />}>
          <Divider />
          <BlocoDor />
          <Divider />
          <PorQueAPaula />
          <ParaQuemE />
          <Transformacao />
          <Divider />
          <Experiencia3Dias />
          <Estrutura />
          <Divider />
          <KitAtleta />
          <Ancoragem />
          <Divider />
          <Investimento />
          <FAQ />
          <Divider />
          <UltimaChamada />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  )
}

export default App

