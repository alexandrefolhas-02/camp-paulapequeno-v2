import { m } from 'motion/react'

export default function Experiencia3Dias() {
  const dias = [
    {
      num: "01",
      data: "SEXTA · 24 JULHO",
      titulo: "Sonho & Pertencimento",
      desc: "A chegada. O primeiro abraço da Paula. A descoberta de que ela está em um lugar onde finalmente é vista.",
      cronograma: [
        { hr: "07:30", act: "Credenciamento e Kit" },
        { hr: "08:00", act: "Abertura com Paula Pequeno" },
        { hr: "08:15", act: "Avaliação Técnica" },
        { hr: "09:45", act: "Treino: Toque e Manchete" },
        { hr: "13:30", act: "Palestra: Nutrição" },
        { hr: "14:15", act: "Treino: Saque e Passe" },
        { hr: "15:45", act: "Jogos e Desafios" },
        { hr: "16:45", act: "Jogos Pais & Filhos" },
        { hr: "18:00", act: "Encerramento" }
      ]
    },
    {
      num: "02",
      data: "SÁBADO · 25 JULHO",
      titulo: "Evolução & Mentalidade",
      desc: "O dia em que tudo se intensifica. Treinos técnico-táticos. Workshop com profissionais da seleção brasileira.",
      cronograma: [
        { hr: "08:00", act: "Treino: Levantamento e Ataque" },
        { hr: "09:30", act: "Treino: Bloqueio e Defesa" },
        { hr: "11:00", act: "Atividade Surpresa" },
        { hr: "13:15", act: "Workshop: Prep. Física e Fisioterapia" },
        { hr: "14:00", act: "Treino Técnico-Tático" },
        { hr: "15:30", act: "Jogos e Desafios" },
        { hr: "17:00", act: "Jogos Pais & Filhos" },
        { hr: "18:00", act: "Encerramento" }
      ]
    },
    {
      num: "03",
      data: "DOMINGO · 26 JULHO",
      titulo: "Glória & Memória",
      desc: "O Torneio Elite Camp. A mesa redonda com a Paula. A foto que vai pra parede do quarto.",
      cronograma: [
        { hr: "08:00", act: "Início do Torneio Elite Camp" },
        { hr: "11:00", act: "Mesa Redonda com Paula" },
        { hr: "13:30", act: "Finais do Torneio" },
        { hr: "15:30", act: "Palestra: Sonhe, Lute e Realize" },
        { hr: "16:30", act: "Premiação" },
        { hr: "17:00", act: "Encerramento, Fotos, Sorteios" }
      ]
    }
  ]

  return (
    <section className="bg-black-main py-20 md:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-block tracking-widest text-gold-500 font-semibold text-sm uppercase">
            A EXPERIÊNCIA
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white mt-4 leading-tight">
            3 dias. 3 capítulos.<br />
            1 transformação.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {dias.map((dia, index) => (
            <m.div
              key={index}
              className="bg-black-secondary rounded-xl p-6 md:p-8 border-t-4 border-gold-500 hover:transform hover:scale-[1.02] transition-transform duration-300 shadow-xl flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 * index }}
            >
              <div className="font-display text-6xl text-gold-500/30 font-bold leading-none -mt-2">
                {dia.num}
              </div>
              <div className="text-xs text-gold-500 tracking-widest font-semibold mt-2 uppercase">
                {dia.data}
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mt-3">
                {dia.titulo}
              </h3>
              <p className="mt-3 text-sm md:text-base text-gray-300 leading-relaxed flex-grow">
                {dia.desc}
              </p>

              <div className="my-6 border-t border-gold-600/30 w-full" />

              <div>
                <div className="text-xs text-gold-500 font-semibold uppercase tracking-widest mb-3">
                  PROGRAMAÇÃO
                </div>
                <ul className="space-y-2">
                  {dia.cronograma.map((item, idx) => (
                    <li key={idx} className="flex gap-3 items-start text-xs md:text-sm">
                      <span className="text-gold-500 mt-1.5 leading-none text-[8px]">●</span>
                      <span className="text-gold-500 font-semibold whitespace-nowrap">{item.hr}</span>
                      <span className="text-gray-300">{item.act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  )
}
