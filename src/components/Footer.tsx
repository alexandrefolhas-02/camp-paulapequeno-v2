import { Instagram, MessageCircle, MapPin, Calendar, Users } from 'lucide-react'
import { trackEvent } from '@/lib/utils'
import { CONFIG } from '@/lib/config'

export default function Footer() {
  const handleWhatsapp = () => {
    trackEvent('Lead', { source: 'footer_whatsapp' })
    window.open(CONFIG.whatsapp.getLink('Olá! Cheguei pelo site.'), '_blank')
  }

  const handleInstagram = () => {
    window.open('https://www.instagram.com/paulapequenoof/', '_blank')
  }

  return (
    <footer className="bg-black border-t border-gold-500/20 py-12 md:py-16 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
        
        {/* GRID 3 COLUNAS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full min-w-0">
          
          {/* COLUNA 1 — IDENTIDADE */}
          <div className="flex flex-col min-w-0">
            <h2 className="font-display text-2xl font-bold text-gold-500">
              ELITE CAMP
            </h2>
            <p className="mt-1 text-sm text-gray-300">
              Paula Pequeno
            </p>
            <p className="mt-4 text-sm text-gray-300 leading-relaxed min-w-0 flex-wrap pr-0 md:pr-4">
              A primeira edição oficial. 60 atletas. 3 dias. 1 transformação que pode mudar a forma como sua filha enxerga o esporte — e a si mesma.
            </p>
          </div>

          {/* COLUNA 2 — EVENTO */}
          <div className="flex flex-col min-w-0">
            <h3 className="text-xs text-gold-400 font-semibold uppercase tracking-wide">
              O EVENTO
            </h3>
            <ul className="mt-4 space-y-3 w-full">
              <li className="flex items-start gap-3 min-w-0">
                <Calendar className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" strokeWidth={2} />
                <span className="text-sm text-gray-300 min-w-0 flex-wrap">24, 25 e 26 de Julho de 2026</span>
              </li>
              <li className="flex items-start gap-3 min-w-0">
                <MapPin className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" strokeWidth={2} />
                <span className="text-sm text-gray-300 min-w-0 flex-wrap">Clube de Aeronáutica — Barra da Tijuca, Rio de Janeiro</span>
              </li>
              <li className="flex items-start gap-3 min-w-0">
                <Users className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" strokeWidth={2} />
                <span className="text-sm text-gray-300 min-w-0 flex-wrap">60 atletas — de 11 a 17 anos</span>
              </li>
            </ul>
          </div>

          {/* COLUNA 3 — CONTATO */}
          <div className="flex flex-col min-w-0">
            <h3 className="text-xs text-gold-400 font-semibold uppercase tracking-wide">
              CONTATO
            </h3>
            <ul className="mt-4 space-y-3 w-full">
              <li className="min-w-0">
                <button 
                  onClick={handleWhatsapp}
                  className="w-full flex items-center gap-3 text-sm text-gray-300 hover:text-gold-400 transition-colors text-left"
                >
                  <MessageCircle className="w-4 h-4 text-gold-500 flex-shrink-0" strokeWidth={2} />
                  <span className="min-w-0 flex-wrap">WhatsApp da Equipe</span>
                </button>
              </li>
              <li className="min-w-0">
                <button 
                  onClick={handleInstagram}
                  className="w-full flex items-center gap-3 text-sm text-gray-300 hover:text-gold-400 transition-colors text-left"
                >
                  <Instagram className="w-4 h-4 text-gold-500 flex-shrink-0" strokeWidth={2} />
                  <span className="min-w-0 flex-wrap">@paulapequenoof</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* DIVISOR */}
        <div className="mt-12 w-full border-t border-gold-500/10" />

        {/* LINHA FINAL */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 min-w-0 w-full text-center md:text-left">
          <div className="text-xs text-gray-400 min-w-0 flex-wrap">
            © 2026 Paula Pequeno Elite Camp. Todos os direitos reservados.
          </div>
          
          <div className="flex items-center justify-center gap-6 text-xs text-gray-400 flex-wrap min-w-0">
            <a href="#" className="hover:text-gold-400 transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-gold-400 transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
