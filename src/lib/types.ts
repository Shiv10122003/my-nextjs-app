// Artist and Booking Types
export interface Artist {
  id: number;
  name: string;
  category: ArtistCategory[];
  location: string;
  priceRange: string;
  rating: number;
  image: string;
  bio: string;
  languages: Language[];
  reviews: number;
  verified: boolean;
  experience: string;
  availability: AvailabilityStatus;
  portfolio?: string[]; // Array of image URLs
  socialMedia?: {
    instagram?: string;
    youtube?: string;
    twitter?: string;
  };
}

export interface Booking {
  id: string;
  artistId: number;
  userId: string;
  date: string;
  time: string;
  duration: number; // in hours
  location: string;
  status: BookingStatus;
  paymentStatus: PaymentStatus;
  totalAmount: number;
  createdAt: string;
  updatedAt: string;
}

// Filter and Form Types
export interface FilterOptions {
  categories: ArtistCategory[];
  locations: string[];
  priceRange: [number, number] | null;
  languages: Language[];
  rating: number | null;
}

export interface OnboardingFormData {
  name: string;
  email: string;
  phone: string;
  artistType: ArtistCategory[];
  bio: string;
  location: string;
  priceRange: string;
  experience: string;
  languages: Language[];
  portfolioFiles?: FileList;
}

// Enums
export enum ArtistCategory {
  SINGER = 'Singer',
  DANCER = 'Dancer',
  DJ = 'DJ',
  SPEAKER = 'Speaker',
  BAND = 'Band',
  MAGICIAN = 'Magician',
  COMEDIAN = 'Comedian'
}

export enum Language {
  HINDI = 'Hindi',
  ENGLISH = 'English',
  TAMIL = 'Tamil',
  TELUGU = 'Telugu',
  BENGALI = 'Bengali',
  PUNJABI = 'Punjabi'
}

export enum AvailabilityStatus {
  AVAILABLE = 'Available',
  BUSY = 'Busy',
  ON_TOUR = 'On Tour'
}

export enum BookingStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  CANCELLED = 'cancelled',
  COMPLETED = 'completed'
}

export enum PaymentStatus {
  PENDING = 'pending',
  PAID = 'paid',
  REFUNDED = 'refunded',
  FAILED = 'failed'
}

// Component Props
export interface ArtistCardProps {
  artist: Artist;
  className?: string;
  onClick?: (artist: Artist) => void;
}

export interface FilterSectionProps {
  onFilterChange: (filters: Partial<FilterOptions>) => void;
  initialFilters?: Partial<FilterOptions>;
  className?: string;
}

export interface OnboardingFormProps {
  onSubmit: (formData: OnboardingFormData) => void;
  isLoading?: boolean;
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: {
    code: string;
    details: string;
  };
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  hasNext: boolean;
}

// Context Types
export interface AppContextType {
  user: User | null;
  bookings: Booking[];
  favorites: number[]; // artist IDs
  addFavorite: (artistId: number) => void;
  removeFavorite: (artistId: number) => void;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'artist' | 'admin';
  avatar?: string;
  joinedAt: string;
}