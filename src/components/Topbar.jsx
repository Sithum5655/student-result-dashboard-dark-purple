import React from 'react'

export default function Topbar(){
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-md text-gray-200 hover:bg-white/5 md:hidden">☰</button>
        <div className="text-lg font-semibold text-white">Dashboard</div>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden sm:block text-sm text-gray-300">Admin</div>
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center text-white">A</div>
      </div>
    </div>
  )
}
