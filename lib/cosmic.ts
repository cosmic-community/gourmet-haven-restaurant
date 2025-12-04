import { createBucketClient } from '@cosmicjs/sdk'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

// Helper function for error handling
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Fetch all menu items with categories
export async function getMenuItems() {
  try {
    const response = await cosmic.objects
      .find({ type: 'menu-items' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch menu items');
  }
}

// Fetch all menu categories
export async function getMenuCategories() {
  try {
    const response = await cosmic.objects
      .find({ type: 'menu-categories' })
      .props(['id', 'title', 'slug', 'metadata']);
    
    // Sort by display_order
    return response.objects.sort((a: any, b: any) => {
      const orderA = a.metadata?.display_order ?? 999;
      const orderB = b.metadata?.display_order ?? 999;
      return orderA - orderB;
    });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch menu categories');
  }
}

// Fetch all locations
export async function getLocations() {
  try {
    const response = await cosmic.objects
      .find({ type: 'locations' })
      .props(['id', 'title', 'slug', 'metadata']);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch locations');
  }
}