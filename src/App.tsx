import StickyUrgencyBar from '@/components/StickyUrgencyBar'
import Hero from '@/components/Hero'
import BlocoDor from '@/components/BlocoDor'
import BlocoRevelacao from '@/components/BlocoRevelacao'
import PorQueAPaula from '@/components/PorQueAPaula'
import ParaQuemE from '@/components/ParaQuemE'
import Transformacao from '@/components/Transformacao'
import Experiencia3Dias from '@/components/Experiencia3Dias'
import Estrutura from '@/components/Estrutura'
import KitAtleta from '@/components/KitAtleta'
import Ancoragem from '@/components/Ancoragem'
import Investimento from '@/components/Investimento'
import FAQ from '@/components/FAQ'
import UltimaChamada from '@/components/UltimaChamada'
import Footer from '@/components/Footer'
import Divider from '@/components/Divider'

function App() {
  return (
    <>
      <StickyUrgencyBar />
      <main>
        <Hero />
        <Divider />
        <BlocoDor />
        <BlocoRevelacao />
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
      </main>
      <Footer />
    </>
  )
}

export default App
