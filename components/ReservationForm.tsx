'use client'

import { useState } from 'react'
import { Location, ReservationFormData } from '@/types'

interface ReservationFormProps {
  locations: Location[]
}

export default function ReservationForm({ locations }: ReservationFormProps) {
  const [formData, setFormData] = useState<ReservationFormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    party_size: 2,
    location: '',
    special_requests: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage(null)

    try {
      const response = await fetch('/api/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitMessage({
          type: 'success',
          text: 'Reservation submitted successfully! We will confirm via email within 24 hours.',
        })
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          party_size: 2,
          location: '',
          special_requests: '',
        })
      } else {
        throw new Error('Failed to submit reservation')
      }
    } catch (error) {
      setSubmitMessage({
        type: 'error',
        text: 'Failed to submit reservation. Please try again or call us directly.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'party_size' ? parseInt(value) : value,
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="John Doe"
        />
      </div>

      {/* Email and Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="(212) 555-0123"
          />
        </div>
      </div>

      {/* Date and Time */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-2">
            Date *
          </label>
          <input
            type="date"
            id="date"
            name="date"
            required
            value={formData.date}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="time" className="block text-sm font-semibold text-gray-700 mb-2">
            Time *
          </label>
          <input
            type="time"
            id="time"
            name="time"
            required
            value={formData.time}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </div>

      {/* Party Size and Location */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="party_size" className="block text-sm font-semibold text-gray-700 mb-2">
            Party Size *
          </label>
          <select
            id="party_size"
            name="party_size"
            required
            value={formData.party_size}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
              <option key={num} value={num}>
                {num} {num === 1 ? 'Guest' : 'Guests'}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
            Location *
          </label>
          <select
            id="location"
            name="location"
            required
            value={formData.location}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="">Select a location</option>
            {locations.map(location => (
              <option key={location.id} value={location.id}>
                {location.metadata.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Special Requests */}
      <div>
        <label htmlFor="special_requests" className="block text-sm font-semibold text-gray-700 mb-2">
          Special Requests
        </label>
        <textarea
          id="special_requests"
          name="special_requests"
          value={formData.special_requests}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Any allergies, dietary restrictions, or special occasions?"
        />
      </div>

      {/* Submit Message */}
      {submitMessage && (
        <div
          className={`p-4 rounded-lg ${
            submitMessage.type === 'success'
              ? 'bg-green-50 text-green-800 border border-green-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}
        >
          {submitMessage.text}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Reservation'}
      </button>
    </form>
  )
}