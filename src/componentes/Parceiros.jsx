// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

export default function Parceiros() {
  const parceiros = [
    { nome: "UEM", logo: "/images/uem.png" },
    { nome: "SST", logo: "/images/sst.png" },
    { nome: "FNDS", logo: "/images/fnds.jpg" },
    { nome: "MTADR", logo: "/images/mtadr.jpg" },
    { nome: "ESPI", logo: "/images/espi.png" }
  ]

  return (
    <section className="py-16 bg-white dark:bg-gray-950 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] mb-12">
          Organizações que confiam no nosso rigor técnico
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-500">
          {parceiros.map((p, idx) => (
            <motion.img 
              key={idx}
              src={p.logo} 
              alt={p.nome}
              className="h-12 md:h-16 w-auto object-contain"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
