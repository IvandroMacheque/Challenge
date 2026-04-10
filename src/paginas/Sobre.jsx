import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { Target, Eye, Shield, CheckCircle2, ArrowRight } from 'lucide-react'

export default function Sobre() {
  
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  const valores = [
    "Rigor técnico",
    "Ética e transparência",
    "Responsabilidade ambiental e social",
    "Orientação para resultados",
    "Inovação aplicada",
    "Profissionalismo"
  ]

  const metodologia = [
    { num: "01", titulo: "Avaliação Técnica Inicial", desc: "Mapeamento completo dos riscos e exigências legais." },
    { num: "02", titulo: "Planeamento e Escopo", desc: "Definição de metas claras e prazos de regularização." },
    { num: "03", titulo: "Implementação Técnica", desc: "Execução das melhorias e adequação aos padrões ESG." },
    { num: "04", titulo: "Monitoria e Avaliação", desc: "Acompanhamento contínuo para garantir conformidade." },
    { num: "05", titulo: "Relatório de Melhoria", desc: "Entrega de resultados e plano de sustentabilidade." }
  ]

  return (
    <div className="w-full bg-white overflow-x-hidden font-sans pt-40 md:pt-24">

      {/* 1. HERO SECTION SOBRE (Elegante e Direta) */}
      <section className="relative px-6 py-16 md:py-24 max-w-6xl mx-auto">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Sustentabilidade <br />
              <span className="text-green-700">levada a sério.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A EcoPlus consolidou a sua presença como parceira técnica de referência para organizações públicas e privadas que procuram otimizar processos operacionais e estruturar modelos de gestão sustentáveis.
            </p>
          </div>
          <div className="relative">
             <div className="absolute inset-0 bg-green-100 rounded-4xl transform translate-x-4 translate-y-4"></div>
             <img 
               src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800" 
               alt="Equipa EcoPlus" 
               className="relative rounded-4xl shadow-xl w-full object-cover h-[400px]"
             />
          </div>
        </motion.div>
      </section>

      {/* 2. MISSÃO E VISÃO (Layout em Grid Quebrado) */}
      <section className="bg-green-950 text-white py-24 px-6 relative overflow-hidden">
        {/* Efeito de brilho ao fundo - Escondido no mobile */}
        <div className="hidden md:block absolute top-0 right-0 w-[500px] h-[500px] bg-green-600/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 relative z-10">
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}
            className="bg-green-900/50 p-10 rounded-4xl border border-green-800 backdrop-blur-sm"
          >
            <Target size={40} className="text-green-400 mb-6" />
            <h2 className="text-3xl font-bold mb-4">Nossa Missão</h2>
            <p className="text-green-100 text-lg leading-relaxed">
              Prestar serviços técnicos especializados que integrem sustentabilidade, eficiência operacional e governação estratégica, promovendo conformidade regulatória e geração de valor empresarial.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}
            className="bg-green-900/50 p-10 rounded-4xl border border-green-800 backdrop-blur-sm md:translate-y-12"
          >
            <Eye size={40} className="text-green-400 mb-6" />
            <h2 className="text-3xl font-bold mb-4">Nossa Visão</h2>
            <p className="text-green-100 text-lg leading-relaxed">
              Ser referência nacional em consultoria ESG e gestão ambiental aplicada, reconhecida pela excelência técnica, impacto real e capacidade de transformar riscos em oportunidades estratégicas.
            </p>
          </motion.div>

        </div>
      </section>

      {/* 3. OS VALORES (Lista limpa com ícones) */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <Shield size={48} className="text-green-700 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Os Princípios que nos Guiam</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {valores.map((valor, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3 text-left"
              >
                <CheckCircle2 className="text-green-600 shrink-0" size={24} />
                <span className="font-semibold text-gray-800">{valor}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. METODOLOGIA (As 5 Fases - Horizontal / Vertical Flow) */}
      <section className="relative py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 md:flex justify-between items-end">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Metodologia Estruturada</h2>
              <p className="text-xl text-gray-600">Um processo de 5 fases para transformar exigências regulatórias em oportunidades.</p>
            </div>
            <button className="hidden md:flex mt-6 items-center gap-2 text-green-700 font-bold hover:gap-4 transition-all">
              Solicitar Proposta <ArrowRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {metodologia.map((fase, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.15 }}
                className="group relative pt-8"
              >
                {/* Linha conectora (visível apenas no desktop) */}
                {idx !== 4 && <div className="hidden md:block absolute top-12 left-1/2 w-full h-[2px] bg-gray-100"></div>}
                
                <div className="relative z-10 w-16 h-16 bg-green-50 text-green-700 rounded-2xl flex items-center justify-center text-2xl font-black mb-6 group-hover:bg-green-700 group-hover:text-white transition-colors border border-green-100">
                  {fase.num}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 pr-4">{fase.titulo}</h3>
                <p className="text-gray-600 text-sm leading-relaxed pr-4">{fase.desc}</p>
              </motion.div>
            ))}
          </div>

          <button className="md:hidden mt-12 w-full flex justify-center items-center gap-2 text-green-700 font-bold bg-green-50 py-4 rounded-xl">
            Solicitar Proposta <ArrowRight size={20} />
          </button>
        </div>
      </section>

    </div>
  )
}