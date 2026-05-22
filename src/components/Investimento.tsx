import { motion } from 'motion/react'
import { Crown, Sparkles, CheckCircle2, CreditCard, Smartphone, FileText, Lock, ShieldCheck, Clock } from 'lucide-react'
import { trackEvent } from '@/lib/utils'
import { CONFIG } from '@/lib/config'
import { VAGAS_CONFIG } from '@/data/vagas'

export default function Investimento() {
  const handleFundador = () => {
    trackEvent('InitiateCheckout', { source: 'investimento_fundador', value: 1997 })
    window.location.href = CONFIG.pagbank.fundador
  }

  const handleRegular = () => {
    trackEvent('InitiateCheckout', { source: 'investimento_regular', value: 2434 })
    window.location.href = CONFIG.pagbank.regular
  }

  const handleEscola = () => {
    trackEvent('Lead', { source: 'investimento_escola' })
    window.open(CONFIG.whatsapp.getLink('Sou aluno(a) da Escola Paula Pequeno e quero saber sobre as condições exclusivas para o Camp.'), '_blank')
  }

  const inclusos = [
    "Acesso completo aos 3 dias do Camp com Paula Pequeno",
    "Kit Atleta Fundador numerado (01/30 a 30/30)",
    "Foto oficial impressa autografada pela Paula",
    "Pin colecionável de 1ª Edição",
    "Todas as refeições + coffee breaks gourmet",
    "Avaliação técnica individual com a Paula",
    "Workshop para pais incluso",
    "Participação no Torneio Elite Camp",
    "Acesso ao grupo exclusivo de Fundadores no WhatsApp",
    "Certificado + Passaporte do Atleta"
  ]

  return (
    <section className="bg-black-main py-20 md:py-32 relative overflow-hidden">
      {/* Gradiente radial sutil ao centro */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-600/10 via-black-main/0 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 w-full relative z-10 overflow-hidden">
        
        {/* CABEÇALHO */}
        <div className="text-center w-full">
          <div className="inline-block tracking-widest text-gold-500 font-semibold text-sm uppercase">
            INVESTIMENTO
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white mt-4 leading-tight">
            Sua escolha de hoje<br />
            pode definir a história dela.
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Duas formas de entrar para a primeira edição. Uma delas — para sempre — limitada a 30 atletas.
          </p>
        </div>

        {/* CARD PRINCIPAL — ATLETA FUNDADOR */}
        <motion.div 
          className="mt-12 max-w-4xl mx-auto w-full bg-gradient-to-br from-gold-500/10 via-black-secondary to-black-main border-2 border-gold-500 rounded-3xl p-8 md:p-12 shadow-2xl shadow-gold-500/10 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Decoração sutil top-right */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-500/10 to-transparent pointer-events-none" />

          <div className="flex flex-col items-center text-center relative z-10">
            
            <div className="inline-flex items-center gap-2 bg-gold-500 text-black px-5 py-2 rounded-full font-bold text-xs uppercase tracking-wide">
              <Crown className="w-4 h-4 flex-shrink-0" strokeWidth={2.5} />
              <span>EXCLUSIVO ATLETA FUNDADOR</span>
            </div>

            <h3 className="mt-6 font-display text-3xl md:text-5xl font-bold text-white">
              Atleta Fundador
            </h3>
            
            <p className="mt-2 text-lg text-gold-400 font-medium">
              Apenas {VAGAS_CONFIG.fundador.total} vagas. Apenas agora.
            </p>

            {/* DESTAQUE DE PREÇO */}
            <div className="mt-10 flex flex-col items-center w-full">
              <span className="text-sm text-gray-300">investimento único de</span>
              <div className="mt-2 font-display text-6xl md:text-8xl font-bold text-gold-500 leading-none tracking-tight">
                R$ 1.997
              </div>
              <div className="mt-4 text-xl text-white font-semibold">
                ou 10x de R$ 199,70 sem juros
              </div>
              <div className="mt-4 inline-flex items-center gap-2 bg-red-urgency text-white px-5 py-2 rounded-full font-bold text-sm max-w-full min-w-0">
                <span className="truncate">ECONOMIA DE 47% • APENAS PARA OS 30 PRIMEIROS</span>
              </div>
            </div>

            {/* LISTA DE INCLUSOS */}
            <div className="mt-10 max-w-2xl w-full grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {inclusos.map((item, index) => (
                <div key={index} className="flex items-start gap-3 min-w-0">
                  <CheckCircle2 className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-sm md:text-base text-white min-w-0 flex-wrap">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA PRINCIPAL */}
            <div className="mt-10 w-full max-w-md flex flex-col items-center">
              <button
                onClick={handleFundador}
                data-event-name="InitiateCheckout"
                data-event-source="investimento_fundador"
                className="w-full flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-black font-bold text-base md:text-lg px-8 py-5 rounded-xl shadow-2xl shadow-gold-500/30 hover:scale-[1.02] transition-transform duration-300"
              >
                <span>GARANTIR MINHA VAGA DE FUNDADORA</span>
                <Sparkles className="w-5 h-5 flex-shrink-0" strokeWidth={2} />
              </button>

              <div className="mt-3 flex items-center justify-center gap-2 text-xs text-gray-300">
                <Lock className="w-3 h-3 flex-shrink-0" strokeWidth={2} />
                <span>Pagamento 100% seguro via PagBank</span>
              </div>
            </div>

            {/* Indicador de vagas */}
            <div className="mt-6 flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-red-urgency animate-pulse flex-shrink-0" strokeWidth={2.5} />
              <span className="text-sm text-gold-400 font-semibold">
                {VAGAS_CONFIG.fundador.disponiveis} de {VAGAS_CONFIG.fundador.total} vagas restantes
              </span>
            </div>

          </div>
        </motion.div>

        {/* CARD SECUNDÁRIO — LOTE OFICIAL */}
        <motion.div 
          className="mt-12 max-w-3xl mx-auto w-full bg-black-secondary border border-gold-500/20 rounded-2xl p-6 md:p-8 opacity-90"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 flex-wrap min-w-0">
            <div className="flex flex-col min-w-0 flex-1">
              <span className="text-xs text-gray-300 uppercase tracking-wide">
                LOTE OFICIAL
              </span>
              <h3 className="mt-1 text-2xl md:text-3xl font-bold text-white min-w-0 flex-wrap">
                Atleta Regular
              </h3>
            </div>
            
            <div className="flex flex-col items-start sm:items-end flex-shrink-0">
              <span className="text-3xl md:text-4xl font-bold text-white">
                R$ 2.434
              </span>
              <span className="mt-1 text-sm text-gray-300">
                ou 10x de R$ 243,40 sem juros
              </span>
            </div>
          </div>

          <p className="mt-6 text-sm text-gray-300 leading-relaxed min-w-0 flex-wrap">
            Após as {VAGAS_CONFIG.fundador.total} vagas de Atleta Fundador serem preenchidas, o investimento passa a ser de R$ 2.434, com todos os benefícios do Camp — exceto os exclusivos da 1ª edição (numeração serial, foto autografada, pin colecionável, grupo de fundadores).
          </p>

          <div className="mt-6 flex justify-start sm:justify-end min-w-0 w-full">
            <button
              onClick={handleRegular}
              data-event-name="InitiateCheckout"
              data-event-source="investimento_regular"
              className="inline-flex items-center justify-center gap-2 border border-gold-500/50 text-gold-400 hover:bg-gold-500/10 px-6 py-3 rounded-lg font-semibold text-sm transition-colors w-full sm:w-auto"
            >
              <span>Garantir vaga regular</span>
            </button>
          </div>
        </motion.div>

        {/* LINHA DISCRETA — ALUNOS ESCOLA */}
        <div className="mt-12 max-w-2xl mx-auto w-full text-center">
          <div className="p-5 bg-black-secondary/50 rounded-xl border border-gold-500/10 flex flex-col sm:flex-row items-center justify-center gap-2 flex-wrap min-w-0 text-sm md:text-base">
            <Crown className="w-4 h-4 text-gold-500 flex-shrink-0" strokeWidth={2} />
            <span className="text-gray-300 min-w-0 flex-wrap">
              É aluno(a) da Escola Paula Pequeno? Você tem condições exclusivas.
            </span>
            <button 
              onClick={handleEscola}
              className="text-gold-400 underline hover:text-gold-300 transition-colors whitespace-nowrap"
            >
              Fale com nossa equipe
            </button>
          </div>
        </div>

        {/* MÉTODOS DE PAGAMENTO */}
        <div className="mt-12 max-w-3xl mx-auto w-full text-center">
          <div className="text-xs text-gray-300 uppercase tracking-wide">
            MÉTODOS DE PAGAMENTO ACEITOS
          </div>
          
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 md:gap-10 min-w-0">
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-gold-500" strokeWidth={1.5} />
              </div>
              <span className="text-xs text-gray-300 font-semibold">CARTÃO</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-gold-500" strokeWidth={1.5} />
              </div>
              <span className="text-xs text-gray-300 font-semibold">PIX</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
                <FileText className="w-6 h-6 text-gold-500" strokeWidth={1.5} />
              </div>
              <span className="text-xs text-gray-300 font-semibold">BOLETO</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-gold-500" strokeWidth={1.5} />
              </div>
              <span className="text-xs text-gray-300 font-semibold">PAGBANK</span>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-300 min-w-0 flex-wrap">
            <Lock className="w-3 h-3 text-gold-500 flex-shrink-0" strokeWidth={2} />
            <span className="min-w-0 flex-wrap">
              Ambiente 100% seguro. Seus dados são protegidos com criptografia bancária.
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}
