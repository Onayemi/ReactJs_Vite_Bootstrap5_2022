import React from 'react'
import { Outlet } from 'react-router-dom';
import {Header, Sidebar, Footer } from './layouts'
import Navbar from './Navbar'

const SharedAdminLayout = () => {
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

export default SharedAdminLayout