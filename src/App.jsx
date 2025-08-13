import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import AdminDashboard from './pages/AdminDashboard'
import ProtectedRoute from './components/ProtectedRoute '
import Navbar from './components/Navbar'
import GallerySection from './pages/galleryImages'
import DevDeepawaliInfo from './pages/DevDeepawaliInfo'
import TourPackagesPage from './pages/TourPackagesPage'
import Footer from './components/Footer'
import ContactPage from './pages/ContactPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route
          path='/admin-dashboard'
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
      
    </div>
  )
}

export default App
