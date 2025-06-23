import React from 'react'
import Link from 'next/link'
import { Search, Mic, Music, User, ArrowRight, Calendar, Star, MapPin, CheckCircle } from 'lucide-react'
import { mockArtists, categories } from '../lib/mockdata'
import ArtistCard from './ArtistCard'

interface Category {
  name: string;
  color: string;
  count: number;
}

interface Artist {
  id: string;
  name: string;
  category: string[];
  location: string;
  priceRange: string;
  rating: number;
  image: string;
  bio: string;
  languages: string[];
  reviews: number;
  verified: boolean;
  experience: string;
  availability: string;
}

interface Testimonial {
  quote: string;
  author: string;
  rating: number;
}

const HomePage = () => {
    const featuredArtists: Artist[] = mockArtists.slice(0, 3).map(artist => ({ ...artist, id: String(artist.id) }))
    const trendingArtists: Artist[] = [...mockArtists].sort((a, b) => b.rating - a.rating).slice(0, 3).map(artist => ({ ...artist, id: String(artist.id) }))

    const testimonials: Testimonial[] = [
        {
            quote: "Booking through Artistly was so easy! The singer we hired made our wedding unforgettable.",
            author: "Rahul & Priya",
            rating: 5
        },
        {
            quote: "The dance crew we found here was professional and talented. Our corporate event was a hit!",
            author: "TechSolutions Inc.",
            rating: 4
        },
        {
            quote: "As an event planner, Artistly saves me so much time finding quality performers.",
            author: "Meera Events",
            rating: 5
        }
    ]

    return (
        <div className="pb-16 md:pb-0">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16 px-6 rounded-b-3xl">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-4">Find the perfect artist for your event</h1>
                    <p className="text-xl mb-8">Book singers, dancers, speakers, and performers across India</p>
                    
                    <div className="relative max-w-2xl mx-auto">
                        <input 
                            type="text" 
                            placeholder="Search artists, categories, locations..." 
                            className="w-full p-4 pr-12 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-lg"
                        />
                        <Search className="absolute right-4 top-4 text-gray-500 h-5 w-5" />
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="px-6 py-12 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Popular Categories</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {categories.map((category) => (
                        <Link 
                            key={category.name}
                            href={`/artists?category=${category.name.toLowerCase()}`}
                            className={`bg-gradient-to-r ${category.color} text-white p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105`}
                        >
                            <div className="flex flex-col items-center">
                                {category.name === 'Singer' && <Mic className="h-8 w-8 mb-3" />}
                                {category.name === 'Dancer' && <User className="h-8 w-8 mb-3" />}
                                {category.name === 'Speaker' && <Mic className="h-8 w-8 mb-3" />}
                                {category.name === 'DJ' && <Music className="h-8 w-8 mb-3" />}
                                <span className="font-bold text-lg">{category.name}</span>
                                <span className="text-sm opacity-90">{category.count}+ artists</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Featured Artists Section */}
            <section className="px-6 py-12 bg-gray-50 text-black">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                        <h2 className="text-3xl font-bold">Featured Artists</h2>
                        <Link href="/artists" className="flex items-center text-purple-600 hover:text-purple-800 font-medium mt-4 md:mt-0">
                            View all artists <ArrowRight className="h-5 w-5 ml-1" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredArtists.map((artist: Artist) => (
                            <ArtistCard key={artist.id} artist={artist} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Trending Artists Section */}
            <section className="px-6 py-12 max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold">Trending This Week</h2>
                    <Link href="/artists?sort=trending" className="flex items-center text-purple-600 hover:text-purple-800 font-medium mt-4 md:mt-0">
                        See what's trending <ArrowRight className="h-5 w-5 ml-1" />
                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {trendingArtists.map((artist: Artist) => (
                        <ArtistCard key={artist.id} artist={artist} />
                    ))}
                </div>
            </section>

            {/* How It Works Section */}
            <section className="px-6 py-12 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center text-purple-600">How Artistly Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center text-purple-600">
                            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Search className="h-8 w-8 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Discover Artists</h3>
                            <p className="text-black">Browse through thousands of talented artists across various categories</p>
                        </div>
                        <div className="text-center text-purple-700">
                            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Calendar className="h-8 w-8 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-purple-600">Book Seamlessly</h3>
                            <p className="text-black">Check availability and book your favorite artist with just a few clicks</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Star className="h-8 w-8 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-purple-600">Enjoy Your Event</h3>
                            <p className="text-black">Sit back and enjoy a memorable performance at your event</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="px-6 py-12 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">What Our Clients Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial: Testimonial, index: number) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i: number) => (
                                    <Star 
                                        key={i} 
                                        className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
                                    />
                                ))}
                            </div>
                            <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                            <p className="font-medium text-purple-600">— {testimonial.author}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-6 py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to find your perfect artist?</h2>
                    <p className="text-xl mb-8">Join thousands of happy customers who found their ideal performers through Artistly</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/artists" className="btn-primary inline-flex items-center justify-center">
                            Browse Artists
                        </Link>
                        <Link href="/onboarding" className="btn-secondary inline-flex items-center justify-center">
                            List Your Talent
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage