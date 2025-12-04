import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <nav className="container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-3xl">🍽️</span>
            <span className="text-2xl font-bold text-primary">Gourmet Haven</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/menu" 
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Menu
            </Link>
            <Link 
              href="/locations" 
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Locations
            </Link>
            <Link 
              href="/reservations" 
              className="btn-primary"
            >
              Reserve Table
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Link href="/reservations" className="btn-primary text-sm py-2 px-4">
              Reserve
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden mt-4 flex flex-col space-y-2">
          <Link 
            href="/" 
            className="text-gray-700 hover:text-primary font-medium py-2"
          >
            Home
          </Link>
          <Link 
            href="/menu" 
            className="text-gray-700 hover:text-primary font-medium py-2"
          >
            Menu
          </Link>
          <Link 
            href="/locations" 
            className="text-gray-700 hover:text-primary font-medium py-2"
          >
            Locations
          </Link>
        </div>
      </nav>
    </header>
  )
}