import React from 'react'
import Banner from '../components/Banner'
import Itinerary from '../components/Itinerary'
import PackageInclusion from '../components/PackageInclusion'
import CTAForm from '../components/CTAForm'
import OtherPackages from '../components/OtherPackages'
import StickyButtons from '../components/StickyButtons'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Banner />
      <Itinerary />
      <PackageInclusion />
      <CTAForm />
      <OtherPackages />
      <StickyButtons />
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default Home