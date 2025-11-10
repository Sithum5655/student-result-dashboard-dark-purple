import React, { useState } from 'react'

export default function AddStudent(){
  const [name,setName] = useState('')
  const [reg,setReg] = useState('')
  const [cls,setCls] = useState('')

  const submit = (e) => {
    e.preventDefault()
    alert('This is a static UI demo. Student would be saved to backend in real app.\n' + name + ' / ' + reg)
  }

  return (
    <div className="max-w-xl">
      <h2 className="text-lg font-semibold mb-3">Add Student</h2>
      <form onSubmit={submit} className="space-y-3 card p-4 rounded">
        <div>
          <label className="text-xs text-gray-300">Name</label>
          <input value={name} onChange={e=>setName(e.target.value)} className="w-full mt-1 px-3 py-2 rounded bg-transparent border border-white/5" />
        </div>
        <div>
          <label className="text-xs text-gray-300">Reg No</label>
          <input value={reg} onChange={e=>setReg(e.target.value)} className="w-full mt-1 px-3 py-2 rounded bg-transparent border border-white/5" />
        </div>
        <div>
          <label className="text-xs text-gray-300">Class</label>
          <input value={cls} onChange={e=>setCls(e.target.value)} className="w-full mt-1 px-3 py-2 rounded bg-transparent border border-white/5" />
        </div>
        <div className="flex items-center gap-2">
          <button className="btn-accent px-3 py-2 rounded">Save</button>
          <button type="button" className="px-3 py-2 rounded border border-white/5">Cancel</button>
        </div>
      </form>
    </div>
  )
}
