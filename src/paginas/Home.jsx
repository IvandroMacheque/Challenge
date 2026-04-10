import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { ShieldCheck, TrendingUp, Leaf, ArrowRight, Menu } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Home() {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <div className="relative w-full min-h-screen bg-white overflow-x-hidden font-sans">
      {/* 1. HERO SECTION (Foco em Dor e Conversão) */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-40 pb-12 px-6">
        
        {/* Elemento de background abstrato - Escondido no mobile para evitar 'zoom' visual */}
        <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-5xl opacity-10 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-green-600 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        </div>

        <motion.div 
          className="relative z-10 max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 text-green-700 font-medium text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></span>
            Consultoria Técnica e Ambiental em Moçambique
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6">
            Evite riscos legais e garanta a <span className="text-transparent bg-clip-text bg-linear-to-r from-green-700 to-green-500">conformidade</span> do seu negócio.
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Transformamos exigências regulatórias em oportunidades estratégicas. 
            Auditoria, Gestão de Resíduos e práticas ESG com quem entende do mercado nacional.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-green-700 text-white rounded-full font-bold text-lg shadow-lg shadow-green-700/30 hover:bg-green-800 transition-colors flex items-center justify-center gap-2"
            >
              Solicitar Proposta Técnica
              <ArrowRight size={20} />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-white text-green-800 border border-gray-200 rounded-full font-bold text-lg hover:border-green-700 hover:bg-green-50 transition-colors"
            >
              <Link to="/servicos">Nossos Serviços</Link>
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. NUMBERS / SOCIAL PROOF (Credibilidade) */}
      <section className="bg-green-900 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:divide-x divide-green-800/50">
          {[
            { number: "+20", label: "Especialistas" },
            { number: "ISO", label: "9001 e 14001" },
            { number: "5 Anos", label: "De Mercado" },
            { number: "100%", label: "Cobertura Nacional" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-2">{stat.number}</h3>
              <p className="text-green-300 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. VALUE PROPOSITION CARDS (Tradução de serviço para resultado) */}
      <section id="servicos" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Por que as empresas escolhem a EcoPlus?</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">Não entregamos apenas relatórios, entregamos segurança jurídica e eficiência operacional.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck size={32} className="text-green-600" />,
                title: "Risco Zero em Fiscalizações",
                desc: "Auditorias rigorosas para garantir que sua empresa cumpra 100% da legislação ambiental moçambicana."
              },
              {
                icon: <TrendingUp size={32} className="text-green-600" />,
                title: "ESG como Vantagem Competitiva",
                desc: "Implementamos práticas sustentáveis que atraem investidores e melhoram a reputação da sua marca."
              },
              {
                icon: <Leaf size={32} className="text-green-600" />,
                title: "Gestão Inteligente de Resíduos",
                desc: "Redução de custos operacionais e mitigação de riscos sanitários para indústrias e hospitais."
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BOTTOM CTA BANNER */}
      <section id="contactos" className="py-20 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-linear-to-br from-green-800 to-green-600 rounded-[2.5rem] p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden"
        >
          {/* Círculos decorativos do Banner */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Pronto para blindar sua empresa?</h2>
            <p className="text-green-100 text-lg mb-10 max-w-2xl mx-auto">
              Pare de adiar a regularização ambiental. Fale com um de nossos especialistas hoje e descubra o plano ideal para o seu negócio.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-green-800 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Falar com um Especialista Agora
            </motion.button>
          </div>
        </motion.div>
      </section>

    </div>
  )
}