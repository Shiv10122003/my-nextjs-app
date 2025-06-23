import React from 'react'
import { mockArtists } from '../../lib/mockdata'
import ArtistCard from '../../components/ArtistCard'
import FilterSection from '../../components/FilterSection'
import Navigation from '@/components/Navigation'

export default function ArtistsPage(): React.JSX.Element {
  return (
    <div className="pb-16 md:pb-0">
      <div className="md:flex">
        <div className="md:w-1/4 md:pr-6">
          <FilterSection />
        </div>
        <div className="md:w-3/4">
          <h1 className="text-2xl font-bold mb-6 px-6">All Artists</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
            {mockArtists.map((artist) => (
              <ArtistCard key={artist.id.toString()} artist={{ ...artist, id: artist.id.toString() }} />
            ))}
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  )
}