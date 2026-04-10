import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'
import { Leaf, Menu, X } from 'lucide-react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const closeMenu = () => setIsMobileMenuOpen(false)

  return (
    <>
      <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50">
        <div className="bg-white/80 backdrop-blur-lg border border-gray-200/50 shadow-xl shadow-gray-200/20 rounded-full px-6 py-3 flex items-center justify-between">
          
          <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
            <Leaf className="text-green-700" size={28} />
            <span className="text-2xl font-black text-green-900 tracking-tighter">ECOPLUS</span>
          </Link>
          
          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center gap-8 font-semibold text-gray-600">
            <Link to="/" className="hover:text-green-700 transition-colors">Início</Link>
            <Link to="/sobre" className="hover:text-green-700 transition-colors">Sobre Nós</Link>
            <Link to="/servicos" className="hover:text-green-700 transition-colors">Serviços</Link>
            <Link to="/contactos" className="bg-green-700 text-white px-6 py-2.5 rounded-full hover:bg-green-800 transition-all shadow-md hover:shadow-lg hover:scale-105">
              Fale Connosco
            </Link>
          </nav>

          {/* Botão Hambúrguer Mobile */}
          <button 
            className="md:hidden text-green-900 p-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
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
            className="fixed inset-0 z-100 bg-white/95 backdrop-blur-xl flex flex-col"
          >
            <div className="flex justify-between items-center p-8">
              <div className="flex items-center gap-2">
                <Leaf className="text-green-700" size={28} />
                <span className="text-2xl font-black text-green-900 tracking-tighter">ECOPLUS</span>
              </div>
              
              <button 
                onClick={closeMenu}
                className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col items-center justify-center flex-1 gap-8 text-2xl font-bold text-gray-800">
              <Link to="/" onClick={closeMenu} className="hover:text-green-700 transition-colors">
                Início
              </Link>
              <Link to="/sobre" onClick={closeMenu} className="hover:text-green-700 transition-colors">
                Sobre Nós
              </Link>
              <Link to="/servicos" onClick={closeMenu} className="hover:text-green-700 transition-colors">
                Serviços
              </Link>
              <Link to="/contactos" onClick={closeMenu} className="mt-4 bg-green-700 text-white px-8 py-4 rounded-full shadow-xl">
                Fale Connosco
              </Link>
            </nav>
            
            <div className="p-8 text-center text-gray-500 font-medium">
              geral@ecoplus.co.mz
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}