import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection.jsx'
import CategoryCarousel from './CategoryCarousel.jsx'
import LatestJob from './LatestJob.jsx'
import Footer from './shared/Footer.jsx'
import useGetAllJobs from '@/hooks/useGetAllJobs'

const Home = () => {
  useGetAllJobs();
  return (
    <div>
      <Navbar/>
      <HeroSection />
      <CategoryCarousel />
      <LatestJob />
      <Footer />
    </div>
  )
}

export default Home
