import React from 'react'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <div className="relative pt-20 pb-32 flex content-center items-center justify-center min-h-screen">
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          EMPLOYEE MANAGEMENT SYSTEM
        </h1>
        <h2 className="text-xl md:text-3xl text-white mb-8">
          SMART EMPLOYEE MANAGEMENT WITH IoT
        </h2>
        <p className="text-white/90 text-lg md:text-xl max-w-3xl mb-12">
          In today's demanding world, we bring you an energy-efficient, cutting-edge EMS solution designed to simplify business management.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-white text-emerald-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-100 transition-all transform hover:scale-105">
            Get Started
          </button>
          <button className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all flex items-center gap-2">
            Learn More
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Hero