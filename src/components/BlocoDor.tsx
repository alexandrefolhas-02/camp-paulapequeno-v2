import { motion } from 'motion/react'

export default function BlocoDor() {
  const dores = [
    "Treinos repetitivos que não tiram ela do platô técnico",
    "Falta de uma referência feminina de alto rendimento olhando nos olhos dela",
    "Cansaço mental por não ter quem entenda a pressão de competir de verdade",
    "A sensação de que ela tem potencial pra mais — mas não sabe pra onde direcionar",
  ]

  return (
    <section className="bg-black-secondary py-20 md:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Título */}
        <motion.h2 
          className="text-center font-display font-bold text-4xl md:text-6xl text-white leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Se você está aqui,<br />
          é porque sabe.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12"
        >
          <p className="text-xl text-gray-300 text-center">
            Sabe que sua filha tem talento.<br />
            Que ela treina, se dedica, sonha.
          </p>

          <p className="mt-10 text-gold-500 font-semibold italic text-center text-xl">
            Mas sabe também o que falta:
          </p>
        </motion.div>

        {/* Lista de Dores */}
        <div className="mt-12 flex flex-col gap-6 max-w-2xl mx-auto">
          {dores.map((dor, index) => (
            <motion.div 
              key={index}
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-red-urgency flex items-center justify-center text-white font-bold text-xs">
                X
              </div>
              <p className="text-white text-lg md:text-xl font-medium">
                {dor}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Conclusão */}
        <motion.div 
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
        </motion.div>

      </div>
    </section>
  )
}
