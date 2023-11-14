'use client'
import { deleteExerciseGroup } from '@/utils/actions'
import { useState } from 'react'
import DeleteButton from './DeleteButton'
import Link from 'next/link'

const Dropdown = ({ name, exercises, className }: any) => {
  const [hidden, setHidden] = useState(true)
  const [values, setValues] = useState(exercises)
  console.log(values)
  const renderExercises = () => {
    const exercisesInput = []
    for (let i = 0; i < exercises.length; i++) {
      exercisesInput.push(
        <input
          name="exercisesName"
          type="text"
          defaultValue={exercises[i]}
          className="p-2 outline-none border-x bg-stone-700 border-white/40 w-full font-light"
          onChange={(e) => {
            const newValues = values.map((value: any) => {
              if (value === exercises[i]) {
                return e.target.value
              }
              return value
            })
            setValues(newValues)
          }}
        />
      )
    }
    return exercisesInput
  }
  return (
    <div className={className}>
      <button
        className="p-2 border border-white/40 rounded-sm w-11/12 mx-10 hover:text-white/80 hover:bg-stone-950"
        onClick={() => {
          setHidden(!hidden)
        }}
      >
        {name}
      </button>
      <form
        action={deleteExerciseGroup}
        className={hidden ? 'hidden' : 'block border-b border-white/40 w-10/12'}
      >
        <input type="hidden" name="groupName" value={name} />
        {renderExercises()}
        <div className="flex justify-center items-center">
          <Link
            className="border-white/40 bg-stone-700 border-t border-x py-2 px-8 w-full hover:bg-stone-800 text-center"
            href={`/dashboard/edit-exercise-group/${name}`}
            onClick={() => setHidden(true)}
          >
            Edit
          </Link>
          <DeleteButton className="border-white/40 bg-stone-700 border-t border-r py-2 px-8 w-full hover:bg-stone-800" />
        </div>
      </form>
    </div>
  )
}

export default Dropdown
