import React from 'react';
import OnboardingForm from '../../components/OnBoardingForm'
import Navigation from '../../components/Navigation'

export default function OnboardingPage(): React.JSX.Element {
  return (
    <div className="pb-16 md:pb-0">
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-2">Complete Your Profile</h1>
        <p className="text-gray-600 mb-6">Tell us more about yourself to start getting bookings</p>
        <OnboardingForm />
      </div>
      <Navigation />
    </div>
  )
}