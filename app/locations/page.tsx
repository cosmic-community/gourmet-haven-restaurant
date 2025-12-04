import { getLocations } from '@/lib/cosmic'
import { Location } from '@/types'
import LocationCard from '@/components/LocationCard'

export const revalidate = 60 // Revalidate every 60 seconds

export default async function LocationsPage() {
  const locations = await getLocations() as Location[]

  return (
    <div className="py-16">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary mb-4">Our Locations</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Visit us at any of our convenient locations. Each restaurant offers the same exceptional quality and service.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {locations.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>

        {locations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Location information coming soon.</p>
          </div>
        )}
      </div>
    </div>
  )
}