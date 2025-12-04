import { MenuItem } from '@/types'

interface MenuCardProps {
  item: MenuItem
}

export default function MenuCard({ item }: MenuCardProps) {
  const imageUrl = item.metadata?.image?.imgix_url
  const dietaryInfo = item.metadata?.dietary_info || []
  const available = item.metadata?.available !== false

  return (
    <div className={`card ${!available ? 'opacity-60' : ''}`}>
      {/* Image */}
      {imageUrl && (
        <div className="relative h-64 overflow-hidden">
          <img
            src={`${imageUrl}?w=600&h=512&fit=crop&auto=format,compress`}
            alt={item.metadata.name}
            className="w-full h-full object-cover"
          />
          {!available && (
            <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Unavailable
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-2xl font-bold text-gray-900">
            {item.metadata.name}
          </h3>
          <span className="text-2xl font-bold text-secondary">
            ${item.metadata.price}
          </span>
        </div>

        <p className="text-gray-600 mb-4">
          {item.metadata.description}
        </p>

        {/* Dietary Info */}
        {dietaryInfo.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {dietaryInfo.map((info) => (
              <span
                key={info}
                className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium"
              >
                {info}
              </span>
            ))}
          </div>
        )}

        {/* Category */}
        {item.metadata?.category && (
          <div className="text-sm text-gray-500">
            Category: <span className="font-semibold">{item.metadata.category.title}</span>
          </div>
        )}
      </div>
    </div>
  )
}