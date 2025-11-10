import React, { useState } from 'react'

const mock = [
  { id:1, name:'Alice', reg_no:'A001', class:'10' },
  { id:2, name:'Bob', reg_no:'A002', class:'10' },
  { id:3, name:'Chitra', reg_no:'A003', class:'11' },
]

export default function Students(){
  const [q,setQ] = useState('')
  const [list,setList] = useState(mock)

  const filtered = list.filter(s => s.name.toLowerCase().includes(q.toLowerCase()) || s.reg_no.toLowerCase().includes(q.toLowerCase()))

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Students</h2>
        <div className="flex items-center gap-2">
          <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search by name or reg" className="bg-transparent border border-white/5 rounded px-3 py-2 text-sm" />
          <button className="btn-accent px-3 py-2 rounded">Add</button>
        </div>
      </div>

      <div className="card rounded p-3 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="text-xs text-gray-400">
            <tr><th>#</th><th>Name</th><th>Reg No</th><th>Class</th><th>Actions</th></tr>
          </thead>
          <tbody>
            {filtered.map(s => (
              <tr key={s.id} className="border-t border-white/5">
                <td className="px-2 py-2">{s.id}</td>
                <td className="px-2 py-2">{s.name}</td>
                <td className="px-2 py-2">{s.reg_no}</td>
                <td className="px-2 py-2">{s.class}</td>
                <td className="px-2 py-2">
                  <button className="text-sm text-blue-300 mr-2">Edit</button>
                  <button className="text-sm text-red-400">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
