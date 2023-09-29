import React from 'react'
import Head from 'next/head'
import Hero from './components/Hero'
import Devtools from './components/devtools'
import Devresources from './components/Devresources'
const Index = () => {
  return (
    <div>
      <Hero/>
      <Devtools/>
      <Devresources/>
    </div>
  )
}

export default Index
