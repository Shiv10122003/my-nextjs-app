"use client"
import React, { useState } from 'react';
import { Instagram, Twitter, Globe, MapPin, Calendar, Music, Palette, Camera, Mic, Heart, Star, Users } from 'lucide-react';

const EventProfiles = () => {
  const [selectedProfile, setSelectedProfile] = useState<null | typeof profiles[number]>(null);
  const [filter, setFilter] = useState('all');

  const profiles = [
    {
      id: 1,
      name: "Luna Rosewood",
      category: "musician",
      specialty: "Indie Folk Singer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c1c2?w=400&h=400&fit=crop&crop=face",
      bio: "Luna creates ethereal melodies that transport audiences to otherworldly realms. Her haunting vocals and acoustic guitar work have captivated audiences across the globe.",
      performance: "Acoustic Set - 7:30 PM",
      social: {
        instagram: "@lunarosewood",
        twitter: "@luna_music",
        website: "lunarosewood.com"
      },
      stats: { followers: "12.5K", shows: 156, rating: 4.9 },
      gradient: "from-purple-400 to-pink-400"
    },
    {
      id: 2,
      name: "Marcus Chen",
      category: "visual",
      specialty: "Digital Artist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Marcus blends traditional techniques with cutting-edge digital art to create immersive visual experiences. His work explores the intersection of technology and human emotion.",
      performance: "Live Digital Painting - 8:15 PM",
      social: {
        instagram: "@marcuschen_art",
        twitter: "@marcusdigital",
        website: "marcuschen.art"
      },
      stats: { followers: "8.2K", shows: 89, rating: 4.7 },
      gradient: "from-blue-400 to-teal-400"
    },
    {
      id: 3,
      name: "Sophia Delacroix",
      category: "performer",
      specialty: "Contemporary Dancer",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      bio: "Sophia's contemporary dance performances tell stories of human connection and transformation. Her fluid movements and emotional depth create unforgettable experiences.",
      performance: "Dance Performance - 9:00 PM",
      social: {
        instagram: "@sophia_dance",
        twitter: "@sdelacroix",
        website: "sophiadelacroix.com"
      },
      stats: { followers: "15.8K", shows: 203, rating: 4.8 },
      gradient: "from-rose-400 to-orange-400"
    },
    {
      id: 4,
      name: "Dmitri Volkov",
      category: "musician",
      specialty: "Jazz Pianist",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Dmitri's jazz piano compositions blend classical training with modern improvisation. His performances are intimate journeys through melody and rhythm.",
      performance: "Jazz Piano Set - 10:30 PM",
      social: {
        instagram: "@dmitri_jazz",
        twitter: "@dvolkov_piano",
        website: "dmitrivolkov.music"
      },
      stats: { followers: "9.7K", shows: 134, rating: 4.9 },
      gradient: "from-indigo-400 to-purple-400"
    },
    {
      id: 5,
      name: "Amara Thompson",
      category: "visual",
      specialty: "Photographer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Amara captures the essence of human emotion through her lens. Her photography exhibition will showcase portraits that reveal the soul behind every face.",
      performance: "Photo Exhibition - All Evening",
      social: {
        instagram: "@amara_captures",
        twitter: "@amaraphoto",
        website: "amarathompson.photo"
      },
      stats: { followers: "22.1K", shows: 67, rating: 4.8 },
      gradient: "from-green-400 to-blue-400"
    },
    {
      id: 6,
      name: "Rafael Santos",
      category: "performer",
      specialty: "Spoken Word Poet",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      bio: "Rafael's spoken word performances are powerful narratives that explore identity, culture, and the human experience. His words resonate long after the last verse.",
      performance: "Poetry Reading - 8:45 PM",
      social: {
        instagram: "@rafael_speaks",
        twitter: "@rafaelpoetry",
        website: "rafaelsantos.words"
      },
      stats: { followers: "6.8K", shows: 112, rating: 4.7 },
      gradient: "from-yellow-400 to-red-400"
    }
  ];

  const filteredProfiles = filter === 'all' ? profiles : profiles.filter(p => p.category === filter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'musician': return <Music size={16} />;
      case 'visual': return <Palette size={16} />;
      case 'performer': return <Mic size={16} />;
      default: return <Star size={16} />;
    }
  };

  type ProfileModalProps = {
    profile: typeof profiles[number];
    onClose: () => void;
  };

  const ProfileModal = ({ profile, onClose }: ProfileModalProps) => (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10 bg-white rounded-full p-2 shadow-lg"
        >
          ×
        </button>
        
        <div className={`h-48 bg-gradient-to-r ${profile.gradient} relative`}>
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>
        
        <div className="p-8 -mt-16 relative">
          <img
            src={profile.image}
            alt={profile.name}
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover mx-auto mb-6"
          />
          
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{profile.name}</h2>
            <div className="flex items-center justify-center space-x-2 text-gray-600 mb-4">
              {getCategoryIcon(profile.category)}
              <span className="text-lg">{profile.specialty}</span>
            </div>
            
            <div className="flex items-center justify-center space-x-2 text-purple-600 mb-4">
              <Calendar size={16} />
              <span className="font-medium">{profile.performance}</span>
            </div>
          </div>
          
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed text-center">{profile.bio}</p>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{profile.stats.followers}</div>
              <div className="text-sm text-gray-600">Followers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{profile.stats.shows}</div>
              <div className="text-sm text-gray-600">Shows</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{profile.stats.rating}</div>
              <div className="text-sm text-gray-600">Rating</div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-pink-500 hover:text-pink-600 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-700 transition-colors">
              <Globe size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-90"></div>
        <div className="relative px-4 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Artistry Unveiled
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
            An extraordinary evening of creativity, talent, and inspiration
          </p>
          <div className="flex items-center justify-center space-x-4 text-purple-100">
            <MapPin size={20} />
            <span className="text-lg">The Grand Theater • Tonight</span>
          </div>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="sticky top-0 bg-white bg-opacity-10 backdrop-blur-lg border-b border-white border-opacity-20 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-center space-x-4">
            {[
              { key: 'all', label: 'All Artists', icon: <Star size={16} /> },
              { key: 'musician', label: 'Musicians', icon: <Music size={16} /> },
              { key: 'visual', label: 'Visual Artists', icon: <Palette size={16} /> },
              { key: 'performer', label: 'Performers', icon: <Mic size={16} /> }
            ].map(category => (
              <button
                key={category.key}
                onClick={() => setFilter(category.key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all ${
                  filter === category.key
                    ? 'bg-white text-purple-900 shadow-lg'
                    : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
                }`}
              >
                {category.icon}
                <span className="font-medium">{category.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Profiles Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProfiles.map(profile => (
            <div
              key={profile.id}
              className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
              onClick={() => setSelectedProfile(profile)}
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow">
                <div className={`h-48 bg-gradient-to-r ${profile.gradient} relative`}>
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-opacity"></div>
                  <div className="absolute top-4 left-4 flex items-center space-x-2 bg-white bg-opacity-90 rounded-full px-3 py-1">
                    {getCategoryIcon(profile.category)}
                    <span className="text-sm font-medium text-gray-800 capitalize">{profile.category}</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Heart className="text-white opacity-70 hover:opacity-100 transition-opacity" size={20} />
                  </div>
                </div>
                
                <div className="p-6 -mt-16 relative">
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover mx-auto mb-4"
                  />
                  
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{profile.name}</h3>
                    <p className="text-gray-600 mb-3">{profile.specialty}</p>
                    
                    <div className="flex items-center justify-center space-x-2 text-purple-600 mb-4">
                      <Calendar size={14} />
                      <span className="text-sm font-medium">{profile.performance}</span>
                    </div>
                    
                    <div className="flex justify-center space-x-4 mb-4">
                      <div className="text-center">
                        <div className="text-sm font-bold text-gray-900">{profile.stats.followers}</div>
                        <div className="text-xs text-gray-600">Followers</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-bold text-gray-900">{profile.stats.shows}</div>
                        <div className="text-xs text-gray-600">Shows</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-bold text-gray-900">{profile.stats.rating}</div>
                        <div className="text-xs text-gray-600">Rating</div>
                      </div>
                    </div>
                    
                    <div className="flex justify-center space-x-3">
                      <Instagram className="text-pink-500 hover:text-pink-600 transition-colors" size={18} />
                      <Twitter className="text-blue-500 hover:text-blue-600 transition-colors" size={18} />
                      <Globe className="text-gray-600 hover:text-gray-700 transition-colors" size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black bg-opacity-50 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Users size={20} />
            <span className="text-lg font-medium">Join the Creative Community</span>
          </div>
          <p className="text-gray-300 mb-6">
            Experience the magic of live artistry. Follow your favorite artists and never miss a performance.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Events</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Artists</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {selectedProfile && (
        <ProfileModal
          profile={selectedProfile}
          onClose={() => setSelectedProfile(null)}
        />
      )}
    </div>
  );
};

export default EventProfiles;