'use client'
import ArrowDown from '@/app/icons/ArrowDown'
import ArrowUp from '@/app/icons/ArrowUp'
import { useState } from 'react'

const CreateWorkoutSection = () => {
  const [hidden, setHidden] = useState(true)

  const createSetInput = () => {
    return (
      <div className="flex flex-col justify-center items-center">
        <input type="number" name="exercise" id="exercise" />
        <input type="text" name="weight" id="weight" />
        <input type="text" name="reps" id="reps" />
        <input type="text" name="sets" id="sets" />
      </div>
    )
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <button
        className="rounded-xl p-4 border border-white/40 flex items-center justify-center"
        onClick={() => {
          setHidden(!hidden)
        }}
      >
        <div className="mr-2">Create Workout</div>
        {hidden ? <ArrowDown /> : <ArrowUp />}
      </button>
      <form
        className={
          hidden ? 'hidden' : 'flex flex-col items-center justify-center'
        }
      >
        {createSetInput()}
      </form>
    </div>
  )
}

export default CreateWorkoutSection
