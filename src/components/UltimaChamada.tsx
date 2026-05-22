import { motion } from 'motion/react'
import { Sparkles, ArrowRight } from 'lucide-react'
import { trackEvent } from '@/lib/utils'
import { CONFIG } from '@/lib/config'
import { VAGAS_CONFIG } from '@/data/vagas'

export default function UltimaChamada() {
  const handleCTA = () => {
    trackEvent('InitiateCheckout', { source: 'ultima_chamada_cta', value: 1997 })
    window.location.href = CONFIG.pagbank.fundador
  }

  const handleDuvida = () => {
    trackEvent('Lead', { source: 'ultima_chamada_whatsapp' })
    window.open(CONFIG.whatsapp.getLink('Olá! Estou pensando em inscrever minha atleta no Camp. Pode me ajudar com algumas dúvidas?'), '_blank')
  }

  return (
    <section className="bg-black-main py-24 md:py-32 w-full overflow-hidden relative">
      {/* Background sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-600/10 via-black-main/0 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 w-full relative z-10">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center">
          
          {/* COLUNA ESQUERDA — IMAGEM */}
          <motion.div 
            className="w-full md:w-1/2 flex-shrink-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-gold-500/20 shadow-2xl shadow-gold-500/10 relative bg-black-secondary min-w-0">
              <img
                src="/images/paula-criancas.webp"
                alt="Paula Pequeno com jovem atleta após entrega de certificado"
                width={1200}
                height={1500}
                loading="lazy"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />

              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/80 backdrop-blur-sm p-4 rounded-xl border border-gold-500/30">
                  <p className="italic text-gold-400/90 text-xs text-center min-w-0 flex-wrap">
                    "A próxima dessa foto pode ser a sua atleta."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* COLUNA DIREITA — TEXTO */}
          <motion.div 
            className="w-full md:w-1/2 flex flex-col justify-center min-w-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-xs text-gold-500 tracking-wide uppercase font-semibold">
              A DECISÃO É AGORA
            </div>
            
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-white leading-tight min-w-0 flex-wrap">
              Sua atleta pode levar<br />
              essa história<br />
              pra vida toda.
            </h2>
            
            <p className="mt-8 text-base md:text-lg text-gray-300 leading-relaxed min-w-0 flex-wrap">
              Daqui a 10 anos, você não vai lembrar quanto custou o Camp.
            </p>
            
            <p className="mt-4 text-base md:text-lg text-gray-200 leading-relaxed min-w-0 flex-wrap">
              Você vai lembrar do brilho no olhar dela quando a Paula chamou ela pelo nome. Do certificado emoldurado na parede do quarto. Da foto na bagagem da seleção da escola dizendo:
            </p>
            
            <div className="mt-6 border-l-4 border-gold-500 pl-6 py-2 min-w-0 flex-wrap">
              <p className="italic text-xl md:text-2xl font-display font-semibold text-gold-400">
                "eu treinei com a Paula."
              </p>
            </div>
            
            {/* Bloco de urgência */}
            <div className="mt-10 p-5 border-2 border-gold-500/40 bg-gold-500/5 rounded-xl flex flex-col sm:flex-row items-center sm:items-start gap-4 min-w-0">
              <Sparkles className="w-8 h-8 text-gold-500 flex-shrink-0" strokeWidth={1.5} />
              <div className="min-w-0 text-center sm:text-left flex-1">
                <div className="text-sm text-gold-400 font-semibold uppercase tracking-wide">
                  ATLETA FUNDADOR
                </div>
                <div className="mt-1 text-lg md:text-xl text-white font-bold min-w-0 flex-wrap">
                  {VAGAS_CONFIG.fundador.disponiveis} de 30 vagas ainda esperando.
                </div>
              </div>
            </div>
            
            {/* CTA gigante */}
            <div className="mt-8 w-full">
              <button
                onClick={handleCTA}
                data-event-name="InitiateCheckout"
                data-event-source="ultima_chamada_cta"
                className="w-full flex items-center justify-center gap-3 bg-gold-500 hover:bg-gold-600 text-black font-bold text-base md:text-lg px-8 py-5 rounded-xl shadow-2xl shadow-gold-500/30 hover:scale-[1.02] transition-transform duration-300 max-w-full min-w-0"
              >
                <span className="truncate">GARANTIR A VAGA DELA AGORA</span>
                <ArrowRight className="w-5 h-5 flex-shrink-0" strokeWidth={2} />
              </button>
            </div>
            
            {/* CTA secundário */}
            <div className="mt-4 text-center w-full">
              <button
                onClick={handleDuvida}
                className="text-sm text-gold-400 hover:text-gold-300 underline transition-colors whitespace-nowrap"
              >
                Prefiro tirar uma dúvida antes →
              </button>
            </div>
            
          </motion.div>

        </div>
      </div>
    </section>
  )
}
