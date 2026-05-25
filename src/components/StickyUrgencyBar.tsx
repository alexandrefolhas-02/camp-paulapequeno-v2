import { useState, useEffect } from 'react'
import { m, AnimatePresence } from 'motion/react'
import { AlertTriangle } from 'lucide-react'
import { trackEvent } from '@/lib/utils'
import { CONFIG } from '@/lib/config'
import { VAGAS_CONFIG } from '@/data/vagas'

export default function StickyUrgencyBar() {
  const [isVisible, setIsVisible] = useState(false)
  const [daysLeft, setDaysLeft] = useState<number | null>(null)

  useEffect(() => {
    // Calculo de dias
    const calculateDays = () => {
      if (!VAGAS_CONFIG.dataLimite) return
      
      const targetDate = new Date(VAGAS_CONFIG.dataLimite).getTime()
      const now = new Date().getTime()
      const diff = targetDate - now
      
      if (diff > 0) {
        setDaysLeft(Math.ceil(diff / (1000 * 60 * 60 * 24)))
      }
    }
    
    calculateDays()

    // Scroll listener
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handlePayment = () => {
    trackEvent('InitiateCheckout', { source: 'sticky_bar', value: 1997 })
    window.location.href = CONFIG.pagbank.fundador
  }

  const handleWhatsApp = () => {
    trackEvent('Lead', { source: 'sticky_bar_whatsapp' })
    const link = CONFIG.whatsapp.getLink('Quero tirar dúvidas sobre o Paula Pequeno Elite Camp!')
    window.open(link, '_blank')
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <m.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed top-0 left-0 right-0 z-50 bg-gold-500 shadow-xl border-b border-black-main/10 w-full overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center text-black-main gap-3 flex-wrap md:flex-nowrap">
            
            {/* Esquerda */}
            <div className="flex items-center gap-2 font-semibold text-sm md:text-base min-w-0">
              <AlertTriangle className="w-4 h-4 text-black" strokeWidth={2.5} />
              <span className="truncate">
                ATLETA FUNDADOR(A): restam <span className="font-bold underline">{VAGAS_CONFIG.fundador.disponiveis}</span> de {VAGAS_CONFIG.fundador.total} vagas
              </span>
            </div>
            
            {/* Centro (Countdown) - Só Desktop */}
            {daysLeft !== null && (
              <div className="hidden md:block font-medium text-sm flex-shrink-0">
                Encerra em <span className="font-bold">{daysLeft} dias</span>
              </div>
            )}
            
            {/* Direita */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={handleWhatsApp}
                data-event-name="Lead"
                data-event-source="sticky_bar_whatsapp"
                className="bg-green-600 text-white font-bold px-3 py-2 rounded text-xs md:text-sm hover:scale-105 transition-transform uppercase flex items-center gap-1"
              >
                <span className="hidden sm:inline">FALAR NO WHATSAPP</span>
                <span className="sm:hidden">WHATSAPP</span>
              </button>
              <button
                onClick={handlePayment}
                data-event-name="InitiateCheckout"
                data-event-source="sticky_bar"
                className="bg-black-main text-gold-500 font-bold px-4 py-2 rounded text-xs md:text-sm hover:scale-105 transition-transform uppercase"
              >
                GARANTIR VAGA →
              </button>
            </div>
            
          </div>
        </m.div>
      )}
    </AnimatePresence>
  )
}
