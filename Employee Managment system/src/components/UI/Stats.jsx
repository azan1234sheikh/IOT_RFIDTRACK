import React from 'react'

const Stats = () => {
  return (
    <section className="py-20 bg-emerald-900">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
            <div className="text-emerald-200 text-lg">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}
const stats = [
    { value: "10K+", label: "Active Users" },
    { value: "98%", label: "Customer Satisfaction" },
    { value: "24/7", label: "Support Available" },
    { value: "50+", label: "Enterprise Clients" }
  ]
  

export default Stats