import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import { AuthProvider } from './contexts/AuthContextSimple'
import ProtectedRoute from './components/auth/ProtectedRoute'
import Login from './features/auth/components/Login'
import UserProfilePage from './components/user/UserProfilePage'
import FirebaseTest from './components/debug/FirebaseTest'
import AuthDebug from './components/auth/AuthDebug'
import SimpleTest from './components/debug/SimpleTest'
import Header from './components/layout/Header'
import Navigation from './components/layout/Navigation'
import Hero from './components/ui/Hero'
import ProductCategories from './components/products/ProductCategories'
import FeaturedProducts from './components/products/FeaturedProducts'
import Newsletter from './components/ui/Newsletter'
import Footer from './components/layout/Footer'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/simple" element={<SimpleTest />} />
            <Route path="/test" element={<FirebaseTest />} />
            <Route path="/debug" element={<AuthDebug />} />
            <Route path="/login" element={<Login />} />
            <Route 
              path="/profile" 
              element={
                <ProtectedRoute>
                  <UserProfilePage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/" 
              element={
                <ProtectedRoute>
                  <>
                    <Header />
                    <Navigation />
                    <main>
                      <Hero />
                      <ProductCategories />
                      <FeaturedProducts />
                      <Newsletter />
                    </main>
                    <Footer />
                  </>
                </ProtectedRoute>
              } 
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
