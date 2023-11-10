'use client'
import { useState } from 'react'

const Dropdown = ({ name, exercises, className }: any) => {
  const [hidden, setHidden] = useState(true)
  const [values, setValues] = useState(exercises)
  console.log(values)
  return (
    <div className={className}>
      <button
        className="p-2 border border-white/40 rounded-xl w-11/12 mx-10 hover:text-white/80 hover:bg-stone-950"
        onClick={() => {
          setHidden(!hidden)
        }}
      >
        {name}
      </button>
      <form
        className={hidden ? 'hidden' : 'block border-b border-white/40 w-10/12'}
      >
        {exercises.map((exercise: any) => (
          <input
            name={exercise}
            type="text"
            value={exercise}
            className="p-2 outline-none border-x bg-stone-700 border-white/40 w-full"
            onChange={(e) => {
              const newValues = values.map((value: any) => {
                if (value === exercise) {
                  return e.target.value
                }
                return value
              })
              setValues(newValues)
            }}
          />
        ))}
      </form>
    </div>
  )
}

export default Dropdown
