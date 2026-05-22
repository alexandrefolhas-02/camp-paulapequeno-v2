import { motion } from 'motion/react'
import { Crown, Trophy, Gift, Sparkles, BookOpen, Award } from 'lucide-react'
import { trackEvent } from '@/lib/utils'
import { CONFIG } from '@/lib/config'
import { VAGAS_CONFIG } from '@/data/vagas'

export default function KitAtleta() {
  const handleFundadorCTA = () => {
    trackEvent('Lead', { source: 'kit_fundador_card' })
    const link = CONFIG.whatsapp.getLink('Quero garantir minha vaga de Atleta Fundador!')
    window.open(link, '_blank')
  }

  const kitItems = [
    {
      icon: <Crown className="w-5 h-5 text-gold-500" strokeWidth={2} />,
      title: "Camisa Oficial Premium",
      desc: "Modelo Elite Camp, tecido tecnológico, design exclusivo preto e dourado"
    },
    {
      icon: <Sparkles className="w-5 h-5 text-gold-500" strokeWidth={2} />,
      title: "Squeeze Personalizada",
      desc: "Garrafa térmica oficial com identidade visual do Camp"
    },
    {
      icon: <Trophy className="w-5 h-5 text-gold-500" strokeWidth={2} />,
      title: "Munhequeira Oficial",
      desc: "Item técnico em tecido absorvente com logo bordado"
    },
    {
      icon: <BookOpen className="w-5 h-5 text-gold-500" strokeWidth={2} />,
      title: "Passaporte do Atleta",
      desc: "Caderno premium com programação, espaço para anotações técnicas e autógrafos"
    },
    {
      icon: <Award className="w-5 h-5 text-gold-500" strokeWidth={2} />,
      title: "Certificado Oficial",
      desc: "Certificado personalizado de participação no Paula Pequeno Elite Camp"
    }
  ]

  const exclusivoFundador = [
    "Numeração serial gravada (01/30 a 30/30)",
    "Foto oficial impressa autografada pela Paula",
    "Pin colecionável Fundador 1ª Edição",
    "Acesso a grupo exclusivo de Fundadores no WhatsApp"
  ]

  const bonusSorteio = [
    "Camisa Oficial Seleção Brasileira #4 autografada",
    "Uniforme completo (camisa + shorts) Brasil",
    "Bola Mikasa V200W oficial autografada",
    "Faixa de campeã olímpica"
  ]

  return (
    <section className="bg-black-main w-full overflow-hidden py-20 md:py-32 px-4 relative">
      {/* Background radial sutil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-600/10 via-black-main/0 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full">
        
        <div className="text-center">
          <div className="inline-block tracking-widest text-gold-500 font-semibold text-sm uppercase">
            KIT EXCLUSIVO
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white mt-4">
            Cada atleta sai do Camp<br />
            com a história nas mãos.
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Um kit pensado item por item para representar tudo o que esses 3 dias significam. Premium, autêntico, colecionável.
          </p>
        </div>

        {/* SEÇÃO PRINCIPAL — Kit Atleta */}
        <div className="mt-16 flex flex-col lg:flex-row gap-12 items-center">
          
          {/* COLUNA ESQUERDA */}
          <motion.div 
            className="flex-1 w-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-square rounded-2xl overflow-hidden border border-gold-500/20 shadow-2xl relative bg-black-secondary">
              <img
                src="/images/athlete-kit-premium.webp"
                alt="Kit Atleta Volleyball Elite Camp — camisa, garrafa, passaporte e certificado"
                width={1200}
                height={1200}
                loading="lazy"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            
            <div className="mt-4 p-3 border border-gold-500/30 bg-black-secondary rounded-lg">
              <p className="italic text-xs text-gold-400/80 text-center">
                * Imagem ilustrativa. Design final em produção — divulgação até junho/2026.
              </p>
            </div>
          </motion.div>

          {/* COLUNA DIREITA */}
          <motion.div 
            className="flex-1 w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-5">
              {kitItems.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 flex-shrink-0 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* DIVISOR DOURADO */}
        <div className="mt-16 w-full border-t border-gold-500/20 max-w-2xl mx-auto" />

        {/* BLOCO ESPECIAL — KIT FUNDADOR */}
        <motion.div 
          className="mt-16 max-w-4xl mx-auto w-full bg-gradient-to-br from-gold-500/5 to-transparent border-2 border-gold-500/40 rounded-2xl p-8 md:p-12 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 bg-gold-500 text-black px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wide">
            <Crown className="w-4 h-4" strokeWidth={2.5} />
            EXCLUSIVO ATLETA FUNDADOR
          </div>
          
          <h3 className="mt-4 font-display text-2xl md:text-4xl font-bold text-white">
            Kit Fundador Numerado
          </h3>
          
          <p className="mt-2 text-lg text-gold-400 font-medium">
            Apenas 30 unidades existirão. Para sempre.
          </p>
          
          <p className="mt-6 text-base text-gray-300 leading-relaxed">
            Os primeiros 30 inscritos entram para a história como Atletas Fundadores da 1ª edição do Paula Pequeno Elite Camp. Cada um recebe um kit com numeração serial única — de 01/30 a 30/30 — gravada na camisa e no passaporte.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {exclusivoFundador.map((item, index) => (
              <div key={index} className="flex items-start gap-3 min-w-0">
                <Sparkles className="w-5 h-5 text-gold-500 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-white text-sm truncate">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-gold-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gold-400 font-medium">
              {VAGAS_CONFIG.fundador.disponiveis} de 30 vagas restantes
            </div>
            
            <button 
              onClick={handleFundadorCTA}
              data-event-name="Lead"
              data-event-source="kit_fundador_card"
              className="w-full sm:w-auto bg-gold-500 text-black px-5 py-2.5 rounded-lg font-semibold hover:scale-105 transition-transform uppercase shadow-lg text-sm md:text-base"
            >
              Garantir Kit Fundador →
            </button>
          </div>
        </motion.div>

        {/* DIVISOR DOURADO */}
        <div className="mt-16 w-full border-t border-gold-500/20 max-w-2xl mx-auto" />

        {/* BLOCO BÔNUS — SORTEIO */}
        <motion.div 
          className="mt-16 max-w-5xl mx-auto w-full bg-black-secondary border border-gold-600/30 rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Coluna Esquerda: Imagem */}
          <div className="w-full aspect-square relative bg-black-main min-w-0">
            <img
              src="/images/kit-sorteio-paula-pequeno.webp"
              alt="Kit Sorteio Paula Pequeno — camisa autografada e bola oficial"
              width={1024}
              height={1024}
              loading="lazy"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>

          {/* Coluna Direita: Texto */}
          <div className="w-full p-8 md:p-10 flex flex-col justify-center min-w-0">
            <div className="inline-flex items-center gap-2 bg-gold-500/15 text-gold-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide w-fit">
              <Gift className="w-4 h-4 flex-shrink-0" />
              BÔNUS EXCLUSIVO
            </div>
            
            <h3 className="mt-3 font-display text-2xl md:text-3xl font-bold text-white leading-tight">
              Sorteio Kit Paula Pequeno<br />
              Autografado
            </h3>
            
            <p className="mt-4 text-base text-gray-300">
              Todos os atletas inscritos concorrem ao Kit Histórico autografado pela própria Paula:
            </p>

            <ul className="mt-4 space-y-2 text-sm">
              {bonusSorteio.map((item, index) => (
                <li key={index} className="flex items-start gap-2 min-w-0">
                  <Sparkles className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-xs text-gold-400 italic">
              * Sorteio ao vivo durante o encerramento do Camp — dia 26/07/2026
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
