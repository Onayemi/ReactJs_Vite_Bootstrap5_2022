import React from 'react'
import { Outlet } from 'react-router-dom';
import {Header, Sidebar, Footer } from './layouts'
import Navbar from './Navbar'

const SharedLayout = () => {
  return (
    <div>

      <Navbar />
        <>
          <Outlet />
        </>

      <Footer />
    </div>
  )
}

export default SharedLayout