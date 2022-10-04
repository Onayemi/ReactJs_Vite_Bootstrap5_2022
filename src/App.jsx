import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home, Register, Login, Contact, Dashboard, Error, SharedLayout, SharedAdminLayout } from './pages'
import ProtectedRoute from './pages/ProtectedRoute'
// import {Header, Sidebar, Footer } from './pages/layouts'
import Navbar from './pages/Navbar'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SharedLayout />}>            
          <Route index element={<Home />} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route path='contact' element={<Contact />} />
        </Route>

        <Route path='/dashboard' element={<ProtectedRoute>
            <SharedAdminLayout />
          </ProtectedRoute>
        }> 
          <Route index element={<Dashboard />} />
          {/* <Route path='dashboard' element={<Dashboard />} /> */}
        </Route>
        
        <Route path='*' element={<Error />} />
      </Routes>
      {/* <Outlet /> */}
      {/* <Footer /> */}
    </>
  );
}

function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default WrappedApp