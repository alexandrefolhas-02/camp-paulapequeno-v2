import { useEffect, useRef } from 'react'
import { m } from 'motion/react'
import { CheckCircle, Calendar, MapPin, MessageCircle, ArrowRight, Star, Sparkles } from 'lucide-react'
import { trackEvent } from '@/lib/utils'
import { CONFIG } from '@/lib/config'

function GoldParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    const particles: Array<{
      x: number
      y: number
      size: number
      speedY: number
      speedX: number
      opacity: number
      rotation: number
      rotationSpeed: number
    }> = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Create initial particles
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        size: Math.random() * 6 + 2,
        speedY: Math.random() * 1.5 + 0.5,
        speedX: Math.random() * 1 - 0.5,
        opacity: Math.random() * 0.6 + 0.2,
        rotation: Math.random() * 360,
        rotationSpeed: Math.random() * 4 - 2,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate((p.rotation * Math.PI) / 180)
        ctx.globalAlpha = p.opacity

        // Alternate between gold squares and circles
        const goldColors = ['#F4C430', '#D4A017', '#FFD700', '#FFC107']
        ctx.fillStyle = goldColors[Math.floor(Math.random() * goldColors.length)]

        if (Math.random() > 0.5) {
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size)
        } else {
          ctx.beginPath()
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2)
          ctx.fill()
        }

        ctx.restore()

        p.y += p.speedY
        p.x += p.speedX
        p.rotation += p.rotationSpeed

        // Reset particle when it goes off screen
        if (p.y > canvas.height + 10) {
          p.y = -10
          p.x = Math.random() * canvas.width
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  )
}

export default function Obrigado() {
  // Fire conversion events on mount
  useEffect(() => {
    trackEvent('Purchase', {
      source: 'obrigado_page',
      content_name: 'Paula Pequeno Elite Camp',
      currency: 'BRL',
    })

    // Also fire specific fbq Purchase if available
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Purchase', {
        content_name: 'Paula Pequeno Elite Camp',
        currency: 'BRL',
      })
    }
  }, [])

  const handleWhatsapp = () => {
    trackEvent('Lead', { source: 'obrigado_whatsapp' })
    window.open(
      CONFIG.whatsapp.getLink('Acabei de me inscrever no Elite Camp! 🏐 Quero saber os próximos passos.'),
      '_blank'
    )
  }

  const steps = [
    {
      number: '01',
      title: 'Confirmação por E-mail',
      description: 'Você receberá um e-mail do PagSeguro com o comprovante da sua inscrição. Guarde-o com carinho.',
    },
    {
      number: '02',
      title: 'Contato da Equipe',
      description: 'Nossa equipe entrará em contato via WhatsApp em até 48h com todas as informações do evento.',
    },
    {
      number: '03',
      title: 'Preparação para o Camp',
      description: 'Enviaremos um guia completo com o que levar, horários e tudo que sua atleta precisa saber.',
    },
  ]

  return (
    <section className="relative min-h-screen bg-black-main flex items-center justify-center overflow-hidden">
      {/* Particles */}
      <GoldParticles />

      {/* Background radial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-600/15 via-black-main/0 to-transparent pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 py-16 md:py-24 relative z-10 w-full">

        {/* SUCCESS ICON */}
        <m.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gold-500/20 rounded-full blur-2xl scale-150" />
            <div className="relative bg-gradient-to-br from-gold-500 to-gold-600 rounded-full p-5">
              <CheckCircle className="w-12 h-12 md:w-16 md:h-16 text-black-main" strokeWidth={2} />
            </div>
          </div>
        </m.div>

        {/* HEADING */}
        <m.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-2 text-gold-500 text-xs md:text-sm font-semibold tracking-widest uppercase mb-4">
            <Star className="w-4 h-4" />
            INSCRIÇÃO CONFIRMADA
            <Star className="w-4 h-4" />
          </div>

          <h1 className="font-display font-black text-3xl md:text-5xl lg:text-6xl text-white leading-tight">
            Parabéns! Sua atleta é{' '}
            <span className="text-gold-500">oficialmente</span> parte do{' '}
            <span className="text-gold-500">Elite Camp</span>.
          </h1>

          <p className="mt-6 text-gray-300 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            A inscrição foi realizada com sucesso. Agora falta pouco para viver 3 dias que podem transformar a trajetória esportiva da sua atleta para sempre.
          </p>
        </m.div>

        {/* EVENT INFO CARD */}
        <m.div
          className="mt-12 bg-black-secondary/80 backdrop-blur-md border border-gold-500/20 rounded-2xl p-6 md:p-8 shadow-2xl shadow-gold-500/5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-5 h-5 text-gold-500" />
            <h2 className="text-sm text-gold-400 font-semibold uppercase tracking-wide">
              DETALHES DO EVENTO
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-gold-500/10 p-3 rounded-xl flex-shrink-0">
                <Calendar className="w-6 h-6 text-gold-500" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-white font-bold text-base">24, 25 e 26 de Julho</div>
                <div className="text-gray-400 text-sm mt-1">2026 — 3 dias de imersão total</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-gold-500/10 p-3 rounded-xl flex-shrink-0">
                <MapPin className="w-6 h-6 text-gold-500" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-white font-bold text-base">Clube de Aeronáutica</div>
                <div className="text-gray-400 text-sm mt-1">Barra da Tijuca, Rio de Janeiro</div>
              </div>
            </div>
          </div>
        </m.div>

        {/* NEXT STEPS */}
        <m.div
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <h3 className="text-center text-xs text-gold-500 font-semibold uppercase tracking-widest mb-8">
            PRÓXIMOS PASSOS
          </h3>

          <div className="space-y-6">
            {steps.map((step, i) => (
              <m.div
                key={step.number}
                className="flex gap-5 items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.15 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center">
                  <span className="text-black-main font-bold text-sm">{step.number}</span>
                </div>
                <div className="min-w-0">
                  <h4 className="text-white font-bold text-base md:text-lg">{step.title}</h4>
                  <p className="text-gray-400 text-sm md:text-base mt-1 leading-relaxed">{step.description}</p>
                </div>
              </m.div>
            ))}
          </div>
        </m.div>

        {/* WHATSAPP CTA */}
        <m.div
          className="mt-14"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
        >
          <div className="bg-gradient-to-r from-gold-500/10 via-gold-500/5 to-gold-500/10 border border-gold-500/20 rounded-2xl p-6 md:p-8 text-center">
            <p className="text-gray-300 text-sm md:text-base mb-6">
              Quer acelerar? Envie uma mensagem para nossa equipe e receba todas as informações agora mesmo.
            </p>

            <button
              onClick={handleWhatsapp}
              className="inline-flex items-center justify-center gap-3 bg-gold-500 hover:bg-gold-600 text-black-main font-bold text-base md:text-lg px-8 py-4 rounded-xl shadow-2xl shadow-gold-500/30 hover:scale-[1.02] transition-transform duration-300"
            >
              <MessageCircle className="w-5 h-5" strokeWidth={2} />
              <span>FALAR COM A EQUIPE</span>
              <ArrowRight className="w-5 h-5" strokeWidth={2} />
            </button>
          </div>
        </m.div>

        {/* BACK TO HOME */}
        <m.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <a
            href="/"
            className="text-sm text-gray-500 hover:text-gold-400 transition-colors underline underline-offset-4"
          >
            ← Voltar para a página principal
          </a>
        </m.div>

        {/* FOOTER MINI */}
        <m.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <p className="text-xs text-gray-600">
            © 2026 Paula Pequeno Elite Camp. Todos os direitos reservados.
          </p>
        </m.div>
      </div>
    </section>
  )
}
