import React from 'react'

const CTA = () => {
  return (
    <section className="py-20 bg-emerald-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Workforce Management?
          </h2>
          <p className="text-emerald-100 text-lg mb-8">
            Join thousands of companies already using EMS to streamline their operations and boost productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-100 transition-all">
              Start Free Trial
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA