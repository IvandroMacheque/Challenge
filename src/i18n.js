import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
  pt: {
    translation: {
      // Header & Global
      "nav_inicio": "Início",
      "nav_sobre": "Sobre Nós",
      "nav_servicos": "Serviços",
      "nav_contato_btn": "Fale Connosco",
      "cta_proposal_tech": "Solicitar Proposta Técnica",
      "cta_whatsapp": "Falar com um Especialista",
      "view_all_projects": "Ver Todos os Projetos",
      
      // Hero
      "hero_tagline": "Consultoria Técnica e Ambiental em Moçambique",
      "hero_title": "Evite riscos legais e garanta a conformidade do seu negócio.",
      "hero_subtitle": "Transformamos exigências regulatórias em oportunidades estratégicas. Auditoria, Gestão de Resíduos e práticas ESG com quem entende do mercado nacional.",
      "hero_cta_proposal": "Solicitar Proposta Técnica",
      "hero_cta_services": "Nossos Serviços",
      
      // Home Stats
      "stat_specialists": "Especialistas",
      "stat_market": "De Mercado",
      "stat_coverage": "Cobertura Nacional",
      
      // Why Us
      "why_title": "Por que as empresas escolhem a EcoPlus?",
      "why_subtitle": "Não entregamos apenas relatórios, entregamos segurança jurídica e eficiência operacional.",
      "feature_audit_title": "Risco Zero em Fiscalizações",
      "feature_audit_desc": "Auditorias rigorosas para garantir que sua empresa cumpra 100% da legislação ambiental moçambicana.",
      "feature_esg_title": "ESG como Vantagem Competitiva",
      "feature_esg_desc": "Implementamos práticas sustentáveis que atraem investidores e melhoram a reputação da sua marca.",
      "feature_waste_title": "Gestão Inteligente de Resíduos",
      "feature_waste_desc": "Redução de custos operacionais e mitigação de riscos sanitários para indústrias e hospitais.",
      
      // Impact
      "impact_title": "Impacto Real no Terreno",
      "impact_subtitle": "Veja como transformamos operações em exemplos de agronegócio sustentável.",
      "impact_view_all": "Ver Todos os Projetos",
      
      // CTA Banner
      "cta_banner_title": "Pronto para blindar sua empresa?",
      "cta_banner_text": "Pare de adiar a regularização ambiental. Fale com um de nossos especialistas hoje e descubra o plano ideal para o seu negócio.",
      "cta_banner_btn": "Falar com um Especialista Agora",

      // Sobre Page
      "about_hero_title": "Sustentabilidade levada a sério.",
      "about_hero_desc": "A EcoPlus consolidou a sua presença como parceira técnica de referência para organizações públicas e privadas que procuram otimizar processos operacionais e estruturar modelos de gestão sustentáveis.",
      "about_mission": "Nossa Missão",
      "about_mission_desc": "Prestar serviços técnicos especializados que integrem sustentabilidade, eficiência operacional e governação estratégica, promovendo conformidade regulatória e geração de valor empresarial.",
      "about_vision": "Nossa Visão",
      "about_vision_desc": "Ser referência nacional em consultoria ESG e gestão ambiental aplicada, reconhecida pela excelência técnica, impacto real e capacidade de transformar riscos em oportunidades estratégicas.",
      "about_values_title": "Os Princípios que nos Guiam",
      "about_team_title": "Liderança Especializada",
      "about_team_subtitle": "Rigor técnico e cobertura territorial alargada.",
      "about_experience_title": "Experiência e Projetos Realizados",
      "about_methodology_title": "Metodologia Estruturada",
      "about_methodology_subtitle": "Um processo de 5 fases para transformar exigências regulatórias em oportunidades.",
      
      // Servicos Page
      "services_title": "Serviços Técnicos",
      "services_subtitle": "Soluções especializadas para garantir a conformidade regulatória e a eficiência sustentável do seu negócio em Moçambique.",
      "services_cta_unsure": "Não sabe qual serviço precisa?",
      "services_cta_unsure_desc": "Fale com nossa equipa técnica. Avaliamos a situação da sua empresa e indicamos o caminho mais seguro para a conformidade.",
      "services_details_btn": "Ver Detalhes Técnicos",
      "services_close": "Fechar",
      
      // Contatos Page
      "contact_title": "Vamos estruturar o seu sucesso.",
      "contact_subtitle": "Estamos prontos para analisar o seu cenário e apresentar uma proposta técnica robusta e personalizada.",
      "contact_hq": "Nossa Sede",
      "contact_email": "E-mail Técnico",
      "contact_support": "Atendimento",
      "contact_step1_title": "Quem é você?",
      "contact_step2_title": "Sobre a empresa",
      "contact_step3_title": "Em que podemos ajudar?",
      "contact_btn_continue": "Continuar",
      "contact_btn_send": "Solicitar Proposta Técnica",
      "contact_success_title": "Pedido Recebido!",
      "contact_success_desc": "Nossa equipa técnica analisará as suas informações e entrará em contacto dentro das próximas 24 horas.",
      "contact_back_form": "Voltar ao formulário",

      // Footer
      "footer_desc": "Líder em consultoria técnica e ambiental em Moçambique. Transformamos desafios regulatórios em modelos de negócio sustentáveis e lucrativos.",
      "footer_nav": "Navegação",
      "footer_contacts": "Contactos",
      "footer_newsletter": "Subscreva-se",
      "footer_newsletter_text": "Fique por dentro das novidades da legislação ambiental em Moçambique.",
      "footer_rights": "Todos os direitos reservados."
    }
  },
  en: {
    translation: {
      // Header & Global
      "nav_inicio": "Home",
      "nav_sobre": "About Us",
      "nav_servicos": "Services",
      "nav_contato_btn": "Contact Us",
      "cta_proposal_tech": "Request Technical Proposal",
      "cta_whatsapp": "Talk to a Specialist",
      "view_all_projects": "View All Projects",
      
      // Hero
      "hero_tagline": "Technical and Environmental Consultancy in Mozambique",
      "hero_title": "Avoid legal risks and ensure your business compliance.",
      "hero_subtitle": "We transform regulatory requirements into strategic opportunities. Auditing, Waste Management and ESG practices with those who understand the local market.",
      "hero_cta_proposal": "Request Technical Proposal",
      "hero_cta_services": "Our Services",
      
      // Home Stats
      "stat_specialists": "Specialists",
      "stat_market": "In the Market",
      "stat_coverage": "National Coverage",
      
      // Why Us
      "why_title": "Why do companies choose EcoPlus?",
      "why_subtitle": "We don't just deliver reports, we deliver legal security and operational efficiency.",
      "feature_audit_title": "Zero Risk in Inspections",
      "feature_audit_desc": "Rigorous audits to ensure your company complies 100% with Mozambican environmental legislation.",
      "feature_esg_title": "ESG as a Competitive Advantage",
      "feature_esg_desc": "We implement sustainable practices that attract investors and improve your brand reputation.",
      "feature_waste_title": "Smart Waste Management",
      "feature_waste_desc": "Operational cost reduction and health risk mitigation for industries and hospitals.",
      
      // Impact
      "impact_title": "Real Impact on the Ground",
      "impact_subtitle": "See how we transform operations into examples of sustainable agribusiness.",
      "impact_view_all": "View All Projects",
      
      // CTA Banner
      "cta_banner_title": "Ready to protect your company?",
      "cta_banner_text": "Stop postponing environmental regularization. Talk to one of our specialists today and discover the ideal plan for your business.",
      "cta_banner_btn": "Talk to a Specialist Now",

      // Sobre Page
      "about_hero_title": "Sustainability taken seriously.",
      "about_hero_desc": "EcoPlus has consolidated its presence as a reference technical partner for public and private organizations seeking to optimize operational processes and structure sustainable management models.",
      "about_mission": "Our Mission",
      "about_mission_desc": "To provide specialized technical services that integrate sustainability, operational efficiency and strategic governance, promoting regulatory compliance and corporate value generation.",
      "about_vision": "Our Vision",
      "about_vision_desc": "To be a national reference in ESG consultancy and applied environmental management, recognized for technical excellence, real impact and the ability to transform risks into strategic opportunities.",
      "about_values_title": "The Principles that Guide Us",
      "about_team_title": "Specialized Leadership",
      "about_team_subtitle": "Technical rigor and broad territorial coverage.",
      "about_experience_title": "Project Experience and Results",
      "about_methodology_title": "Structured Methodology",
      "about_methodology_subtitle": "A 5-phase process to transform regulatory requirements into opportunities.",

      // Servicos Page
      "services_title": "Technical Services",
      "services_subtitle": "Specialized solutions to ensure regulatory compliance and sustainable efficiency of your business in Mozambique.",
      "services_cta_unsure": "Don't know which service you need?",
      "services_cta_unsure_desc": "Talk to our technical team. We evaluate your company's situation and indicate the safest path to compliance.",
      "services_details_btn": "View Technical Details",
      "services_close": "Close",

      // Contatos Page
      "contact_title": "Let's structure your success.",
      "contact_subtitle": "We are ready to analyze your scenario and present a robust and personalized technical proposal.",
      "contact_hq": "Our Headquarters",
      "contact_email": "Technical E-mail",
      "contact_support": "Customer Support",
      "contact_step1_title": "Who are you?",
      "contact_step2_title": "About the company",
      "contact_step3_title": "How can we help?",
      "contact_btn_continue": "Continue",
      "contact_btn_send": "Request Technical Proposal",
      "contact_success_title": "Request Received!",
      "contact_success_desc": "Our technical team will analyze your information and get in touch within the next 24 hours.",
      "contact_back_form": "Back to form",

      // Footer
      "footer_desc": "Leader in technical and environmental consultancy in Mozambique. We transform regulatory challenges into sustainable and profitable business models.",
      "footer_nav": "Navigation",
      "footer_contacts": "Contacts",
      "footer_newsletter": "Subscribe",
      "footer_newsletter_text": "Stay up to date with environmental legislation news in Mozambique.",
      "footer_rights": "All rights reserved."
    }
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
