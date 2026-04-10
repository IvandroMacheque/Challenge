import { useState } from 'react'
import { Link } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'
import { Leaf, Menu, X, Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t, i18n } = useTranslation()

  const closeMenu = () => setIsMobileMenuOpen(false)

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'pt' ? 'en' : 'pt'
    i18n.changeLanguage(nextLang)
  }

  return (
    <>
      <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50">
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-800/50 shadow-xl shadow-gray-200/20 dark:shadow-black/20 rounded-full px-6 py-3 flex items-center justify-between transition-colors duration-300">
          
          <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
            <Leaf className="text-green-700 dark:text-green-500" size={28} />
            <span className="text-2xl font-black text-green-900 dark:text-white tracking-tighter uppercase">ECOPLUS</span>
          </Link>
          
          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center gap-6 font-semibold text-gray-600 dark:text-gray-300">
            <Link to="/" className="hover:text-green-700 dark:hover:text-green-400 transition-colors">{t('nav_inicio')}</Link>
            <Link to="/sobre" className="hover:text-green-700 dark:hover:text-green-400 transition-colors">{t('nav_sobre')}</Link>
            <Link to="/servicos" className="hover:text-green-700 dark:hover:text-green-400 transition-colors">{t('nav_servicos')}</Link>
            
            <div className="flex items-center gap-3 pl-4 border-l border-gray-200 dark:border-gray-700">
              {/* Language Switcher */}
              <button 
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 p-2 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-green-50 dark:hover:bg-green-900/20 hover:text-green-700 transition-all font-bold text-xs uppercase"
              >
                <Globe size={18} className="text-gray-400" />
                {i18n.language === 'pt' ? 'EN' : 'PT'}
              </button>

              <ThemeToggle />
              
              <Link to="/contactos" className="bg-green-700 text-white px-6 py-2.5 rounded-full hover:bg-green-800 transition-all shadow-md hover:shadow-lg hover:scale-105">
                {t('nav_contato_btn')}
              </Link>
            </div>
          </nav>

          {/* Mobile */}
          <div className="flex items-center gap-2 md:hidden">
             <button 
                onClick={toggleLanguage}
                className="p-2 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-bold text-xs"
              >
                {i18n.language === 'pt' ? 'EN' : 'PT'}
              </button>
            <ThemeToggle />
            <button 
              className="text-green-900 dark:text-white p-2"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* MENU MOBILE */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-100 bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl flex flex-col transition-colors duration-300"
          >
            <div className="flex justify-between items-center p-8">
              <div className="flex items-center gap-2">
                <Leaf className="text-green-700 dark:text-green-500" size={28} />
                <span className="text-2xl font-black text-green-900 dark:text-white tracking-tighter">ECOPLUS</span>
              </div>
              
              <button 
                onClick={closeMenu}
                className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col items-center justify-center flex-1 gap-8 text-2xl font-bold text-gray-800 dark:text-gray-100">
              <Link to="/" onClick={closeMenu} className="hover:text-green-700 dark:hover:text-green-400 transition-colors">
                {t('nav_inicio')}
              </Link>
              <Link to="/sobre" onClick={closeMenu} className="hover:text-green-700 dark:hover:text-green-400 transition-colors">
                {t('nav_sobre')}
              </Link>
              <Link to="/servicos" onClick={closeMenu} className="hover:text-green-700 dark:hover:text-green-400 transition-colors">
                {t('nav_servicos')}
              </Link>
              <Link to="/contactos" onClick={closeMenu} className="mt-4 bg-green-700 text-white px-8 py-4 rounded-full shadow-xl">
                {t('nav_contato_btn')}
              </Link>
            </nav>
            
            <div className="p-8 text-center text-gray-500 dark:text-gray-400 font-medium">
              geral@ecoplus.co.mz
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}