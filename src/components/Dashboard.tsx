import { Calendar, Clock, User, MapPin, CheckCircle, XCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

const upcomingBookings = [
  {
    id: 1,
    artist: "Priya Sharma",
    date: "2023-12-15",
    time: "19:00",
    location: "Mumbai, Maharashtra",
    status: "confirmed",
    category: "Singer"
  },
  {
    id: 2,
    artist: "Arjun Dance Crew",
    date: "2023-12-20",
    time: "20:30",
    location: "Delhi, Delhi",
    status: "pending",
    category: "Dancer"
  }
]

const pastBookings = [
  {
    id: 3,
    artist: "DJ Rohan",
    date: "2023-11-10",
    time: "22:00",
    location: "Bangalore, Karnataka",
    status: "completed",
    category: "DJ"
  }
]

export default function Dashboard() {
  return (
    <div className="pb-16 md:pb-0">
      <h1 className="text-2xl font-bold mb-6">Your Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-2">Total Bookings</h3>
          <p className="text-3xl font-bold text-purple-600">12</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-2">Upcoming</h3>
          <p className="text-3xl font-bold text-purple-600">2</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-2">Earnings</h3>
          <p className="text-3xl font-bold text-purple-600">₹1,25,000</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Upcoming Bookings</h2>
        <div className="space-y-4">
          {upcomingBookings.map((booking) => (
            <div key={booking.id} className="card p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg">{booking.artist}</h3>
                  <p className="text-gray-600">{booking.category}</p>
                </div>
                <span className={cn(
                  "flex items-center text-sm px-2 py-1 rounded-full",
                  booking.status === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                )}>
                  {booking.status === 'confirmed' ? (
                    <CheckCircle className="h-4 w-4 mr-1" />
                  ) : (
                    <Clock className="h-4 w-4 mr-1" />
                  )}
                  {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                </span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-gray-500 mr-2" />
                  <span>{new Date(booking.date).toLocaleDateString('en-IN')}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-500 mr-2" />
                  <span>{booking.time}</span>
                </div>
                <div className="flex items-center col-span-2">
                  <MapPin className="h-5 w-5 text-gray-500 mr-2" />
                  <span>{booking.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Past Bookings</h2>
        <div className="space-y-4">
          {pastBookings.map((booking) => (
            <div key={booking.id} className="card p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg">{booking.artist}</h3>
                  <p className="text-gray-600">{booking.category}</p>
                </div>
                <span className="flex items-center bg-gray-100 text-gray-800 text-sm px-2 py-1 rounded-full">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  Completed
                </span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-gray-500 mr-2" />
                  <span>{new Date(booking.date).toLocaleDateString('en-IN')}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-500 mr-2" />
                  <span>{booking.time}</span>
                </div>
                <div className="flex items-center col-span-2">
                  <MapPin className="h-5 w-5 text-gray-500 mr-2" />
                  <span>{booking.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}