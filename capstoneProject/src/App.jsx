
// import { useState } from 'react'
import Header from './components/header'
import Hero from './components/Hero'
import PlanetGrid from './components/planets'
import Table from './components/table'
import UserForm from './components/form'
import Footer from './components/footer'
import './index.css'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <PlanetGrid />
      <Table />
      <UserForm />
      <Footer />
    </>
  )
}

export default App
