import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-emerald-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">EMS</h3>
            <p className="text-emerald-200">
              Smart employee management solutions for the modern workplace.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-emerald-200 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-emerald-200 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-emerald-200 hover:text-white transition-colors">Integration</a></li>
              <li><a href="#" className="text-emerald-200 hover:text-white transition-colors">Documentation</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-emerald-200 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-emerald-200 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-emerald-200 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-emerald-200 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-emerald-200 hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="text-emerald-200 hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="text-emerald-200 hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-emerald-800 mt-12 pt-8 text-center text-emerald-200">
          <p>© 2025 MyEMS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer