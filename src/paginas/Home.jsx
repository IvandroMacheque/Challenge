import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck as ShieldCheckIcon, TrendingUp as TrendingUpIcon, Leaf as LeafIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Parceiros from '../componentes/Parceiros'

export default function Home() {
  const { t, i18n } = useTranslation()
  
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
    <div className="relative w-full min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300 font-sans">
      {/* 1. HERO SECTION */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-40 pb-12 px-6 overflow-hidden">
        
        <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-5xl opacity-10 dark:opacity-20 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-green-600 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-50 animate-blob"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        </div>

        <motion.div 
          className="relative z-10 max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 font-medium text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></span>
            {t('hero_tagline')}
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-[1.1] mb-6">
            {t('hero_title').split(' ').map((word, i) => word === 'conformidade' || word === 'compliance.' ? <span key={i} className="text-transparent bg-clip-text bg-linear-to-r from-green-700 to-green-500">{word} </span> : word + ' ')}
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            {t('hero_subtitle')}
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contactos" className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 bg-green-700 text-white rounded-full font-bold text-lg shadow-lg shadow-green-700/30 hover:bg-green-800 transition-colors flex items-center justify-center gap-2"
              >
                {t('hero_cta_proposal')}
                <ArrowRight size={20} />
              </motion.button>
            </Link>
            <Link to="/servicos" className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 bg-white dark:bg-gray-800 text-green-800 dark:text-green-400 border border-gray-200 dark:border-gray-700 rounded-full font-bold text-lg hover:border-green-700 dark:hover:border-green-500 hover:bg-green-50 dark:hover:bg-gray-700 transition-colors"
              >
                {t('hero_cta_services')}
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. NUMBERS / SOCIAL PROOF (Credibilidade) */}
      <section className="bg-green-900 dark:bg-green-950 py-16 px-6 transition-colors duration-300">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:divide-x divide-green-800/50 dark:divide-green-900/50">
          {[
            { number: "+20", label: t('stat_specialists') },
            { number: "ISO", label: "9001 & 14001" },
            { number: "5 Yrs", label: t('stat_market') },
            { number: "100%", label: t('stat_coverage') }
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
              <p className="text-green-300 dark:text-green-500 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Parceiros />

      {/* 3. VALUE PROPOSITION CARDS */}
      <section id="servicos" className="py-24 px-6 bg-gray-50 dark:bg-gray-900/50 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('why_title')}</h2>
            <p className="text-gray-700 dark:text-gray-400 max-w-2xl mx-auto">{t('why_subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheckIcon size={32} className="text-green-600 dark:text-green-400" />,
                title: t('feature_audit_title'),
                desc: t('feature_audit_desc')
              },
              {
                icon: <TrendingUpIcon size={32} className="text-green-600 dark:text-green-400" />,
                title: t('feature_esg_title'),
                desc: t('feature_esg_desc')
              },
              {
                icon: <LeafIcon size={32} className="text-green-600 dark:text-green-400" />,
                title: t('feature_waste_title'),
                desc: t('feature_waste_desc')
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl dark:hover:shadow-black/20 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-green-50 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mb-6 text-green-700 dark:text-green-400">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-700 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROJETOS DE IMPACTO*/}
      <section className="py-24 px-6 bg-white dark:bg-gray-950 transition-colors duration-300 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 md:flex justify-between items-end">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('impact_title')}</h2>
              <p className="text-xl text-gray-700 dark:text-gray-400">{t('impact_subtitle')}</p>
            </div>
            <Link to="/servicos" className="hidden md:flex items-center gap-2 text-green-700 dark:text-green-500 font-bold hover:gap-4 transition-all">
              {t('impact_view_all')} <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { titulo: "Restauração de Mangais", titulo_en: "Mangrove Restoration", local: "Zambézia & Sofala", img: "/images/Aquacultura.jpg" },
              { titulo: "Habitação Sustentável", titulo_en: "Sustainable Housing", local: "Niassa (Metarica, Maua)", img: "/images/mulher_na_estufa.jpg" },
              { titulo: "Projecto Escola Limpa", titulo_en: "Clean School Project", local: "Maputo, Moçambique", img: "/images/batatas.jpg" }
            ].map((proj, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-4xl aspect-square mb-6 shadow-lg">
                  <img 
                    src={proj.img} 
                    alt={proj.titulo} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-green-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8 backdrop-blur-[2px]">
                    <span className="text-white/80 text-sm font-bold uppercase tracking-widest mb-1">{proj.local}</span>
                    <h4 className="text-white text-2xl font-black leading-tight">
                      {i18n.language === 'en' ? proj.titulo_en : proj.titulo}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA BANNER */}
      <section id="contactos" className="py-20 px-6 bg-white dark:bg-gray-950 transition-colors duration-300">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-linear-to-br from-green-800 to-green-600 rounded-[2.5rem] p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('cta_banner_title')}</h2>
            <p className="text-green-100 text-lg mb-10 max-w-2xl mx-auto">
              {t('cta_banner_text')}
            </p>
            <a 
              href="https://wa.me/258877115816" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-green-800 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                {t('cta_banner_btn')}
              </motion.button>
            </a>
          </div>
        </motion.div>
      </section>

    </div>
  )
}