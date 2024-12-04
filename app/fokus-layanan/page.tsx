'use client'

import { motion } from "framer-motion"
import { ArrowRight } from 'lucide-react'

export default function Fokus() {
  const expertise = [
    { id: "01", title: "Riset" },
    { id: "02", title: "Rekomendasi dan Formulasi Strategis" },
    { id: "03", title: "Data dan Analisis" },
    { id: "04", title: "AdMove/Advokasi" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="bg-black text-white min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {expertise.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="flex items-baseline"
            >
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight">
                {item.title}
              </h2>
              <span className="text-zinc-600 text-sm ml-4">{item.id}</span>
              {index % 2 === 0 && index < expertise.length - 1 && (
                <span className="text-4xl md:text-6xl lg:text-7xl mx-4 text-zinc-600">/</span>
              )}
            </motion.div>
          ))}
          
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors pt-8 group"
          >
            <a href="#" className="text-lg">
              Explore all Fokus Layanan
            </a>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

