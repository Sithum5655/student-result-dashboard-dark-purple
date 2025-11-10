import React from 'react'

const mockResults = [
  { id:1, student:'Alice', subject:'Math', marks:85 },
  { id:2, student:'Bob', subject:'Science', marks:78 },
  { id:3, student:'Chitra', subject:'English', marks:92 },
]

export default function Results(){
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Results</h2>
        <div className="flex items-center gap-2">
          <button className="btn-accent px-3 py-2 rounded">Add Result</button>
        </div>
      </div>

      <div className="card rounded p-3 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="text-xs text-gray-400">
            <tr><th>#</th><th>Student</th><th>Subject</th><th>Marks</th><th>Actions</th></tr>
          </thead>
          <tbody>
            {mockResults.map(r => (
              <tr key={r.id} className="border-t border-white/5">
                <td className="px-2 py-2">{r.id}</td>
                <td className="px-2 py-2">{r.student}</td>
                <td className="px-2 py-2">{r.subject}</td>
                <td className="px-2 py-2">{r.marks}</td>
                <td className="px-2 py-2">
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
