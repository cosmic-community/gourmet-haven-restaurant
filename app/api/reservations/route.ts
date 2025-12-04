import { NextResponse } from 'next/server'
import { cosmic } from '@/lib/cosmic'
import { ReservationFormData } from '@/types'

export async function POST(request: Request) {
  try {
    const formData: ReservationFormData = await request.json()

    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time || !formData.party_size || !formData.location) {
      return NextResponse.json(
        { error: 'All required fields must be provided' },
        { status: 400 }
      )
    }

    // Create reservation in Cosmic
    const response = await cosmic.objects.insertOne({
      type: 'reservations',
      title: `Reservation - ${formData.name} - ${formData.date}`,
      metadata: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        date: formData.date,
        time: formData.time,
        party_size: formData.party_size,
        location: formData.location,
        special_requests: formData.special_requests || '',
      }
    })

    return NextResponse.json({ 
      success: true, 
      reservation: response.object 
    })
  } catch (error) {
    console.error('Error creating reservation:', error)
    return NextResponse.json(
      { error: 'Failed to create reservation' },
      { status: 500 }
    )
  }
}