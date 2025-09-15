import React from 'react'
import { Users, BarChart2, Shield, Clock } from 'lucide-react'

const Features = () => {
  return (
    <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Powerful Features for Modern Workforce
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Streamline your employee management with our comprehensive suite of tools and features
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
            <feature.icon color="black" className="w-12 h-12   text-emerald-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
  
}
const features = [
    {
      icon: Users,
      title: "Employee Management",
      description: "Efficiently manage your workforce with comprehensive employee profiles and data management."
    },
    {
      icon: BarChart2,
      title: "Attendence Tracking",
      description: "Monitor and analyze Employee Attendence and and reporting Alerts "
    },
    {
      icon: Shield,
      title: "Real Time Office Work In App",
      description: "Ensure data security and maintain compliance with industry regulations and standards."
    },
    {
      icon: Clock,
      title: "Time Management",
      description: "Track attendance, manage schedules, and optimize workforce productivity."
    }
  ]
  
export default Features