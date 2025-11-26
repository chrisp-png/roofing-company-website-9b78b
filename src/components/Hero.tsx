import { Phone, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Professional Roofing
          <span className="block text-amber-500">Built to Last</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Expert roofing solutions for residential and commercial properties.
          Quality craftsmanship, reliable service, and lasting protection.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="#contact"
            className="px-8 py-4 bg-amber-500 text-slate-900 rounded-lg font-semibold hover:bg-amber-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Get Free Quote
          </a>
          <a
            href="tel:555-123-4567"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
          >
            Call Now
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm">
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-amber-500" />
            <span>(555) 123-4567</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-amber-500" />
            <span>info@roofingpro.com</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent"></div>
    </section>
  )
}
