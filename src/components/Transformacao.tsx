import { m } from 'motion/react'
import { Target, Brain, Users, BookOpen } from 'lucide-react'

export default function Transformacao() {
  const cards = [
    {
      icon: <Target className="w-8 h-8 text-gold-500" strokeWidth={1.5} />,
      title: "Técnica",
      desc: "Avaliação individual e correções nos fundamentos pela própria Paula. Cada atleta sai com um plano de evolução."
    },
    {
      icon: <Brain className="w-8 h-8 text-gold-500" strokeWidth={1.5} />,
      title: "Mentalidade",
      desc: "A psicologia da campeã. Como Paula manteve foco em 2 Olimpíadas. A mentalidade que transforma talento em conquista."
    },
    {
      icon: <Users className="w-8 h-8 text-gold-500" strokeWidth={1.5} />,
      title: "Conexões",
      desc: "Networking com 59 outras atletas de alto nível do Brasil inteiro. Amizades e referências que duram para a vida."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-gold-500" strokeWidth={1.5} />,
      title: "Memória",
      desc: "Uma vivência que vira referência. A foto que vai na parede do quarto. A história que ela vai contar para sempre."
    }
  ]

  return (
    <section className="relative bg-black-secondary py-20 md:py-32 px-4">
      {/* Gradiente superior sutil */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gold-600/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="inline-block tracking-widest text-gold-500 font-semibold text-sm uppercase">
          A TRANSFORMAÇÃO
        </div>
        
        <h2 className="font-display font-bold text-3xl md:text-5xl text-white mt-4">
          O que sua atleta<br />
          leva pra casa.
        </h2>
        
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Mais do que medalhas, troféus ou certificados. 3 dias que mudam a forma dela enxergar o esporte — e si mesma.
        </p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <m.div
              key={index}
              className="p-6 md:p-8 bg-black-main border border-gold-600/30 rounded-xl hover:border-gold-500 transition-colors duration-300 flex flex-col items-center text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {card.title}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {card.desc}
              </p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  )
}
