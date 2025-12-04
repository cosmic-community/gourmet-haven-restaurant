// Base Cosmic object interface
interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Menu Category
export interface MenuCategory extends CosmicObject {
  type: 'menu-categories';
  metadata: {
    name: string;
    description?: string;
    display_order?: number;
  };
}

// Menu Item
export interface MenuItem extends CosmicObject {
  type: 'menu-items';
  metadata: {
    name: string;
    description: string;
    price: number;
    category?: MenuCategory;
    image?: {
      url: string;
      imgix_url: string;
    };
    dietary_info?: string[];
    available?: boolean;
  };
}

// Location
export interface Location extends CosmicObject {
  type: 'locations';
  metadata: {
    name: string;
    address: string;
    phone: string;
    email?: string;
    hours: string;
    image?: {
      url: string;
      imgix_url: string;
    };
    accepts_reservations?: boolean;
  };
}

// Reservation Form Data
export interface ReservationFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  party_size: number;
  location: string;
  special_requests?: string;
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}