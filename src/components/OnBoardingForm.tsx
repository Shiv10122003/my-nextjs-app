'use client'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { cn } from '@/lib/utils'

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string()
    .required('Phone number is required')
    .matches(/^[6-9]\d{9}$/, 'Invalid Indian phone number'),
  artistType: yup.string().required('Please select your artist type'),
  bio: yup.string().required('Bio is required').max(500, 'Bio must be less than 500 characters'),
  location: yup.string().required('Location is required'),
  priceRange: yup.string().required('Please select your price range'),
  experience: yup.string().required('Please select your experience level'),
})

interface OnboardingFormData {
  name: string;
  email: string;
  phone: string;
  artistType: string;
  bio: string;
  location: string;
  priceRange: string;
  experience: string;
}

export default function OnboardingForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<OnboardingFormData>({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: OnboardingFormData) => {
    console.log(data)
    // Handle form submission
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
        <input
          {...register('name')}
          type="text"
          className={cn(
            "w-full p-3 border rounded-lg focus:ring-purple-500 focus:border-purple-500",
            errors.name ? "border-red-500" : "border-gray-300"
          )}
          placeholder="Enter your full name"
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            {...register('email')}
            type="email"
            className={cn(
              "w-full p-3 border rounded-lg focus:ring-purple-500 focus:border-purple-500",
              errors.email ? "border-red-500" : "border-gray-300"
            )}
            placeholder="Enter your email"
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input
            {...register('phone')}
            type="tel"
            className={cn(
              "w-full p-3 border rounded-lg focus:ring-purple-500 focus:border-purple-500",
              errors.phone ? "border-red-500" : "border-gray-300"
            )}
            placeholder="Enter your phone number"
          />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Artist Type</label>
        <select
          {...register('artistType')}
          className={cn(
            "w-full p-3 border rounded-lg focus:ring-purple-500 focus:border-purple-500",
            errors.artistType ? "border-red-500" : "border-gray-300"
          )}
        >
          <option value="">Select your artist type</option>
          <option value="Singer">Singer</option>
          <option value="Dancer">Dancer</option>
          <option value="Speaker">Speaker</option>
          <option value="DJ">DJ</option>
          <option value="Other">Other</option>
        </select>
        {errors.artistType && <p className="mt-1 text-sm text-red-600">{errors.artistType.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
        <textarea
          {...register('bio')}
          rows={4}
          className={cn(
            "w-full p-3 border rounded-lg focus:ring-purple-500 focus:border-purple-500",
            errors.bio ? "border-red-500" : "border-gray-300"
          )}
          placeholder="Tell us about your skills and experience"
        />
        {errors.bio && <p className="mt-1 text-sm text-red-600">{errors.bio.message}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <input
            {...register('location')}
            type="text"
            className={cn(
              "w-full p-3 border rounded-lg focus:ring-purple-500 focus:border-purple-500",
              errors.location ? "border-red-500" : "border-gray-300"
            )}
            placeholder="Enter your city"
          />
          {errors.location && <p className="mt-1 text-sm text-red-600">{errors.location.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
          <select
            {...register('priceRange')}
            className={cn(
              "w-full p-3 border rounded-lg focus:ring-purple-500 focus:border-purple-500",
              errors.priceRange ? "border-red-500" : "border-gray-300"
            )}
          >
            <option value="">Select your price range</option>
            <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000</option>
            <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
            <option value="₹50,000 - ₹75,000">₹50,000 - ₹75,000</option>
            <option value="₹75,000+">₹75,000+</option>
          </select>
          {errors.priceRange && <p className="mt-1 text-sm text-red-600">{errors.priceRange.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience</label>
        <select
          {...register('experience')}
          className={cn(
            "w-full p-3 border rounded-lg focus:ring-purple-500 focus:border-purple-500",
            errors.experience ? "border-red-500" : "border-gray-300"
          )}
        >
          <option value="">Select your experience level</option>
          <option value="0-2 years">0-2 years</option>
          <option value="2-5 years">2-5 years</option>
          <option value="5-10 years">5-10 years</option>
          <option value="10+ years">10+ years</option>
        </select>
        {errors.experience && <p className="mt-1 text-sm text-red-600">{errors.experience.message}</p>}
      </div>

      <div className="pt-4">
        <button
          type="submit"
          className="w-full btn-primary"
        >
          Complete Onboarding
        </button>
      </div>
    </form>
  )
}