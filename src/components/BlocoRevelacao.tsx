import { useState } from 'react'
import { m } from 'motion/react'
import { trackEvent } from '@/lib/utils'
import { CONFIG } from '@/lib/config'

export default function BlocoRevelacao() {
  const [isPlaying, setIsPlaying] = useState(false)

  const handleCTA = () => {
    trackEvent('Lead', { source: 'revelacao_cta' })
    const link = CONFIG.whatsapp.getLink('Quero garantir a vaga na imersão com a Paula!')
    window.open(link, '_blank')
  }

  const linhas = [
    "Treinando com a Paula.",
    "Almoçando com a Paula.",
    "Sendo ouvida pela Paula.",
    "Aprendendo, pessoalmente, o que faz uma menina virar campeã olímpica."
  ]

  return (
    <section className="relative bg-black-main py-20 md:py-32 px-4 overflow-hidden">
      {/* Background radial gradient center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-600/10 via-black-main/0 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        {/* Título */}
        <m.h2 
          className="font-display font-black text-4xl md:text-7xl leading-tight text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          E se ela pudesse passar 3 dias<br />
          dentro da escola que formou<br />
          <span className="text-gold-500">Paula Pequeno?</span>
        </m.h2>

        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 space-y-2"
        >
          <p className="text-2xl text-gray-300 font-semibold tracking-wide">
            Não como espectadora.
          </p>
          <p className="text-2xl text-gray-300 font-semibold tracking-wide">
            Como atleta.
          </p>
        </m.div>

        {/* Lista Emocional */}
        <div className="mt-10 flex flex-col gap-3">
          {linhas.map((linha, index) => {
            const isLast = index === linhas.length - 1
            // Realçando "Paula" na string (simples split ou hardcode)
            const parts = linha.split('Paula')
            
            return (
              <m.p 
                key={index}
                className={`text-xl md:text-2xl text-white ${isLast ? 'font-bold mt-2' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.15) }}
              >
                {parts.length > 1 ? (
                  <>
                    {parts[0]}<span className="text-gold-500 font-bold">Paula</span>{parts[1]}
                  </>
                ) : (
                  linha
                )}
              </m.p>
            )
          })}
        </div>

        {/* Bloco de Fechamento */}
        <m.div 
          className="mt-16 py-8 border-t border-b border-gold-500/20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3 className="font-display text-3xl md:text-5xl font-bold leading-tight">
            <span className="text-white">Isso é o Elite Camp.</span><br />
            <span className="text-gold-500">E nunca aconteceu antes.</span>
          </h3>
        </m.div>

        {/* Vídeo */}
        <m.div 
          className="mt-12 aspect-video max-w-3xl mx-auto rounded-xl overflow-hidden border border-gold-500/30 shadow-2xl relative bg-black-secondary group cursor-pointer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
          onClick={() => setIsPlaying(true)}
        >
          {!isPlaying ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black-main/80 hover:bg-black-main/60 transition-colors">
              <div className="w-20 h-20 rounded-full bg-gold-500 flex items-center justify-center text-black-main pl-2 mb-4 group-hover:scale-110 transition-transform">
                {/* SVG Play Icon */}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-gray-300 font-medium tracking-widest text-sm uppercase">
                [ Vídeo da Paula — 60 segundos ]
              </p>
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-black-main">
              <p className="text-gray-400 italic">Iframe do YouTube/Vimeo entrará aqui</p>
              {/* <iframe src="..." loading="lazy" decoding="async" /> */}
            </div>
          )}
        </m.div>

        {/* CTA */}
        <m.div
          className="mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <button 
            onClick={handleCTA}
            data-event-name="Lead"
            data-event-source="revelacao_cta"
            className="w-full md:w-auto bg-gold-500 text-black-main font-bold text-lg md:text-xl px-10 py-5 rounded-md shadow-xl hover:scale-105 transition-transform duration-300 uppercase"
          >
            QUERO GARANTIR ESSA VAGA →
          </button>
        </m.div>

      </div>
    </section>
  )
}
