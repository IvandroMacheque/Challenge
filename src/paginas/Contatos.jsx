import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Mail, Phone, ArrowRight, ArrowLeft, CheckCircle2, Building2 } from 'lucide-react'

export default function Contactos() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    setor: '',
    servico: '',
    nome: '',
    email: '',
    telefone: ''
  })

  const nextStep = () => setStep(prev => prev + 1)
  const prevStep = () => setStep(prev => prev - 1)

  // Animações de transição entre os passos
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
  }

  // Variante para a entrada das colunas principais
  const entryVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  return (
    <div className="w-full bg-white min-h-screen overflow-x-hidden font-sans pt-44 md:pt-32 pb-24">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
        
        {/* COLUNA ESQUERDA: Dados Reais do Portfólio */}
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={entryVariant}
        >
          <span className="text-green-700 font-bold tracking-widest uppercase text-sm mb-4 block">
            Canais de Atendimento
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
            Solicite uma <br />
            <span className="text-green-700">proposta técnica.</span>
          </h1>
          <p className="text-lg text-gray-600 mb-12 max-w-lg">
            Nossa equipa multidisciplinar está pronta para atuar em projetos de alta complexidade em todo o território nacional.
          </p>

          <div className="space-y-8">
            {/* Endereço Físico */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 bg-green-50 text-green-700 rounded-2xl flex items-center justify-center shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Endereço</h4>
                <p className="text-gray-600 mt-1">Rua da Frente de Libertação de Moçambique, 155<br/>Sommershield, Maputo</p>
              </div>
            </div>

            {/* Email Corporativo */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 bg-green-50 text-green-700 rounded-2xl flex items-center justify-center shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">E-mail Oficial</h4>
                <p className="text-gray-600 mt-1">geral@ecoplus.co.mz</p>
              </div>
            </div>

            {/* Contactos Telefónicos */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 bg-green-50 text-green-700 rounded-2xl flex items-center justify-center shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Telefones</h4>
                <p className="text-gray-600 mt-1">+258 87 711 5816 | +258 83 32 80 508</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* COLUNA DIREITA: Formulário Inteligente */}
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={entryVariant}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="bg-gray-50 p-8 md:p-12 rounded-[3rem] border border-gray-100 shadow-2xl shadow-gray-200/50"
        >
          {/* Indicador de Progresso */}
          <div className="flex gap-2 mb-10">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`h-1.5 flex-1 rounded-full transition-all ${step >= i ? 'bg-green-700' : 'bg-gray-200'}`} />
            ))}
          </div>

          <div className="min-h-[350px]">
            <AnimatePresence mode="wait">
              
              {/* PASSO 1: Seleção de Setor */}
              {step === 1 && (
                <motion.div key="step1" variants={formVariants} initial="hidden" animate="visible" exit="exit">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Em qual setor a sua organização atua?</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {['Indústria e Fabrico', 'Agronegócio', 'Saúde e Hospitalar', 'Infraestruturas', 'Instituição Pública'].map((setor) => (
                      <button 
                        key={setor}
                        onClick={() => { setFormData({...formData, setor}); nextStep() }}
                        className="w-full text-left p-4 rounded-2xl border-2 border-gray-100 bg-white hover:border-green-600 hover:bg-green-50 transition-all font-semibold text-gray-700 flex justify-between items-center group"
                      >
                        {setor}
                        <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-all" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* PASSO 2: Necessidade Técnica */}
              {step === 2 && (
                <motion.div key="step2" variants={formVariants} initial="hidden" animate="visible" exit="exit">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Qual serviço técnico procura?</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {['Auditoria Ambiental', 'Avaliação de Impacto (AIAS)', 'Gestão de Resíduos', 'Consultoria ESG', 'Conformidade Legal'].map((servico) => (
                      <button 
                        key={servico}
                        onClick={() => { setFormData({...formData, servico}); nextStep() }}
                        className="w-full text-left p-4 rounded-2xl border-2 border-gray-100 bg-white hover:border-green-600 hover:bg-green-50 transition-all font-semibold text-gray-700"
                      >
                        {servico}
                      </button>
                    ))}
                  </div>
                  <button onClick={prevStep} className="mt-6 text-gray-400 font-bold flex items-center gap-2 hover:text-gray-600">
                    <ArrowLeft size={18} /> Voltar
                  </button>
                </motion.div>
              )}

              {/* PASSO 3: Identificação Corporativa */}
              {step === 3 && (
                <motion.div key="step3" variants={formVariants} initial="hidden" animate="visible" exit="exit" className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Dados para envio da Proposta</h3>
                  
                  <div className="space-y-3">
                    <input type="text" placeholder="Nome Completo" className="w-full p-4 rounded-2xl bg-white border-2 border-gray-100 focus:border-green-600 outline-none transition-all" />
                    <input type="email" placeholder="E-mail Corporativo" className="w-full p-4 rounded-2xl bg-white border-2 border-gray-100 focus:border-green-600 outline-none transition-all" />
                    <input type="tel" placeholder="Telefone / WhatsApp" className="w-full p-4 rounded-2xl bg-white border-2 border-gray-100 focus:border-green-600 outline-none transition-all" />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button onClick={prevStep} className="p-4 rounded-2xl border-2 border-gray-100 text-gray-400 hover:bg-white transition-all">
                      <ArrowLeft size={24} />
                    </button>
                    <button onClick={nextStep} className="flex-1 bg-green-700 text-white p-4 rounded-2xl font-bold hover:bg-green-800 transition-all shadow-lg shadow-green-700/20">
                      Solicitar Proposta Técnica
                    </button>
                  </div>
                </motion.div>
              )}

              {/* PASSO 4: Finalização Realista */}
              {step === 4 && (
                <motion.div key="step4" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }} className="text-center py-10">
                  <div className="w-20 h-20 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Pedido Enviado</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Recebemos o seu interesse em <strong>{formData.servico}</strong> para o setor de <strong>{formData.setor}</strong>. 
                    Nossa equipa técnica entrará em contacto em breve para alinhar os detalhes.
                  </p>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </motion.div>
      </div>

    </div>
  )
}