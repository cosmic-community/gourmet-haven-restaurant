import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://imgix.cosmicjs.com/9e9dc650-d134-11f0-b20e-1d251587b0cd-photo-1517248135467-4c7edcad34c4-1764868437577.jpg?w=1920&h=600&fit=crop&auto=format,compress"
          alt="Restaurant Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white container">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Welcome to Gourmet Haven
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Experience culinary excellence in an elegant atmosphere. 
          Every dish tells a story, every meal creates a memory.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/menu" className="btn-primary text-lg">
            View Our Menu
          </Link>
          <Link 
            href="/reservations" 
            className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-lg"
          >
            Make a Reservation
          </Link>
        </div>
      </div>
    </section>
  )
}