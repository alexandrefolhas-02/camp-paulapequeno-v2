import { m } from 'motion/react'

export default function ParaQuemE() {
  const paraVoce = [
    "Que tenha entre 11 e 17 anos.",
    "Já jogue vôlei em qualquer nível e categoria.",
    "Que acredite que o talento precisa de direção certa.",
    "Que queira uma experiência que vai além dos treinos.",
    "Que saiba que essa oportunidade é única e pode transformar o futuro."
  ]

  const naoParaVoce = [
    "Que queira somente recreação esportiva ou colônia de férias.",
    "Que espere resultados sem dedicação nos 3 dias.",
    "Que não esteja de coração aberto ao aprendizado.",
    "Que não se importe com os valores do esporte."
  ]

  return (
    <section className="bg-black-main py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center">
          <div className="inline-block tracking-widest text-gold-500 font-semibold text-sm uppercase">
            PÚBLICO
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white mt-4">
            QUE TIPO DE ATLETA NÓS ESPERAMOS:
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* É PARA VOCÊ */}
          <m.div 
            className="p-8 border-l-4 border-green-500 bg-black-secondary rounded-r-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ul className="space-y-4">
              {paraVoce.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center text-xs font-bold border border-green-500/50">
                    ✓
                  </div>
                  <span className="text-white text-base md:text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </m.div>

          {/* NÃO É PARA VOCÊ */}
          <m.div 
            className="p-8 border-l-4 border-red-500 bg-black-secondary rounded-r-xl opacity-90"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ul className="space-y-4">
              {naoParaVoce.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center text-xs font-bold border border-red-500/50">
                    ✕
                  </div>
                  <span className="text-gray-300 text-base md:text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </m.div>

        </div>
      </div>
    </section>
  )
}
