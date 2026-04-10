// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function WhatsAppButton() {
  const { t, i18n } = useTranslation()
  const phoneNumber = "258877115816"
  const defaultMsg = i18n.language === 'en' 
    ? "Hello! I would like to request a technical proposal from EcoPlus."
    : "Olá! Gostaria de solicitar uma proposta técnica da EcoPlus."
    
  const message = encodeURIComponent(defaultMsg)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-100 bg-green-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center group transition-colors hover:bg-green-600"
    >
      <div className="absolute -top-12 right-0 bg-white text-gray-900 text-xs font-bold py-2 px-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-700">
        {t('cta_whatsapp')}
        <div className="absolute -bottom-1 right-5 w-2 h-2 bg-white dark:bg-gray-800 rotate-45 border-r border-b border-gray-100 dark:border-gray-700"></div>
      </div>
      
      <MessageCircle size={32} />
      
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25"></span>
    </motion.a>
  )
}
