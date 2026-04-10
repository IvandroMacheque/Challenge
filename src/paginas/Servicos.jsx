import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, Recycle, BarChart3, Globe, ClipboardCheck, X, ArrowRight, MessageCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Servicos() {
  const [selectedServico, setSelectedServico] = useState(null)
  const { t, i18n } = useTranslation()

  const servicos = [
    {
      id: 1,
      icon: <Shield size={32} />,
      titulo: i18n.language === 'en' ? "Environmental Auditing" : "Auditoria Ambiental",
      desc: i18n.language === 'en' ? "Compliance assessment according to ISO 14001 and local legislation." : "Avaliação de conformidade segundo a ISO 14001 e legislação local.",
      cor: "bg-blue-500",
      detalhes: i18n.language === 'en' 
        ? "Evaluation of the organization's environmental compliance level against national legislation and international standards (ISO 14001, ISO 19011). Includes document review, technical inspection, and corrective action plan."
        : "Avaliação do nível de conformidade ambiental da organização face à legislação nacional e normas internacionais (ISO 14001, ISO 19011). Inclui revisão documental, inspecção técnica e plano de acções correctivas.",
      beneficios: i18n.language === 'en' ? ["Legal Security", "Identification of Non-conformities", "Technical Soundness"] : ["Segurança Jurídica", "Identificação de Não-conformidades", "Rigor Técnico"]
    },
    {
      id: 2,
      icon: <ClipboardCheck size={32} />,
      titulo: i18n.language === 'en' ? "Environmental Compliance" : "Conformidade Ambiental",
      desc: i18n.language === 'en' ? "Regulatory monitoring and environmental licensing support." : "Monitoria regulatória e apoio ao licenciamento ambiental.",
      cor: "bg-green-600",
      detalhes: i18n.language === 'en'
        ? "Service focused on regularization and monitoring of environmental legal obligations. Includes licensing verification and periodic compliance reports."
        : "Serviço orientado à regularização e monitoria do cumprimento das obrigações legais ambientais. Inclui verificação de licenciamento e relatórios periódicos de conformidade.",
      beneficios: i18n.language === 'en' ? ["Operational Continuity", "Sanction Prevention", "Market Credibility"] : ["Continuidade Operacional", "Prevenção de Sanções", "Credibilidade no Mercado"]
    },
    {
      id: 3,
      icon: <BarChart3 size={32} />,
      titulo: i18n.language === 'en' ? "Environmental and Social Impact Assessment (ESIA)" : "Avaliação de Impacto Ambiental e Social (AIAS)",
      desc: i18n.language === 'en' ? "Technical studies for identifying and mitigating impacts." : "Estudos técnicos para identificação e mitigação de impactos.",
      cor: "bg-emerald-600",
      detalhes: i18n.language === 'en'
        ? "Preparation of technical studies for impact identification and mitigation. Applicable to industrial projects, infrastructure, and health units. Includes public consultation and Environmental Management Plans."
        : "Elaboração de estudos técnicos para identificação e mitigação de impactos. Aplicável a projectos industriais, infra-estruturas e unidades de saúde. Inclui consulta pública e Planos de Gestão Ambiental.",
      beneficios: i18n.language === 'en' ? ["Social License to Operate", "Impact Mitigation", "Strategic Planning"] : ["Licença Social para Operar", "Mitigação de Impactos", "Planeamento Estratégico"]
    },
    {
      id: 4,
      icon: <Recycle size={32} />,
      titulo: i18n.language === 'en' ? "Solid Waste Management" : "Gestão de Resíduos Sólidos",
      desc: i18n.language === 'en' ? "Structured systems for industries and hospitals." : "Sistemas estruturados para indústrias e hospitais.",
      cor: "bg-teal-600",
      detalhes: i18n.language === 'en'
        ? "Implementation of structured waste management systems with special focus on hospitals, industries, and municipalities. Includes flow diagnostics and operational procedures."
        : "Implementação de sistemas estruturados de gestão de resíduos com especial incidência em hospitais, indústrias e municípios. Inclui diagnóstico de fluxos e procedimentos operacionais.",
      beneficios: i18n.language === 'en' ? ["Cost Reduction", "Health Risk Mitigation", "Legal Compliance"] : ["Redução de Custos", "Mitigação de Riscos Sanitários", "Conformidade Legal"]
    },
    {
      id: 5,
      icon: <Globe size={32} />,
      titulo: i18n.language === 'en' ? "Strategic ESG Consultancy" : "Consultoria ESG Estratégica",
      desc: i18n.language === 'en' ? "Integration of sustainability principles into governance." : "Integração de princípios de sustentabilidade na governação.",
      cor: "bg-green-800",
      detalhes: i18n.language === 'en'
        ? "Cross-cutting integration of ESG principles into institutional governance. Positioning the company for sustainable growth and solid reputation."
        : "Integração transversal dos princípios ESG na governação institucional. Posicionamento da empresa para crescimento sustentável e reputação sólida.",
      beneficios: i18n.language === 'en' ? ["Investor Attraction", "Corporate Reputation", "Efficiency"] : ["Atracção de Investidores", "Reputação Corporativa", "Eficiência"]
    }
  ]

  return (
    <div className="w-full bg-white dark:bg-gray-950 transition-colors duration-300 font-sans pt-40 md:pt-32 pb-24 overflow-x-hidden min-h-screen">
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6"
          >
            {t('services_title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-400"
          >
            {t('services_subtitle')}
          </motion.p>
        </div>

        {/* BENTO GRID DE SERVIÇOS */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-24">
          {servicos.map((s, idx) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedServico(s)}
              className={`cursor-pointer group relative overflow-hidden rounded-[2.5rem] p-8 transition-all hover:scale-[1.02] border border-gray-100 dark:border-gray-800 shadow-xl shadow-gray-200/50 dark:shadow-black/40 ${
                idx === 0 ? "md:col-span-4 bg-white dark:bg-gray-900" : 
                idx === 1 ? "md:col-span-2 bg-green-700 text-white" :
                idx === 2 ? "md:col-span-3 bg-white dark:bg-gray-900" :
                idx === 3 ? "md:col-span-3 bg-white dark:bg-gray-900" :
                "md:col-span-6 bg-green-900 text-white flex md:flex-row flex-col items-center gap-8"
              }`}
            >
              <div className={`${idx === 1 || idx === 4 ? "text-white" : "text-green-700 dark:text-green-400"} mb-6`}>
                {s.icon}
              </div>
              <div className={idx === 4 ? "md:flex-1" : ""}>
                <h3 className={`text-2xl font-bold mb-3 ${idx === 1 || idx === 4 ? "text-white" : "text-gray-900 dark:text-white"}`}>
                  {s.titulo}
                </h3>
                <p className={`line-clamp-2 ${idx === 1 || idx === 4 ? "text-green-50" : "text-gray-600 dark:text-gray-400"}`}>
                  {s.desc}
                </p>
              </div>
              
              <button className={`mt-6 flex items-center gap-2 font-bold text-sm uppercase tracking-widest ${idx === 1 || idx === 4 ? "text-white" : "text-green-700 dark:text-green-400"}`}>
                {t('services_details_btn')} <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA FINAL DE SERVIÇOS */}
        <div className="bg-gray-50 dark:bg-gray-900 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 border border-gray-100 dark:border-gray-800">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t('services_cta_unsure')}</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              {t('services_cta_unsure_desc')}
            </p>
          </div>
          <button className="whitespace-nowrap bg-green-700 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-green-800 transition-all flex items-center gap-3">
            <MessageCircle size={24} />
            {t('cta_whatsapp')}
          </button>
        </div>

      </div>

      {/* MODAL DE DETALHES */}
      <AnimatePresence>
        {selectedServico && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-110 flex items-center justify-center px-6"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedServico(null)}></div>
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white dark:bg-gray-900 rounded-[3rem] p-8 md:p-12 shadow-2xl transition-colors duration-300"
            >
              <button 
                onClick={() => setSelectedServico(null)}
                className="absolute top-6 right-6 p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-500 hover:text-gray-800 dark:hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="text-green-700 dark:text-green-400 mb-6">
                {selectedServico.icon}
              </div>
              <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-6 uppercase">
                {selectedServico.titulo}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                {selectedServico.detalhes}
              </p>

              <div className="space-y-4 mb-10">
                {selectedServico.beneficios.map((b, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-semibold">
                    <div className="w-5 h-5 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      <ArrowRight size={12} className="text-green-700 dark:text-green-400" />
                    </div>
                    {b}
                  </div>
                ))}
              </div>

              <button className="w-full bg-green-700 text-white py-5 rounded-2xl font-bold text-xl hover:bg-green-800 transition-all shadow-xl shadow-green-700/20">
                {t('cta_proposal_tech')}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}