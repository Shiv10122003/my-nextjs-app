export const mockArtists = [
  {
    id: 1,
    name: "Priya Sharma",
    category: ["Singer", "Performer"],
    location: "Mumbai, Maharashtra",
    priceRange: "₹25,000 - ₹50,000",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1734983235410-cbbc5f5fcdaf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Professional playback singer with 8+ years experience in Bollywood and regional cinema",
    languages: ["Hindi", "English", "Marathi"],
    reviews: 127,
    verified: true,
    experience: "8+ years",
    availability: "Available"
  },
  {
    id: 2,
    name: "Arjun Dance Crew",
    category: ["Dancer", "Choreographer"],
    location: "Delhi, Delhi",
    priceRange: "₹15,000 - ₹35,000",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=400&fit=crop&crop=face",
    bio: "Contemporary and Bollywood dance specialists with award-winning performances",
    languages: ["Hindi", "English", "Punjabi"],
    reviews: 89,
    verified: true,
    experience: "6+ years",
    availability: "Available"
  },
  {
    id: 3,
    name: "DJ Rohan",
    category: ["DJ", "Music Producer"],
    location: "Bangalore, Karnataka",
    priceRange: "₹20,000 - ₹45,000",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "Electronic music producer and live DJ specializing in corporate events",
    languages: ["English", "Hindi", "Kannada"],
    reviews: 156,
    verified: true,
    experience: "10+ years",
    availability: "Busy"
  },
  {
    id: 4,
    name: "Kavya Motivational",
    category: ["Speaker", "Coach"],
    location: "Chennai, Tamil Nadu",
    priceRange: "₹30,000 - ₹60,000",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    bio: "Corporate trainer and motivational speaker with TEDx experience",
    languages: ["English", "Tamil", "Hindi"],
    reviews: 203,
    verified: true,
    experience: "12+ years",
    availability: "Available"
  },
  {
    id: 5,
    name: "Rhythm Band",
    category: ["Singer", "Band"],
    location: "Pune, Maharashtra",
    priceRange: "₹40,000 - ₹80,000",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&crop=face",
    bio: "Live band specializing in rock and indie music for festivals and events",
    languages: ["English", "Hindi", "Marathi"],
    reviews: 74,
    verified: false,
    experience: "5+ years",
    availability: "Available"
  },
  {
    id: 6,
    name: "Meera Classical",
    category: ["Singer", "Performer"],
    location: "Jaipur, Rajasthan",
    priceRange: "₹35,000 - ₹70,000",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    bio: "Classical Indian vocalist and cultural performer with international recognition",
    languages: ["Hindi", "Rajasthani", "English"],
    reviews: 192,
    verified: true,
    experience: "15+ years",
    availability: "Available"
  }
];

export const categories = [
  { name: "Singer", color: "from-purple-500 to-pink-500", count: 45 },
  { name: "Dancer", color: "from-blue-500 to-cyan-500", count: 32 },
  { name: "Speaker", color: "from-green-500 to-emerald-500", count: 28 },
  { name: "DJ", color: "from-orange-500 to-red-500", count: 21 }
];

export const locations = [
  "Mumbai", "Delhi", "Bangalore", "Chennai", "Pune", 
  "Jaipur", "Kolkata", "Hyderabad", "Ahmedabad", "Lucknow"
];

export const priceRanges = [
  "₹10,000 - ₹25,000",
  "₹25,000 - ₹50,000", 
  "₹50,000 - ₹75,000",
  "₹75,000+"
];

export const languages = [
  "Hindi", "English", "Tamil", "Telugu", "Marathi", 
  "Gujarati", "Bengali", "Punjabi", "Kannada", "Malayalam"
];

export const feeRanges = [
  "₹5,000 - ₹15,000",
  "₹15,000 - ₹30,000",
  "₹30,000 - ₹50,000",
  "₹50,000 - ₹75,000",
  "₹75,000 - ₹1,00,000",
    "₹1,00,000+"
];

export const formOptions = {
  languages: ["English", "Spanish", "French", "Hindi"],
  // Other form options...
};