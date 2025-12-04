import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Gourmet Haven</h3>
            <p className="text-sm">
              Experience fine dining at its best. Quality ingredients, exceptional service, unforgettable memories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-white transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-white transition-colors">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/reservations" className="hover:text-white transition-colors">
                  Reservations
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:2125550123" className="hover:text-white transition-colors">
                  (212) 555-0123
                </a>
              </li>
              <li>
                <a href="mailto:info@gourmethaven.com" className="hover:text-white transition-colors">
                  info@gourmethaven.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Hours</h3>
            <div className="text-sm space-y-1">
              <p>Mon-Thu: 11:00 AM - 10:00 PM</p>
              <p>Fri-Sat: 11:00 AM - 11:00 PM</p>
              <p>Sunday: 12:00 PM - 9:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>© {currentYear} Gourmet Haven Restaurant. All rights reserved.</p>
          <p className="mt-2">
            Powered by{' '}
            <a 
              href="https://www.cosmicjs.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-300 hover:text-primary-200 transition-colors"
            >
              Cosmic
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}