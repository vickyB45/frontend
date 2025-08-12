import React from 'react'
import Banner from '../components/Banner'
import Itinerary from '../components/Itinerary'
import PackageInclusion from '../components/PackageInclusion'
import CTAForm from '../components/CTAForm'
import OtherPackages from '../components/OtherPackages'
import StickyButtons from '../components/StickyButtons'
import FAQ from '../components/FAQ'
import ReviewsCarousel from '../components/ReviewsCarousel'
import { useState } from 'react'
import { useEffect } from 'react'

const Home = () => {
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCTA(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <div>
        <Banner />
      <Itinerary />
      <PackageInclusion />
      {/* <CTAForm /> */}
      <OtherPackages />
      <StickyButtons />
      <FAQ/>
      <ReviewsCarousel />
      {showCTA && (
              <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
                <div className="relative max-w-md w-full bg-white rounded-lg shadow-lg p-6">
                  <button
                    onClick={() => setShowCTA(false)}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold"
                    aria-label="Close"
                  >
                    &times;
                  </button>
                  <CTAForm />
                </div>
              </div>
            )}
    </div>
  )
}

export default Home