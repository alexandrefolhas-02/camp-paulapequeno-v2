import { m } from 'motion/react'
import { MapPin } from 'lucide-react'

export default function Estrutura() {
  return (
    <section className="bg-black-secondary py-20 md:py-32 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
        
        {/* COLUNA ESQUERDA - Texto */}
        <m.div 
          className="flex-1 w-full"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block tracking-widest text-gold-500 font-semibold text-sm uppercase">
            INFRAESTRUTURA
          </div>
          
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white mt-4">
            Onde campeãs treinam.
          </h2>
          
          <h3 className="mt-3 text-xl text-gold-500 font-semibold">
            Clube de Aeronáutica — Barra da Tijuca
          </h3>
          
          <p className="mt-6 text-base text-gray-300 leading-relaxed">
            Um dos espaços esportivos mais nobres e seguros do Rio de Janeiro. Ginásio de alto rendimento, academia moderna, piscinas, restaurante e áreas de convivência premium para os familiares.
          </p>
          
          <p className="mt-4 text-base text-gray-300 leading-relaxed">
            Tudo escolhido para que sua atleta — e você — vivam 3 dias dentro de um ambiente à altura do que essa imersão representa.
          </p>

          <div className="mt-8 p-5 border border-gold-600/30 bg-black-main rounded-xl flex gap-4 items-start shadow-md">
            <div className="text-2xl mt-1"><MapPin className="w-6 h-6 text-gold-500" strokeWidth={2} /></div>
            <div>
              <div className="text-xs text-gold-500 tracking-widest font-semibold uppercase">
                LOCALIZAÇÃO PRIVILEGIADA
              </div>
              <p className="text-white text-sm md:text-base mt-1">
                Avenida Rachel de Queiroz, s/n° — Barra da Tijuca, Rio de Janeiro
              </p>
            </div>
          </div>

          <div className="mt-6 border-t border-gray-800 pt-6">
            <div className="text-xs text-gold-500 tracking-wider">SEDE OFICIAL</div>
            <div className="text-white font-semibold tracking-wide text-lg mt-1">CLUBE DE AERONÁUTICA</div>
          </div>
        </m.div>

        {/* COLUNA DIREITA - Galeria */}
        <m.div 
          className="flex-1 w-full"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid grid-cols-2 gap-4">
            
            {/* Foto 1 (Topo inteira) */}
            <div className="col-span-2 rounded-xl overflow-hidden aspect-video relative group border border-white/5">
              <img 
                src="/images/structure-aerial.webp" 
                alt="Vista aérea do Clube de Aeronáutica" 
                loading="lazy" decoding="async"
                width={800}
                height={450}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.classList.add('bg-black-main');
                }}
              />
            </div>
            
            {/* Foto 2 (Esquerda meio) */}
            <div className="col-span-1 rounded-xl overflow-hidden aspect-square relative group border border-white/5">
              <img 
                src="/images/structure-gym.webp" 
                alt="Ginásio do Clube de Aeronáutica" 
                loading="lazy" decoding="async"
                width={400}
                height={400}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.classList.add('bg-black-main');
                }}
              />
            </div>
            
            {/* Foto 3 (Direita meio) */}
            <div className="col-span-1 rounded-xl overflow-hidden aspect-square relative group border border-white/5">
              <img 
                src="/images/structure-academy.webp" 
                alt="Academia do Clube de Aeronáutica" 
                loading="lazy" decoding="async"
                width={400}
                height={400}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.classList.add('bg-black-main');
                }}
              />
            </div>
            
            {/* Foto 4 (Embaixo inteira) */}
            <div className="col-span-2 rounded-xl overflow-hidden aspect-video sm:aspect-[21/9] relative group border border-white/5">
              <img 
                src="/images/structure-restaurant.webp" 
                alt="Restaurante do Clube de Aeronáutica" 
                loading="lazy" decoding="async"
                width={800}
                height={340}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.classList.add('bg-black-main');
                }}
              />
            </div>

          </div>
        </m.div>
        
      </div>
    </section>
  )
}
