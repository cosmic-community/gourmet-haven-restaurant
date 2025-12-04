import { Location } from '@/types'

interface LocationCardProps {
  location: Location
}

export default function LocationCard({ location }: LocationCardProps) {
  const imageUrl = location.metadata?.image?.imgix_url
  const acceptsReservations = location.metadata?.accepts_reservations !== false

  return (
    <div className="card">
      {/* Image */}
      {imageUrl && (
        <div className="h-64 overflow-hidden">
          <img
            src={`${imageUrl}?w=800&h=512&fit=crop&auto=format,compress`}
            alt={location.metadata.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-primary mb-4">
          {location.metadata.name}
        </h3>

        {/* Address */}
        <div className="mb-4">
          <div className="flex items-start gap-2">
            <span className="text-xl">📍</span>
            <div className="text-gray-700 whitespace-pre-line">
              {location.metadata.address}
            </div>
          </div>
        </div>

        {/* Phone */}
        <div className="mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">📞</span>
            <a 
              href={`tel:${location.metadata.phone}`}
              className="text-primary hover:text-primary-600 font-semibold"
            >
              {location.metadata.phone}
            </a>
          </div>
        </div>

        {/* Email */}
        {location.metadata.email && (
          <div className="mb-4">
            <div className="flex items-center gap-2">
              <span className="text-xl">✉️</span>
              <a 
                href={`mailto:${location.metadata.email}`}
                className="text-primary hover:text-primary-600 font-semibold"
              >
                {location.metadata.email}
              </a>
            </div>
          </div>
        )}

        {/* Hours */}
        <div className="mb-4">
          <div className="flex items-start gap-2">
            <span className="text-xl">🕒</span>
            <div 
              className="text-gray-700 prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: location.metadata.hours }}
            />
          </div>
        </div>

        {/* Reservations */}
        {acceptsReservations && (
          <div className="mt-6">
            <div className="bg-primary-50 text-primary-700 px-4 py-3 rounded-lg text-center font-semibold">
              ✓ Accepting Reservations
            </div>
          </div>
        )}
      </div>
    </div>
  )
}