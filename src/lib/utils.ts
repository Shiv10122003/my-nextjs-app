import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { Artist, Booking } from '../lib/types'

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: string | number, withSymbol: boolean = true): string {
  const numericPrice = typeof price === 'string' 
    ? parseFloat(price.replace(/[^0-9.]/g, '')) 
    : price
  return `${withSymbol ? '₹' : ''}${numericPrice.toLocaleString('en-IN')}`
}

export function truncateText(text: string, length: number = 100, ellipsis: string = '...'): string {
  return text.length <= length ? text : `${text.substring(0, length)}${ellipsis}`
}

export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function validatePhone(phone: string): boolean {
  return /^[6-9]\d{9}$/.test(phone)
}

export function generateId(prefix: string = ''): string {
  return `${prefix}${Date.now().toString(36)}${Math.random().toString(36).substring(2, 9)}`
}

export function filterArtistsByCategory(artists: Artist[], category: string): Artist[] {
  return artists.filter(artist => artist.category.includes(category as any))
}

export function sortArtistsByRating(artists: Artist[], order: 'asc' | 'desc' = 'desc'): Artist[] {
  return [...artists].sort((a, b) => order === 'desc' ? b.rating - a.rating : a.rating - b.rating)
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

export function isAvailable(artist: Artist): boolean {
  return artist.availability === 'Available'
}

export function getCategoryColor(categoryName: string): string {
  const colors: Record<string, string> = {
    'Singer': 'from-purple-500 to-pink-500',
    'Dancer': 'from-blue-500 to-cyan-500',
    'Speaker': 'from-green-500 to-emerald-500',
    'DJ': 'from-orange-500 to-red-500'
  }
  return colors[categoryName] || 'from-gray-500 to-gray-700'
}