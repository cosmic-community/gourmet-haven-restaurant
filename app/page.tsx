import Hero from '@/components/Hero'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <Hero />
      
      {/* Quick Links Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/menu" className="card p-8 text-center">
              <div className="text-5xl mb-4">🍽️</div>
              <h3 className="text-2xl font-bold text-primary mb-2">Our Menu</h3>
              <p className="text-gray-600 mb-4">
                Explore our delicious selection of appetizers, entrees, and desserts
              </p>
              <span className="text-primary font-semibold">View Menu →</span>
            </Link>
            
            <Link href="/locations" className="card p-8 text-center">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-2xl font-bold text-primary mb-2">Locations</h3>
              <p className="text-gray-600 mb-4">
                Find our restaurants near you with hours and contact information
              </p>
              <span className="text-primary font-semibold">Find Location →</span>
            </Link>
            
            <Link href="/reservations" className="card p-8 text-center">
              <div className="text-5xl mb-4">📅</div>
              <h3 className="text-2xl font-bold text-primary mb-2">Reservations</h3>
              <p className="text-gray-600 mb-4">
                Book your table and enjoy an unforgettable dining experience
              </p>
              <span className="text-primary font-semibold">Make Reservation →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Welcome to Gourmet Haven
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Experience the finest in culinary excellence. Our chefs craft each dish with passion, 
            using only the freshest ingredients to create memorable dining experiences.
          </p>
          <p className="text-lg text-gray-700">
            Whether you're celebrating a special occasion or enjoying a casual dinner, 
            our warm atmosphere and exceptional service make every visit special.
          </p>
        </div>
      </section>
    </>
  )
}