'use client'

import { useState } from 'react'
import { MenuCategory } from '@/types'

interface CategoryFilterProps {
  categories: MenuCategory[]
}

export default function CategoryFilter({ categories }: CategoryFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  return (
    <div className="mb-12">
      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
            selectedCategory === 'all'
              ? 'bg-primary text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          All Items
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.slug)}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              selectedCategory === category.slug
                ? 'bg-primary text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category.metadata.name}
          </button>
        ))}
      </div>
    </div>
  )
}