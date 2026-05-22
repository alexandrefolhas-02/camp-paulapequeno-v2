import { motion } from 'motion/react'
import { Star, Target, Gift, Utensils, Heart, Award, Users, Camera, Trophy, Network, Lock } from 'lucide-react'
import { trackEvent } from '@/lib/utils'
import { CONFIG } from '@/lib/config'

export default function Ancoragem() {
  const handleCheckout = () => {
    trackEvent('InitiateCheckout', { source: 'ancoragem_cta' })
    window.location.href = CONFIG.pagbank.fundador
  }

  const linhas = [
    {
      icon: <Star className="w-5 h-5 text-gold-500" strokeWidth={1.5} />,
      desc: "3 dias de imersão com Paula Pequeno (bicampeã olímpica)",
      valor: <span className="text-gold-500 italic font-medium">incalculável</span>
    },
    {
      icon: <Target className="w-5 h-5 text-gold-500" strokeWidth={1.5} />,
      desc: "Avaliação técnica individual com bicampeã olímpica",
      valor: "R$ 800"
    },
    {
      icon: <Gift className="w-5 h-5 text-gold-500" strokeWidth={1.5} />,
      desc: "Kit Atleta exclusivo premium",
      valor: "R$ 550"
    },
    {
      icon: <Utensils className="w-5 h-5 text-gold-500" strokeWidth={1.5} />,
      desc: "9 refeições + coffee breaks gourmet",
      valor: "R$ 600"
    },
    {
      icon: <Heart className="w-5 h-5 text-gold-500" strokeWidth={1.5} />,
      desc: "Workshop com nutricionista + fisioterapeuta da seleção",
      valor: "R$ 380"
    },
    {
      icon: <Award className="w-5 h-5 text-gold-500" strokeWidth={1.5} />,
      desc: "Certificado oficial + Passaporte do Atleta",
      valor: "R$ 120"
    },
    {
      icon: <Users className="w-5 h-5 text-gold-500" strokeWidth={1.5} />,
      desc: "Workshop exclusivo para pais",
      valor: "R$ 500"
    },
    {
      icon: <Camera className="w-5 h-5 text-gold-500" strokeWidth={1.5} />,
      desc: "Acesso a fotos e vídeos profissionais",
      valor: "R$ 250"
    },
    {
      icon: <Trophy className="w-5 h-5 text-gold-500" strokeWidth={1.5} />,
      desc: "Participação no Torneio Elite Camp",
      valor: "R$ 300"
    },
    {
      icon: <Network className="w-5 h-5 text-gold-500" strokeWidth={1.5} />,
      desc: "Networking com 59 atletas de alto nível",
      valor: "R$ 250"
    }
  ]

  return (
    <section className="bg-black-secondary py-20 md:py-32 px-4 relative">
      <div className="max-w-5xl mx-auto w-full">
        
        <div className="text-center">
          <div className="inline-block tracking-widest text-gold-500 font-semibold text-sm uppercase">
            QUANTO VALE TUDO ISSO?
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white mt-4 leading-tight">
            Vamos fazer a conta<br />
            juntos?
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Se cada parte desta experiência fosse contratada separadamente, no mercado, o investimento seria muito maior. Veja:
          </p>
        </div>

        {/* TABELA DE VALORES */}
        <motion.div 
          className="mt-12 bg-black-main rounded-2xl border border-gold-500/20 overflow-hidden max-w-3xl mx-auto w-full shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col">
            {linhas.map((linha, index) => {
              const isLast = index === linhas.length - 1
              return (
                <div 
                  key={index}
                  className={`flex flex-col sm:flex-row items-start sm:items-center justify-between py-4 px-6 gap-2 sm:gap-4 hover:bg-gold-500/5 transition-colors min-w-0 ${!isLast ? 'border-b border-gold-500/10' : ''}`}
                >
                  <div className="flex items-center gap-3 w-full sm:w-auto flex-1 min-w-0">
                    <div className="flex-shrink-0">
                      {linha.icon}
                    </div>
                    <div className="text-base text-white font-medium min-w-0 flex-wrap">
                      {linha.desc}
                    </div>
                  </div>
                  <div className="text-base md:text-lg font-semibold text-gold-400 self-end sm:self-auto flex-shrink-0">
                    {linha.valor}
                  </div>
                </div>
              )
            })}

            {/* LINHA DE TOTAL */}
            <div className="mt-1 bg-gold-500/15 py-5 px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between border-t-2 border-gold-500 min-w-0 gap-4">
              <div className="text-lg md:text-xl font-bold text-white flex-1 min-w-0">
                VALOR TOTAL DE MERCADO
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gold-400 flex-shrink-0">
                R$ 3.750+
              </div>
            </div>
          </div>
        </motion.div>

        {/* DESTAQUE DO PREÇO REAL */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-base text-gray-300 mt-8 font-medium">
            Mas seu investimento como Atleta Fundador é...
          </p>
          
          <div className="mt-4 font-display text-6xl md:text-8xl font-bold text-gold-500 leading-none">
            R$ 1.997
          </div>
          
          <p className="mt-4 text-lg text-gray-300 font-medium">
            ou 10x de R$ 199,70 sem juros
          </p>
          
          <div className="mt-6 inline-flex px-6 py-3 bg-red-urgency text-white rounded-full font-bold text-sm md:text-base shadow-lg max-w-full">
            ECONOMIA DE 47% — APENAS PARA OS 30 PRIMEIROS
          </div>
          
          <div className="mt-8 flex flex-col items-center">
            <button 
              onClick={handleCheckout}
              data-event-name="InitiateCheckout"
              data-event-source="ancoragem_cta"
              className="bg-gold-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-2xl w-full sm:w-auto uppercase max-w-full"
            >
              QUERO SER ATLETA FUNDADORA →
            </button>
            
            <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-gray-300 font-medium">
              <Lock className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={2} />
              <span>Pagamento seguro via PagBank</span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  )
}
