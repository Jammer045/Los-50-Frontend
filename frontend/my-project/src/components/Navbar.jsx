import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/download.jpeg'

const Navbar = () => {
  return (
    <nav className="bg-purple-600 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <img src={logo} alt="Logo" className="w-12 h-12 rounded-full" />
          <Link to="/" className="text-2xl font-bold">Los 50´s</Link>
          <div className="space-x-4">
            <Link to="/" className="hover:text-purple-200 transition">Inicio</Link>
            <Link to="/about" className="hover:text-purple-200 transition">Acerca de</Link>
            {/* Más enlaces según necesites */}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar