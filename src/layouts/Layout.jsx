import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'

export default function Layout(){
  return (
    <div className="min-h-screen flex text-sm">
      <aside className="w-64 sidebar p-4 text-gray-300 hidden md:block">
        <Sidebar />
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="topbar p-3">
          <Topbar />
        </header>
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
