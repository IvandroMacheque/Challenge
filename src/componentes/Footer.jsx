import React from 'react'
import { Link } from 'react-router-dom'
import { Leaf, Mail, MapPin, Phone } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t, i18n } = useTranslation()

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Marca e Missão */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <Leaf className="text-green-500" size={32} />
              <span className="text-2xl font-black tracking-tighter uppercase">ECOPLUS</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              {t('footer_desc')}
            </p>
            <div className="flex gap-4">
              {/* LinkedIn SVG */}
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <svg size={20} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              {/* Facebook SVG */}
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <svg size={20} className="w-5 h-5 fill-current" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
              </a>
              {/* Instagram SVG */}
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <svg size={20} className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          {/* Navegação Rápida */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-green-600 pl-4">{t('footer_nav')}</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/" className="hover:text-green-500 transition-colors">{t('nav_inicio')}</Link></li>
              <li><Link to="/sobre" className="hover:text-green-500 transition-colors">{t('nav_sobre')}</Link></li>
              <li><Link to="/servicos" className="hover:text-green-500 transition-colors">{t('nav_servicos')}</Link></li>
              <li><Link to="/contactos" className="hover:text-green-500 transition-colors">{t('nav_contato_btn')}</Link></li>
            </ul>
          </div>

          {/* Contactos */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-green-600 pl-4">{t('footer_contacts')}</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-green-500 shrink-0" size={20} />
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Rua+da+Frente+de+Liberta%C3%A7%C3%A3o+de+Mo%C3%A7ambique+155+Sommershield+Maputo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-green-500 transition-colors text-sm"
                >
                  Rua da Frente de Libertação de Moçambique, 155, Sommershield, Maputo
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="text-green-500 shrink-0" size={20} />
                <a href="mailto:geral@ecoplus.co.mz" className="hover:text-green-500 transition-colors">
                  geral@ecoplus.co.mz
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="text-green-500 shrink-0" size={20} />
                <a href="https://wa.me/258877115816" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">
                  +258 87 711 5816
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-green-600 pl-4">{t('footer_newsletter')}</h4>
            <p className="text-sm text-gray-400 mb-4">{t('footer_newsletter_text')}</p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="E-mail" 
                className="w-full bg-gray-800 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-green-600 outline-none" 
              />
              <button className="w-full bg-green-700 hover:bg-green-800 py-3 rounded-xl font-bold transition-colors">
                {i18n.language === 'en' ? 'Subscribe' : 'Inscrever'}
              </button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} EcoPlus Consultoria & Serviços. {t('footer_rights')}</p>
        </div>
      </div>
    </footer>
  )
}
