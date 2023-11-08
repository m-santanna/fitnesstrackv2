'use client'
import ArrowDown from '@/app/icons/ArrowDown'
import ArrowUp from '@/app/icons/ArrowUp'
import { useState } from 'react'
import ExerciseInput from './ExerciseInput'

const CreateWorkoutSection = () => {
  const [hidden, setHidden] = useState(true)

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
        <ExerciseInput />
      </form>
    </div>
  )
}

export default CreateWorkoutSection
