import React from 'react'


import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'

import Hero from '../components/Hero'

const HomePage = () => {
  return (
    <>
        <Hero/>
        <HomeCards/>        
        <JobListings isHome={true}/>
        <ViewAllJobs/>  

    </>
  )
}

export default HomePage