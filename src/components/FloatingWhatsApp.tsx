import { MessageCircle } from 'lucide-react'
import { m, AnimatePresence } from 'motion/react'
import { useEffect, useState } from 'react'
import { trackEvent } from '@/lib/utils'
import { CONFIG } from '@/lib/config'

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Só mostra depois de rolar um pouco para não conflitar com a visibilidade inicial do Hero
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => {
    trackEvent('Lead', { source: 'floating_whatsapp' })
    window.open(CONFIG.whatsapp.getLink('Olá! Quero tirar dúvidas sobre o Paula Pequeno Elite Camp.'), '_blank')
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <m.button
          onClick={handleClick}
          data-event-name="Lead"
          data-event-source="floating_whatsapp"
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] flex items-center justify-center group"
          aria-label="Falar no WhatsApp"
        >
          <MessageCircle className="w-8 h-8" />
          
          {/* Tooltip */}
          <span className="absolute right-full mr-4 bg-white text-black text-xs font-bold px-3 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap hidden md:block">
            Dúvidas? Fale com a gente!
            {/* Seta do tooltip */}
            <span className="absolute top-1/2 -right-1.5 -translate-y-1/2 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-6 border-l-white" />
          </span>
        </m.button>
      )}
    </AnimatePresence>
  )
}
