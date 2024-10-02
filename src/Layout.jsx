import React from 'react'

import { Outlet } from 'react-router-dom'
import { Footer, NavBar } from './components'

export default function Layout() {
  return (
    <div className="bg-[#fffbf5] h-screen max-w-xl mx-auto">
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}