import React from 'react'

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
        Trusted by Leading Companies
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-emerald-600 text-xl font-bold">{testimonial.initial}</span>
              </div>
              <div className="ml-4">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
              </div>
            </div>
            <p className="text-gray-600">{testimonial.quote}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}
const testimonials = [
    {
      initial: "J",
      name: "John Smith",
      role: "HR Director",
      quote: "EMS has transformed how we manage our workforce. The IoT integration provides real-time insights that have improved our decision-making process."
    },
    {
      initial: "S",
      name: "Sarah Johnson",
      role: "Operations Manager",
      quote: "The automated workflows and reporting features have saved us countless hours. It's an invaluable tool for modern workforce management."
    },
    {
      initial: "M",
      name: "Michael Chen",
      role: "CEO",
      quote: "Implementing EMS was one of the best decisions we made. The ROI has been remarkable, and our team productivity has increased significantly."
    }
  ]
  
export default Testimonials