import React from 'react'
import Header from './Header/Header'
import ResponsiveHeader from './Header/ResponsiveHeader'
import Navbar from './Navbar/Navbar'
import SubNav from './Navbar/SubNav'
import Explore from './body/Explore'
import PlayMode from './body/PlayMode'
import Category from './body/Category'
import Online from './body/Online'
import Games from './body/Games'
import Social from './body/Social'
import Footer from './Navbar/Footer'
import Scroller from './body/Scroller'
import Hero from './body/Hero'

export default function Home() {
  return (
    <div>
      <Scroller />
      <Header />
      <ResponsiveHeader />
      <Navbar />
      <SubNav />
      <Hero />
      <Explore />
      <PlayMode />
      <Category />
      <Online />
      <Games />
      <Social />
      <Footer />
    </div>
  )
}
