import { m } from 'motion/react'

export default function PorQueAPaula() {
  const credenciais = [
    { icon: "🥇", text: "2 Medalhas Olímpicas — Pequim 2008, Londres 2012" },
    { icon: "🏆", text: "MVP Beijing 2008 — única na história do voleibol brasileiro feminino" },
    { icon: "🌍", text: "+20 anos como atleta profissional — 2X Melhor do Mundo" },
    { icon: "🎓", text: "Fundadora da Escola Paula Pequeno — formando jovens atletas" },
    { icon: "📺", text: "Comentarista esportiva — SporTV / Globo" },
  ]

  return (
    <section className="bg-black-secondary py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* COLUNA ESQUERDA (Foto) */}
        <m.div 
          className="flex-1 w-full max-w-md lg:max-w-none"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl bg-black-main border border-gold-500/20">
            <img
              src="/images/paula-sorriso-1000.webp"
              alt="Paula Pequeno sorrindo durante competição"
              width={1000}
              height={1250}
              loading="lazy" decoding="async"
              className="w-full h-auto rounded-xl shadow-2xl object-cover aspect-[4/5]"
            />
          </div>
        </m.div>

        {/* COLUNA DIREITA (Conteúdo) */}
        <div className="flex-1 w-full">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-block tracking-widest text-gold-500 font-semibold text-sm uppercase mb-4">
              POR QUE A PAULA ?
            </div>
            
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white leading-tight">
              A única atleta que pode<br />
              oferecer essa imersão.
            </h2>
          </m.div>

          {/* Credenciais */}
          <div className="mt-10 flex flex-col gap-4">
            {credenciais.map((cred, index) => (
              <m.div 
                key={index}
                className="flex items-center gap-4 p-4 border-l-4 border-gold-500 bg-black-main rounded-r-lg shadow-sm"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
              >
                <span className="text-2xl flex-shrink-0">{cred.icon}</span>
                <p className="text-white font-medium text-sm md:text-base">
                  {cred.text}
                </p>
              </m.div>
            ))}
          </div>

          {/* Citação */}
          <m.div 
            className="mt-12 p-6 border-l-4 border-gold-500/50 bg-black-main/30 rounded-r-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <p className="italic text-lg text-gray-300 leading-relaxed">
              "Eu vivi tudo o que essas atletas estão vivendo. A pressão, as 
              dúvidas, as cobranças e até pensar em desistir. Por isso esse Camp existe, para 
              que atletas entendam a melhor forma de lidar com as dificuldades."
            </p>
            <p className="mt-4 text-gold-500 font-semibold text-right">
              — Paula Pequeno
            </p>
          </m.div>

        </div>
      </div>
    </section>
  )
}
