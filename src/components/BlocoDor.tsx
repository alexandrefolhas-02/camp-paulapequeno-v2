import { m } from 'motion/react'
import { CheckCircle2 } from 'lucide-react'

export default function BlocoDor() {
  const beneficios = [
    "Treinos técnicos e táticos orientados com uma visão profissional.",
    "Vivência de 3 dias comigo compartilhando conhecimentos.",
    "Lições de liderança e disciplina que formam campeões.",
    "Dicas e orientações para aprender a superar seus próprios limites.",
  ]

  return (
    <section className="bg-black-secondary py-20 md:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Título */}
        <m.h2 
          className="text-center font-display font-bold text-4xl md:text-6xl text-white leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          O esporte transformou<br />
          a minha vida.
        </m.h2>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12"
        >
          <p className="text-xl text-gray-300 text-center">
            E pode mudar a sua!
          </p>

          <p className="mt-10 text-gold-500 font-semibold italic text-center text-xl">
            Quer algo a mais? Aqui teremos:
          </p>
        </m.div>

        {/* Lista de Benefícios */}
        <div className="mt-12 flex flex-col gap-6 max-w-2xl mx-auto">
          {beneficios.map((beneficio, index) => (
            <m.div 
              key={index}
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <CheckCircle2 className="w-6 h-6 text-gold-500 flex-shrink-0 mt-1" strokeWidth={2} />
              <p className="text-white text-lg md:text-xl font-medium">
                {beneficio}
              </p>
            </m.div>
          ))}
        </div>

        {/* Conclusão */}
        <m.div 
          className="mt-16 p-8 border border-gold-500/30 bg-black-main/50 rounded-2xl shadow-xl backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-center font-display text-2xl md:text-3xl text-white leading-relaxed">
            <span className="text-gold-500 font-semibold">Talento sem direção vira frustração.</span><br />
            E frustração afasta atletas do esporte<br />
            no momento exato em que elas deveriam estar voando.
          </p>
        </m.div>

      </div>
    </section>
  )
}
