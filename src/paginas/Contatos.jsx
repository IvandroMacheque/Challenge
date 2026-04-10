import { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'
import { Send, MapPin, Mail, Phone, CheckCircle2, ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Contatos() {
  const [step, setStep] = useState(1)
  const [isSent, setIsSent] = useState(false)
  const { t, i18n } = useTranslation()

  const entryVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  const formVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
  }

  const handleNext = () => setStep(step + 1)
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSent(true)
  }

  return (
    <div className="w-full bg-white dark:bg-gray-950 min-h-screen overflow-x-hidden font-sans pt-44 md:pt-32 pb-24 transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
        
        {/* COLUNA ESQUERDA: INFOS E IMPACTO */}
        <motion.div 
          initial="hidden" animate="visible" variants={entryVariant}
          className="space-y-12"
        >
          <div>
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
              {t('contact_title').split(' ').map((word, i) => word.toLowerCase() === 'sucesso.' || word.toLowerCase() === 'success.' ? <span key={i} className="text-green-700 dark:text-green-500">{word} </span> : word + ' ')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              {t('contact_subtitle')}
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-50 dark:bg-green-900/30 rounded-2xl flex items-center justify-center text-green-700 dark:text-green-400 shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white text-lg">{t('contact_hq')}</h4>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Rua+da+Frente+de+Liberta%C3%A7%C3%A3o+de+Mo%C3%A7ambique+155+Sommershield+Maputo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-700 dark:hover:text-green-400 transition-colors"
                >
                  Rua da Frente de Libertação de Moçambique, 155, Sommershield, Maputo
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-50 dark:bg-green-900/30 rounded-2xl flex items-center justify-center text-green-700 dark:text-green-400 shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white text-lg">{t('contact_email')}</h4>
                <a 
                  href="mailto:geral@ecoplus.co.mz"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-700 dark:hover:text-green-400 transition-colors"
                >
                  geral@ecoplus.co.mz
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-50 dark:bg-green-900/30 rounded-2xl flex items-center justify-center text-green-700 dark:text-green-400 shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white text-lg">{t('contact_support')}</h4>
                <a 
                  href="https://wa.me/258877115816"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-700 dark:hover:text-green-400 transition-colors"
                >
                  +258 87 711 5816
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* COLUNA DIREITA: FORMULÁRIO STEPPER */}
        <motion.div 
          initial="hidden" animate="visible" variants={entryVariant}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="bg-gray-50 dark:bg-gray-900 p-8 md:p-12 rounded-[3rem] border border-gray-100 dark:border-gray-800 shadow-2xl shadow-gray-200/50 dark:shadow-black/40"
        >
          {!isSent ? (
            <>
              {/* Stepper Progress */}
              <div className="flex gap-2 mb-10">
                {[1, 2, 3].map(i => (
                  <div 
                    key={i} 
                    className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${step >= i ? 'bg-green-600' : 'bg-gray-200 dark:bg-gray-800'}`}
                  />
                ))}
              </div>

              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div 
                    key="step1" variants={formVariants} initial="hidden" animate="visible" exit="exit"
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{t('contact_step1_title')}</h3>
                    <input type="text" placeholder={i18n.language === 'en' ? "Full Name" : "Nome Completo"} className="w-full bg-white dark:bg-gray-800 border-none rounded-2xl p-5 focus:ring-2 focus:ring-green-600 outline-none dark:text-white" />
                    <input type="email" placeholder={i18n.language === 'en' ? "Work Email" : "E-mail de Trabalho"} className="w-full bg-white dark:bg-gray-800 border-none rounded-2xl p-5 focus:ring-2 focus:ring-green-600 outline-none dark:text-white" />
                    <button onClick={handleNext} className="w-full bg-green-700 text-white rounded-2xl p-5 font-bold text-lg flex items-center justify-center gap-2 hover:bg-green-800 transition-all">
                      {t('contact_btn_continue')} <ArrowRight size={20} />
                    </button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div 
                    key="step2" variants={formVariants} initial="hidden" animate="visible" exit="exit"
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{t('contact_step2_title')}</h3>
                    <input type="text" placeholder={i18n.language === 'en' ? "Company Name" : "Nome da Empresa"} className="w-full bg-white dark:bg-gray-800 border-none rounded-2xl p-5 focus:ring-2 focus:ring-green-600 outline-none dark:text-white" />
                    <select className="w-full bg-white dark:bg-gray-800 border-none rounded-2xl p-5 focus:ring-2 focus:ring-green-600 outline-none dark:text-white appearance-none">
                      <option>{i18n.language === 'en' ? "Industry Type" : "Tipo de Indústria"}</option>
                      <option>{i18n.language === 'en' ? "Mining" : "Mineração"}</option>
                      <option>{i18n.language === 'en' ? "Energy" : "Energia"}</option>
                      <option>{i18n.language === 'en' ? "Agriculture" : "Agricultura"}</option>
                      <option>{i18n.language === 'en' ? "Others" : "Outros"}</option>
                    </select>
                    <button onClick={handleNext} className="w-full bg-green-700 text-white rounded-2xl p-5 font-bold text-lg flex items-center justify-center gap-2 hover:bg-green-800 transition-all">
                      {t('contact_btn_continue')} <ArrowRight size={20} />
                    </button>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div 
                    key="step3" variants={formVariants} initial="hidden" animate="visible" exit="exit"
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{t('contact_step3_title')}</h3>
                    <textarea rows="4" placeholder={i18n.language === 'en' ? "Describe your needs briefly..." : "Descreva brevemente sua necessidade..."} className="w-full bg-white dark:bg-gray-800 border-none rounded-2xl p-5 focus:ring-2 focus:ring-green-600 outline-none dark:text-white"></textarea>
                    <button onClick={handleSubmit} className="w-full bg-green-700 text-white rounded-2xl p-5 font-bold text-lg flex items-center justify-center gap-2 hover:bg-green-800 transition-all">
                      {t('contact_btn_send')} <Send size={20} />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          ) : (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              className="text-center py-12"
            >
              <div className="w-24 h-24 bg-green-100 dark:bg-green-950 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                <CheckCircle2 size={48} />
              </div>
              <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-4">{t('contact_success_title')}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                {t('contact_success_desc')}
              </p>
              <button 
                onClick={() => { setIsSent(false); setStep(1); }}
                className="text-green-700 dark:text-green-400 font-bold hover:underline"
              >
                {t('contact_back_form')}
              </button>
            </motion.div>
          )}
        </motion.div>

      </div>

    </div>
  )
}