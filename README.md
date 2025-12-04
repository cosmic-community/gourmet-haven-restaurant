# 🍽️ Gourmet Haven Restaurant

![App Preview](https://imgix.cosmicjs.com/9e9dc650-d134-11f0-b20e-1d251587b0cd-photo-1517248135467-4c7edcad34c4-1764868437577.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, responsive restaurant website showcasing menu items organized by category, multiple locations with detailed hours, and a complete reservation system. Built with Next.js 16 and powered by Cosmic CMS.

## ✨ Features

- 🍽️ **Dynamic Menu Display** - Browse menu items with images, prices, descriptions, and dietary information
- 📂 **Category Filtering** - Filter menu items by Appetizers, Entrees, Desserts, or view all
- 📍 **Multiple Locations** - Display location details with addresses, phone numbers, and operating hours
- 📅 **Reservation System** - Complete booking form with date/time selection and validation
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop experiences
- ⚡ **Server-Side Rendering** - Fast page loads with Next.js 16 App Router
- 🎨 **Modern Design** - Beautiful UI with smooth animations and transitions
- 🏷️ **Dietary Tags** - Clear labels for Vegetarian, Vegan, Gluten-Free, and Dairy-Free options

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6931c0d53584465d0a2f7782&clone_repository=6931c2583584465d0a2f77b2)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a restaurant website with menu items organized by category, locations with hours, and a reservation form"

### Code Generation Prompt

> "Based on the content model I created for 'Create a restaurant website with menu items organized by category, locations with hours, and a reservation form', now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Cosmic
- **Package Manager**: Bun
- **Deployment**: Vercel-ready

## 🚀 Getting Started

### Prerequisites

- Bun installed on your machine
- A Cosmic account with your restaurant content

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd gourmet-haven-restaurant
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

4. **Run the development server**
   ```bash
   bun run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📚 Cosmic SDK Examples

### Fetching Menu Items with Categories

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all menu items with their related categories
const { objects: menuItems } = await cosmic.objects
  .find({ type: 'menu-items' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1) // Include related category objects

// Filter by category
const { objects: appetizers } = await cosmic.objects
  .find({ 
    type: 'menu-items',
    'metadata.category': categoryId 
  })
  .depth(1)
```

### Fetching Locations

```typescript
// Get all restaurant locations
const { objects: locations } = await cosmic.objects
  .find({ type: 'locations' })
  .props(['id', 'title', 'slug', 'metadata'])
```

### Creating a Reservation

```typescript
// Submit a reservation
await cosmic.objects.insertOne({
  type: 'reservations',
  title: `Reservation - ${name} - ${date}`,
  metadata: {
    name,
    email,
    phone,
    date,
    time,
    party_size: partySize,
    location: locationId,
    special_requests: specialRequests
  }
})
```

## 🌐 Cosmic CMS Integration

This application uses Cosmic as a headless CMS with the following content structure:

### Content Types

1. **Menu Items** (`menu-items`)
   - Name (text)
   - Description (textarea)
   - Price (number)
   - Category (object relationship)
   - Image (file)
   - Dietary Info (checkboxes: Vegetarian, Vegan, Gluten-Free, Dairy-Free)
   - Available (switch)

2. **Menu Categories** (`menu-categories`)
   - Name (text)
   - Description (textarea)
   - Display Order (number)

3. **Locations** (`locations`)
   - Name (text)
   - Address (textarea)
   - Phone (text)
   - Email (text)
   - Hours (HTML textarea)
   - Image (file)
   - Accepts Reservations (switch)

### Content Management

- All content is managed through your Cosmic dashboard
- Changes are reflected immediately without redeployment
- Images are optimized automatically using imgix
- Rich text hours can include HTML formatting

## 🚀 Deployment

### Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your repository
   - Add environment variables:
     - `COSMIC_BUCKET_SLUG`
     - `COSMIC_READ_KEY`
     - `COSMIC_WRITE_KEY`

3. **Deploy**
   - Click "Deploy"
   - Your site will be live in minutes!

### Environment Variables

Make sure to set these in your Vercel project settings:

- `COSMIC_BUCKET_SLUG` - Your Cosmic bucket slug
- `COSMIC_READ_KEY` - Your Cosmic read key
- `COSMIC_WRITE_KEY` - Your Cosmic write key (for reservations)

## 📖 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Homepage with hero
│   ├── menu/
│   │   └── page.tsx        # Menu display with filtering
│   ├── locations/
│   │   └── page.tsx        # Locations listing
│   ├── reservations/
│   │   └── page.tsx        # Reservation form
│   ├── api/
│   │   └── reservations/
│   │       └── route.ts    # API route for submissions
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Homepage hero section
│   ├── MenuCard.tsx        # Menu item display card
│   ├── CategoryFilter.tsx  # Menu category filter
│   ├── LocationCard.tsx    # Location display card
│   ├── ReservationForm.tsx # Booking form component
│   ├── Footer.tsx          # Site footer
│   └── CosmicBadge.tsx     # Built with Cosmic badge
├── lib/
│   └── cosmic.ts           # Cosmic SDK configuration
├── types.ts                # TypeScript type definitions
└── tailwind.config.js      # Tailwind configuration
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: '#8B4513',    // Warm brown
  secondary: '#D2691E',  // Chocolate
  // Add your custom colors
}
```

### Content

All content is managed in your Cosmic dashboard. Update menu items, locations, and settings without touching code.

## 📄 License

MIT License - feel free to use this project for your restaurant!

<!-- README_END -->