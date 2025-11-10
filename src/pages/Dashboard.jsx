import React from 'react'

const stats = [
  { title: 'Total Students', value: 128 },
  { title: 'Average Marks', value: '72.4%' },
  { title: 'Passed', value: 110 },
  { title: 'Failed', value: 18 },
]

export default function Dashboard(){
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(s => (
          <div key={s.title} className="card p-4 rounded-lg">
            <div className="text-xs text-gray-400">{s.title}</div>
            <div className="text-2xl font-bold mt-2">{s.value}</div>
            <div className="text-xs text-gray-500 mt-1">Updated just now</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <div className="card p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Recent Results</h3>
          <table className="w-full text-left text-sm">
            <thead className="text-xs text-gray-400">
              <tr><th>Student</th><th>Subject</th><th>Marks</th></tr>
            </thead>
            <tbody>
              <tr className="border-t border-white/5"><td>Alice</td><td>Math</td><td>85</td></tr>
              <tr className="border-t border-white/5"><td>Bob</td><td>Science</td><td>78</td></tr>
              <tr className="border-t border-white/5"><td>Chitra</td><td>English</td><td>92</td></tr>
            </tbody>
          </table>
        </div>

        <div className="card p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Quick Actions</h3>
          <div className="flex flex-col gap-2">
            <button className="btn-accent px-3 py-2 rounded">Add Student</button>
            <button className="px-3 py-2 rounded border border-white/5">Import CSV</button>
            <button className="px-3 py-2 rounded border border-white/5">Export CSV</button>
          </div>
        </div>
      </div>
    </div>
  )
}
