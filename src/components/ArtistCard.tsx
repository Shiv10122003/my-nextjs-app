import Link from 'next/link'
import { Star, MapPin, CheckCircle } from 'lucide-react'
import { cn } from '../lib/utils'

interface Artist {
  id: string;
  name: string;
  image: string;
  verified: boolean;
  rating: number;
  category: string[];
  location: string;
  priceRange: string;
  availability: 'Available' | 'Unavailable' | string;
}

export default function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <Link 
      href={`/artists/${artist.id}`}
      className="card overflow-hidden hover:shadow-md transition-all duration-300"
    >
      <div className="relative">
        <img 
          src={artist.image} 
          alt={artist.name}
          className="w-full h-48 object-cover"
        />
        {artist.verified && (
          <div className="absolute top-2 right-2 bg-white p-1 rounded-full">
            <CheckCircle className="h-5 w-5 text-purple-600" />
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-lg">{artist.name}</h3>
          <div className="flex items-center bg-purple-100 px-2 py-1 rounded">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <span className="ml-1 text-sm font-medium">{artist.rating}</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm mt-1">{artist.category.join(', ')}</p>
        <div className="flex items-center mt-2 text-sm text-gray-500">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{artist.location}</span>
        </div>
        <div className="mt-3 flex justify-between items-center">
          <span className="font-bold text-purple-600">{artist.priceRange}</span>
          <span className={cn(
            "text-xs px-2 py-1 rounded-full",
            artist.availability === 'Available' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          )}>
            {artist.availability}
          </span>
        </div>
      </div>
    </Link>
  )
}