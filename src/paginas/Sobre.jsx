import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { Target, Eye, Shield, CheckCircle2, ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function Sobre() {
  const { t, i18n } = useTranslation()
  
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  const valores = i18n.language === 'en' ? [
    "Technical Rigor",
    "Ethics and Transparency",
    "Environmental and Social Responsibility",
    "Results Orientation",
    "Applied Innovation",
    "Professionalism"
  ] : [
    "Rigor técnico",
    "Ética e transparência",
    "Responsabilidade ambiental e social",
    "Orientação para resultados",
    "Inovação aplicada",
    "Profissionalismo"
  ]

  const metodologia = [
    { num: "01", 
      titulo: i18n.language === 'en' ? "Initial Technical Assessment" : "Avaliação Técnica Inicial", 
      desc: i18n.language === 'en' ? "Complete mapping of risks and legal requirements." : "Mapeamento completo dos riscos e exigências legais." 
    },
    { num: "02", 
      titulo: i18n.language === 'en' ? "Planning and Scoping" : "Planeamento e Escopo", 
      desc: i18n.language === 'en' ? "Definition of clear goals and regularization deadlines." : "Definição de metas claras e prazos de regularização." 
    },
    { num: "03", 
      titulo: i18n.language === 'en' ? "Technical Implementation" : "Implementação Técnica", 
      desc: i18n.language === 'en' ? "Execution of improvements and adaptation to ESG standards." : "Execução das melhorias e adequação aos padrões ESG." 
    },
    { num: "04", 
      titulo: i18n.language === 'en' ? "Monitoring and Evaluation" : "Monitoria e Avaliação", 
      desc: i18n.language === 'en' ? "Continuous monitoring to ensure compliance." : "Acompanhamento contínuo para garantir conformidade." 
    },
    { num: "05", 
      titulo: i18n.language === 'en' ? "Improvement Report" : "Relatório de Melhoria", 
      desc: i18n.language === 'en' ? "Delivery of results and sustainability plan." : "Entrega de resultados e plano de sustentabilidade." 
    }
  ]

  const projetosRealizados = i18n.language === 'en' ? [
    "National Environmental Education Strategy",
    "Sustainable Housing Design in Niassa",
    "Mangrove and Seagrass Restoration",
    "National Climate Literacy Mapping"
  ] : [
    "Estratégia Nacional de Educação Ambiental",
    "Desenho de Habitação Sustentável em Niassa",
    "Restauração de Mangais e Ervas Marinhas",
    "Mapeamento de Literacia Climática Nacional"
  ]

  return (
    <div className="w-full bg-white dark:bg-gray-950 transition-colors duration-300 font-sans pt-40 md:pt-24 overflow-x-hidden">

      {/* 1. HERO SECTION */}
      <section className="relative px-6 py-16 md:py-24 max-w-6xl mx-auto overflow-hidden">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6 wrap-break-word">
              {t('about_hero_title').split(' ').map((word, i) => word.toLowerCase() === 'sustentabilidade' || word.toLowerCase() === 'sustainability' ? <span key={i} className="text-green-700 dark:text-green-500">{word} </span> : word + ' ')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              {t('about_hero_desc')}
            </p>
          </div>
          <div className="relative">
             <div className="absolute inset-0 bg-green-100 dark:bg-green-900/20 rounded-4xl transform translate-y-4 md:translate-x-4"></div>
             <img 
               src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800" 
               alt="Equipa EcoPlus" 
               className="relative rounded-4xl shadow-xl w-full object-cover h-[300px] md:h-[400px]"
             />
          </div>
        </motion.div>
      </section>

      {/* 2. MISSÃO E VISÃO  */}
      <section className="bg-green-950 dark:bg-black text-white py-24 px-6 relative overflow-hidden transition-colors duration-300">
        <div className="hidden md:block absolute top-0 right-0 w-[500px] h-[500px] bg-green-600/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 relative z-10">
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}
            className="bg-green-900/50 dark:bg-gray-900/50 p-10 rounded-4xl border border-green-800 dark:border-gray-800 backdrop-blur-sm"
          >
            <Target size={40} className="text-green-400 mb-6" />
            <h2 className="text-3xl font-bold mb-4">{t('about_mission')}</h2>
            <p className="text-green-100 dark:text-gray-300 text-lg leading-relaxed">
              {t('about_mission_desc')}
            </p>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}
            className="bg-green-900/50 dark:bg-gray-900/50 p-10 rounded-4xl border border-green-800 dark:border-gray-800 backdrop-blur-sm md:translate-y-12"
          >
            <Eye size={40} className="text-green-400 mb-6" />
            <h2 className="text-3xl font-bold mb-4">{t('about_vision')}</h2>
            <p className="text-green-100 dark:text-gray-300 text-lg leading-relaxed">
              {t('about_vision_desc')}
            </p>
          </motion.div>

        </div>
      </section>

      {/* 3. OS VALORES */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-gray-900/50 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <Shield size={48} className="text-green-700 dark:text-green-500 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">{t('about_values_title')}</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {valores.map((valor, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center gap-3 text-left transition-colors"
              >
                <CheckCircle2 className="text-green-600 dark:text-green-400 shrink-0" size={24} />
                <span className="font-semibold text-gray-800 dark:text-gray-200">{valor}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. A EQUIPA */}
      <section className="py-24 px-6 bg-white dark:bg-gray-950 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('about_team_title')}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">{t('about_team_subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { nome: "Sandra M.", cargo: i18n.language === 'en' ? "Executive Director" : "Diretora Executiva", img: "/images/Sandra.jpg" },
              { nome: "Leocadia V.", cargo: i18n.language === 'en' ? "Senior Environmental Consultant" : "Consultora Ambiental Sénior", img: "/images/Leocadia.jpg" },
              { nome: i18n.language === 'en' ? "Mozambique Team" : "Equipa Moçambique", cargo: i18n.language === 'en' ? "+20 Specialized Employees" : "+20 Colaboradores Especializados", img: "/images/mulher_de_negocio.jpg" }
            ].map((membro, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-[2.5rem] bg-gray-100 dark:bg-gray-800 aspect-4/5 mb-6">
                  <img 
                    src={membro.img} 
                    alt={membro.nome} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-green-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <p className="text-white text-sm font-medium">
                      {i18n.language === 'en' 
                        ? "Leading regulatory impact and sustainability projects throughout the national territory." 
                        : "Liderando projetos de impacto regulatório e sustentabilidade em todo o território nacional."}
                    </p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{membro.nome}</h3>
                <p className="text-green-700 dark:text-green-500 font-semibold">{membro.cargo}</p>
              </motion.div>
            ))}
          </div>

          {/* Experiência e Projetos */}
          <div className="mt-24 p-10 bg-green-50 dark:bg-green-950/20 rounded-[3rem] border border-green-100 dark:border-green-900 transition-colors">
            <h3 className="text-2xl font-bold text-green-950 dark:text-white mb-8 text-center">{t('about_experience_title')}</h3>
            <div className="grid md:grid-cols-2 gap-8 text-green-900 dark:text-green-300">
               <ul className="space-y-4">
                 {projetosRealizados.slice(0, 2).map((p, i) => (
                   <li key={i} className="flex items-center gap-3">
                     <div className="w-2 h-2 rounded-full bg-green-600"></div>
                     <span>{p}</span>
                   </li>
                 ))}
               </ul>
               <ul className="space-y-4">
                 {projetosRealizados.slice(2, 4).map((p, i) => (
                   <li key={i} className="flex items-center gap-3">
                     <div className="w-2 h-2 rounded-full bg-green-600"></div>
                     <span>{p}</span>
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. METODOLOGIA */}
      <section className="relative py-24 px-6 bg-white dark:bg-gray-950 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 md:flex justify-between items-end">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('about_methodology_title')}</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">{t('about_methodology_subtitle')}</p>
            </div>
            <Link to="/contactos" className="hidden md:flex mt-6 items-center gap-2 text-green-700 dark:text-green-500 font-bold hover:gap-4 transition-all uppercase text-sm tracking-widest">
              {t('cta_proposal_tech')} <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {metodologia.map((fase, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.15 }}
                className="group relative pt-8"
              >
                {/* Linha conectora */}
                {idx !== 4 && <div className="hidden md:block absolute top-12 ml-6 w-full h-[2px] bg-gray-100 dark:bg-gray-800"></div>}
                
                <div className="relative z-10 w-16 h-16 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-2xl flex items-center justify-center text-2xl font-black mb-6 group-hover:bg-green-700 group-hover:text-white transition-colors border border-green-100 dark:border-green-800">
                  {fase.num}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 pr-4">{fase.titulo}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed pr-4">{fase.desc}</p>
              </motion.div>
            ))}
          </div>

          <Link to="/contactos" className="md:hidden mt-12 w-full flex justify-center items-center gap-2 text-green-700 dark:text-green-400 font-bold bg-green-50 dark:bg-green-900/30 py-4 rounded-xl">
            {t('cta_proposal_tech')} <ArrowRight size={20} />
          </Link>
        </div>
      </section>

    </div>
  )
}