import React from 'react'
import { NavLink } from 'react-router-dom'

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({isActive}) => `flex items-center gap-3 p-2 rounded-md hover:bg-white/5 ${isActive ? 'bg-gradient-to-r from-purple-800 to-purple-700 text-white' : 'text-gray-300'}`}
    >
      {children}
    </NavLink>
  )
}

export default function Sidebar(){
  return (
    <div className="flex flex-col h-full">
      <div className="mb-6 px-2">
        <div className="text-xl font-bold text-white">EduPanel</div>
        <div className="text-xs text-gray-400 mt-1">Student Results</div>
      </div>

      <nav className="flex-1 space-y-1">
        <NavItem to="/">🏠 Dashboard</NavItem>
        <NavItem to="/students">👩‍🎓 Students</NavItem>
        <NavItem to="/results">📊 Results</NavItem>
        <NavItem to="/add">➕ Add Student</NavItem>
      </nav>

      <div className="mt-auto text-xs text-gray-500 px-2">
        <div>© 2025 EduPanel</div>
        <div className="text-[11px]">Version 0.1</div>
      </div>
    </div>
  )
}
