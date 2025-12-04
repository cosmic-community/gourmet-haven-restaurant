import { getMenuItems, getMenuCategories } from '@/lib/cosmic'
import { MenuItem, MenuCategory } from '@/types'
import MenuCard from '@/components/MenuCard'
import CategoryFilter from '@/components/CategoryFilter'

export const revalidate = 60 // Revalidate every 60 seconds

export default async function MenuPage() {
  const menuItems = await getMenuItems() as MenuItem[]
  const categories = await getMenuCategories() as MenuCategory[]

  return (
    <div className="py-16">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary mb-4">Our Menu</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of dishes, each prepared with the finest ingredients
          </p>
        </div>

        {/* Category Filter */}
        <CategoryFilter categories={categories} />

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        {menuItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No menu items available at this time.</p>
          </div>
        )}
      </div>
    </div>
  )
}