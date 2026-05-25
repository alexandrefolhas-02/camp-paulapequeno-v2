import { m } from 'motion/react'
import { trackEvent } from '@/lib/utils'
import { CONFIG } from '@/lib/config'
import { VAGAS_CONFIG } from '@/data/vagas'
import { Medal, Trophy, MapPin, MessageCircle } from 'lucide-react'

export default function Hero() {
  const handlePrimaryClick = () => {
    trackEvent('Lead', { source: 'hero_primary' })
    const link = CONFIG.whatsapp.getLink('Vim pelo site! Quero garantir minha vaga no Camp.')
    window.open(link, '_blank')
  }

  const handleSecondaryClick = () => {
    trackEvent('Lead', { source: 'hero_secondary' })
    const link = CONFIG.whatsapp.getLink()
    window.open(link, '_blank')
  }

  return (
    <section className="relative min-h-[90vh] md:min-h-screen bg-black-main flex items-center overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-600/20 via-black-main/0 to-transparent pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 grid grid-cols-1 md:grid-cols-[58%_42%] gap-12 md:gap-8 items-center relative z-10 w-full">
        
        {/* COLUNA ESQUERDA (texto) */}
        <m.div 
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block tracking-widest text-gold-500 font-semibold text-xs md:text-sm uppercase">
            PRIMEIRA EDIÇÃO • RIO DE JANEIRO • 24-26 JULHO 2026
          </div>
          
          <div className="max-w-2xl">
            <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-white text-balance">
              BEM-VINDOS! CHEGOU A HORA DE REALIZARMOS ESSE SONHO JUNTOS.
            </h1>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-300 text-lg md:text-xl max-w-xl leading-relaxed">
              Quando idealizei o ELITE CAMP foi pensando em você. Quero compartilhar toda minha experiência e aprendizado nesses 3 dias que estaremos juntos. O que não vai faltar é energia, isso eu garanto!
            </p>
            <p className="text-gold-500 font-bold text-lg md:text-xl tracking-wide uppercase">
              FAIXA ETÁRIA: 11 A 17 ANOS
            </p>
          </div>
          
          <div className="flex flex-wrap gap-6 text-sm md:text-base font-semibold text-white">
            <span className="flex items-center gap-2">
              <Medal className="w-5 h-5 text-gold-500" strokeWidth={2} /> Bicampeã Olímpica
            </span>
            <span className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-gold-500" strokeWidth={2} /> MVP Beijing 2008
            </span>
          </div>

          <div className="flex flex-col gap-4 items-start">
            <button 
              onClick={handlePrimaryClick}
              data-event-name="Lead"
              data-event-source="hero_primary"
              className="w-full md:w-auto bg-gold-500 text-black-main font-bold text-lg md:text-xl px-8 py-4 rounded-md shadow-xl hover:scale-105 transition-transform duration-300 uppercase"
            >
              GARANTIR MINHA VAGA → RESTAM {VAGAS_CONFIG.totais.disponiveis}/{VAGAS_CONFIG.totais.total}
            </button>

            <button 
              onClick={handleSecondaryClick}
              data-event-name="Lead"
              data-event-source="hero_secondary"
              className="w-full md:w-auto text-gray-300 hover:text-white font-medium flex items-center justify-center gap-2 transition-colors duration-200 py-2"
            >
              <MessageCircle className="w-5 h-5 text-gold-500" /> Falar com a equipe no WhatsApp
            </button>
          </div>

          <div className="pt-4 text-sm text-gray-300 flex items-center gap-2 opacity-80">
            <MapPin className="w-4 h-4 text-gold-500" strokeWidth={2} /> Clube de Aeronáutica — Barra da Tijuca, Rio de Janeiro
          </div>
        </m.div>

        {/* COLUNA DIREITA (imagem) */}
        <m.div 
          className="relative w-full h-[500px] md:h-[700px]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Placeholder div that matches image styling before real image is loaded */}
          <div className="w-full h-full bg-black-secondary rounded-2xl overflow-hidden relative border border-black-secondary shadow-2xl">
            <img
              src="/images/paula-hero-1200.webp"
              srcSet="/images/paula-hero-600.webp 600w, /images/paula-hero-1200.webp 1200w"
              sizes="(max-width: 768px) 600px, 1200px"
              alt="Paula Pequeno comemorando após ponto nas Olimpíadas"
              width={600}
              height={800}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover object-top aspect-[3/4]"
            />
          </div>

          <div className="absolute bottom-6 left-6 right-6 md:right-auto bg-black-main/80 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-xl">
            <h3 className="text-white font-display font-bold text-xl uppercase tracking-wider mb-1">Paula Pequeno</h3>
            <p className="text-gold-500 font-medium text-sm">Bicampeã Olímpica • MVP Beijing 2008</p>
          </div>
        </m.div>
      </div>
    </section>
  )
}
