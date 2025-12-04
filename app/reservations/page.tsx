import ReservationForm from '@/components/ReservationForm'
import { getLocations } from '@/lib/cosmic'
import { Location } from '@/types'

export const revalidate = 60 // Revalidate every 60 seconds

export default async function ReservationsPage() {
  const locations = await getLocations() as Location[]

  return (
    <div className="py-16 bg-gray-50">
      <div className="container max-w-3xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary mb-4">Make a Reservation</h1>
          <p className="text-xl text-gray-600">
            Reserve your table and get ready for an unforgettable dining experience
          </p>
        </div>

        {/* Reservation Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <ReservationForm locations={locations} />
        </div>

        {/* Info Section */}
        <div className="mt-8 text-center text-gray-600">
          <p className="mb-2">
            <strong>Need to modify or cancel?</strong> Call us at (212) 555-0123
          </p>
          <p>
            Reservations are confirmed within 24 hours. For same-day bookings, please call directly.
          </p>
        </div>
      </div>
    </div>
  )
}