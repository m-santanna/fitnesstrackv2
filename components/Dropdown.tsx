'use client'
import { useState } from 'react'

const Dropdown = ({ name, exercises, className }: any) => {
  const [hidden, setHidden] = useState(false)
  return (
    <div className={className}>
      <button
        className="p-2 border border-white/40 rounded-3xl"
        onClick={() => {
          setHidden(!hidden)
        }}
      >
        {name}
      </button>
      <div className={hidden ? 'hidden' : 'block' + 'w-full'}>
        {exercises.map((exercise: any) => (
          <div className="p-2 border border-white/40 rounded-3xl">
            {exercise}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dropdown
