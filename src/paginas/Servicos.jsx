import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'
import { ClipboardCheck, Scale, Trash2, Sprout, Building, ChevronRight, X, ArrowRight } from 'lucide-react'

export default function Servicos() {
  const [activeService, setActiveService] = useState(null)

  const servicos = [
    {
      id: "auditoria",
      icon: <ClipboardCheck size={32} />,
      title: "Auditoria Ambiental",
      tagline: "Avalie o nível de conformidade da sua organização.",
      beneficios: ["Prevenção de sanções", "Continuidade operacional", "Preparação para fiscalizações"],
      detalhes: "Avaliamos o nível de conformidade ambiental da organização face à legislação nacional e normas internacionais (ISO 14001 e ISO 19011). Inclui revisão documental, inspeção técnica e plano de ações corretivas.",
      colSpan: "md:col-span-2"
    },
    {
      id: "conformidade",
      icon: <Scale size={32} />,
      title: "Conformidade Ambiental",
      tagline: "Regularização e monitoria de obrigações.",
      beneficios: ["Estabilidade jurídica", "Redução de riscos"],
      detalhes: "Serviço orientado à regularização e monitoria do cumprimento das obrigações legais ambientais. Inclui verificação de licenciamento, acompanhamento de requisitos legais e apoio em processos regulatórios.",
      colSpan: "md:col-span-1"
    },
    {
      id: "aias",
      icon: <Building size={32} />,
      title: "Avaliação de Impacto (AIAS)",
      tagline: "Estudos técnicos para mitigação de impactos.",
      beneficios: ["Aprovação de projetos", "Engajamento comunitário"],
      detalhes: "Elaboração de estudos técnicos para identificação e mitigação de impactos ambientais e sociais. Aplicável a projetos industriais, infraestruturas, empreendimentos agrícolas e unidades de saúde.",
      colSpan: "md:col-span-1"
    },
    {
      id: "residuos",
      icon: <Trash2 size={32} />,
      title: "Gestão de Resíduos",
      tagline: "Sistemas estruturados para hospitais e indústrias.",
      beneficios: ["Redução de custos", "Mitigação de riscos sanitários"],
      detalhes: "Implementação de sistemas estruturados de gestão de resíduos. Componentes incluem análise de fluxos, plano de gestão, procedimentos operacionais e capacitação interna contínua.",
      colSpan: "md:col-span-1"
    },
    {
      id: "esg",
      icon: <Sprout size={32} />,
      title: "Consultoria ESG Estratégica",
      tagline: "Sustentabilidade integrada ao negócio.",
      beneficios: ["Reputação corporativa", "Atração de investimentos"],
      detalhes: "Estruturamos sua atuação com base nos princípios ESG (Environmental, Social and Governance). Ajudamos a reforçar a governação organizacional, melhorar a eficiência interna e aumentar a competitividade empresarial.",
      colSpan: "md:col-span-1"
    }
  ]

  // Variantes para animação de entrada
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  }

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", damping: 25, stiffness: 300 } },
    exit: { opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.2 } }
  }

  return (
    <div className="relative w-full bg-gray-50 min-h-screen overflow-x-hidden font-sans pt-40 md:pt-24 pb-24">

      {/* 1. CABEÇALHO DA PÁGINA */}
      <motion.section 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="px-6 py-12 text-center max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
          Serviços <span className="text-green-700">Técnicos</span>
        </h1>
        <p className="text-lg text-gray-600">
          Soluções especializadas para garantir a conformidade regulatória e a eficiência sustentável do seu negócio em Moçambique.
        </p>
      </motion.section>

      {/* 2. BENTO GRID DE SERVIÇOS */}
      <section className="px-6 max-w-6xl mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {servicos.map((servico) => (
            <motion.div
              key={servico.id}
              layoutId={`card-${servico.id}`}
              variants={cardVariants}
              onClick={() => setActiveService(servico)}
              className={`${servico.colSpan} bg-white p-8 rounded-4xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-green-200 cursor-pointer transition-all group flex flex-col justify-between`}
            >
              <div>
                <motion.div layoutId={`icon-${servico.id}`} className="w-16 h-16 bg-green-50 text-green-700 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-700 group-hover:text-white transition-colors">
                  {servico.icon}
                </motion.div>
                <motion.h3 layoutId={`title-${servico.id}`} className="text-2xl font-bold text-gray-900 mb-3">
                  {servico.title}
                </motion.h3>
                <p className="text-gray-500 mb-6">{servico.tagline}</p>
              </div>

              <div className="flex items-center text-green-700 font-bold group-hover:gap-2 transition-all">
                Ver detalhes <ChevronRight size={20} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. MODAL DE DETALHES */}
      <AnimatePresence>
        {activeService && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setActiveService(null)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-100"
            />
            
            <div className="fixed inset-0 flex items-center justify-center z-110 px-4 pointer-events-none">
              <motion.div 
                layoutId={`card-${activeService.id}`}
                variants={modalVariants}
                initial="hidden" animate="visible" exit="exit"
                className="bg-white w-full max-w-2xl rounded-4xl p-8 md:p-12 shadow-2xl pointer-events-auto relative overflow-hidden"
              >
                <button 
                  onClick={() => setActiveService(null)}
                  className="absolute top-6 right-6 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <X size={24} className="text-gray-600" />
                </button>

                <motion.div layoutId={`icon-${activeService.id}`} className="w-16 h-16 bg-green-100 text-green-800 rounded-2xl flex items-center justify-center mb-6">
                  {activeService.icon}
                </motion.div>
                
                <motion.h3 layoutId={`title-${activeService.id}`} className="text-3xl font-black text-gray-900 mb-4">
                  {activeService.title}
                </motion.h3>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {activeService.detalhes}
                </p>

                <div className="mb-8">
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Principais Impactos</h4>
                  <ul className="space-y-3">
                    {activeService.beneficios.map((ben, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-800 font-medium">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        {ben}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full py-4 bg-green-700 text-white rounded-xl font-bold text-lg hover:bg-green-800 transition-colors flex items-center justify-center gap-2">
                  Solicitar Proposta <ArrowRight size={20} />
                </button>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* 4. CALL TO ACTION FINAL */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-24 px-6"
      >
        <div className="max-w-4xl mx-auto bg-green-950 rounded-4xl p-10 md:p-16 text-center text-white shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">Não sabe qual serviço precisa?</h2>
          <p className="text-green-200 mb-8 max-w-lg mx-auto">
            Fale com nossa equipa técnica. Avaliamos a situação da sua empresa e indicamos o caminho mais seguro para a conformidade.
          </p>
          <button className="px-8 py-4 bg-lime-400 text-green-950 rounded-full font-bold text-lg hover:bg-lime-500 transition-colors">
            Solicitar Proposta Técnica
          </button>
        </div>
      </motion.section>

    </div>
  )
}