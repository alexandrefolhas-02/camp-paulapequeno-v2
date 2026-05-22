import { useState } from 'react'
import { m, AnimatePresence } from 'motion/react'
import { Plus, Minus, MessageCircle } from 'lucide-react'
import { trackEvent } from '@/lib/utils'
import { VAGAS_CONFIG } from '@/data/vagas'
import { CONFIG } from '@/lib/config'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleCTA = () => {
    trackEvent('Lead', { source: 'faq_cta' })
    window.open(CONFIG.whatsapp.getLink('Tenho uma dúvida sobre o Camp que não vi no FAQ.'), '_blank')
  }

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const perguntas = [
    {
      q: "Quem pode participar do Elite Camp?",
      a: "O Camp é destinado a atletas de 11 a 17 anos, masculino e feminino, que já praticam voleibol — seja em escolinha, equipe federada ou representando escolas. Recomendamos um mínimo de 6 meses de prática regular."
    },
    {
      q: "Como funciona a hospedagem? Os atletas dormem no clube?",
      a: "O Elite Camp acontece em formato day-use. Os atletas participam das atividades das 7h30 às 18h durante os 3 dias, mas voltam para casa ou hotel no fim de cada dia. Para famílias de outras cidades, nossa equipe pode indicar hotéis parceiros próximos ao Clube de Aeronáutica."
    },
    {
      q: "Pais podem assistir o Camp ou participar das atividades?",
      a: "Sim! Os pais têm um Workshop Exclusivo dentro da programação, com palestras sobre nutrição, preparação física e o caminho para o alto rendimento. Além disso, todos os dias têm momentos abertos para assistir, e o Dia 02 inclui Jogos Pais & Filhos."
    },
    {
      q: "Como é a alimentação durante os 3 dias?",
      a: "Estão incluídos almoço completo e coffee breaks gourmet em todos os 3 dias — preparados pelo restaurante do Clube de Aeronáutica, com cardápio pensado para atletas em atividade intensa. Restrições alimentares são acomodadas mediante aviso prévio na inscrição."
    },
    {
      q: "Posso parcelar em quantas vezes?",
      a: "Sim! Aceitamos cartão de crédito em até 10x sem juros, Pix à vista e boleto. Tudo processado com segurança via PagBank."
    },
    {
      q: "E se eu precisar cancelar? Tem reembolso?",
      a: "Cancelamentos até 30 dias antes do evento (até 24/06/2026): reembolso de 80% do valor. Entre 30 e 15 dias antes: reembolso de 50%. A partir de 15 dias antes do evento, não há reembolso, mas a vaga pode ser transferida para outra atleta mediante aprovação."
    },
    {
      q: "Tem desconto para irmãos ou amigas do mesmo time?",
      a: "Sim! Para 2 ou mais atletas da mesma família (irmãos) ou do mesmo time, oferecemos condições especiais. Entre em contato com nossa equipe pelo WhatsApp para receber a proposta personalizada."
    },
    {
      q: "O que significa ser 'Atleta Fundador'?",
      a: `Esta é a 1ª edição oficial do Paula Pequeno Elite Camp. Atletas Fundadores entram para a história como pioneiros — kit numerado de 01/${VAGAS_CONFIG.fundador.total} a ${VAGAS_CONFIG.fundador.total}/${VAGAS_CONFIG.fundador.total}, foto oficial impressa autografada pela Paula, pin colecionável e acesso ao grupo exclusivo de Fundadores. Próximas edições terão valor maior e não terão os exclusivos da 1ª edição.`
    }
  ]

  return (
    <section className="bg-black-secondary py-20 md:py-32 w-full overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 md:px-6 w-full">
        
        {/* CABEÇALHO */}
        <div className="text-center w-full">
          <div className="inline-block tracking-widest text-gold-500 font-semibold text-sm uppercase">
            DÚVIDAS COMUNS
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white mt-4">
            Perguntas frequentes.
          </h2>
          <p className="mt-4 text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
            Selecionamos as dúvidas mais comuns. Se a sua não estiver aqui, chame nossa equipe no WhatsApp.
          </p>
        </div>

        {/* LISTA DE PERGUNTAS (ACORDEON) */}
        <div className="mt-12 space-y-3 w-full">
          {perguntas.map((item, i) => {
            const isOpen = openIndex === i
            
            return (
              <div 
                key={i} 
                className="bg-black-main border border-gold-500/20 rounded-xl overflow-hidden transition-all w-full"
              >
                <button
                  onClick={() => toggleOpen(i)}
                  className="w-full p-5 md:p-6 flex items-center justify-between gap-4 text-left text-base md:text-lg font-semibold text-white hover:bg-gold-500/5 transition-colors min-w-0"
                >
                  <span className="flex-1 min-w-0 flex-wrap">
                    {item.q}
                  </span>
                  <div className="flex-shrink-0 transition-transform duration-300">
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-gold-500" strokeWidth={2} />
                    ) : (
                      <Plus className="w-5 h-5 text-gold-500" strokeWidth={2} />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <m.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-5 md:px-6 pb-5 md:pb-6 text-sm md:text-base text-gray-300 leading-relaxed border-t border-gold-500/10">
                        {item.a}
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        {/* CTA FINAL */}
        <div className="mt-12 text-center w-full">
          <p className="text-base text-gray-300">
            Não encontrou sua dúvida?
          </p>
          <button
            onClick={handleCTA}
            className="mt-4 inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-black font-bold px-6 py-3 rounded-lg transition-colors shadow-lg max-w-full min-w-0 w-full sm:w-auto"
          >
            <MessageCircle className="w-5 h-5 flex-shrink-0" strokeWidth={2} />
            <span className="truncate">Falar com nossa equipe</span>
          </button>
        </div>

      </div>
    </section>
  )
}
