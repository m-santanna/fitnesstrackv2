'use client'
import ArrowDown from '@/app/icons/ArrowDown'
import ArrowUp from '@/app/icons/ArrowUp'
import { useState } from 'react'
import ExerciseInput from './ExerciseInput'
import SubmitButton from './SubmitButton'

const CreateWorkoutSection = () => {
  const [hidden, setHidden] = useState(true)
  const [exercises, setExercises] = useState(1)

  const handleAddClick = () => {
    setExercises(exercises + 1)
  }

  const handleRemoveClick = () => {
    if (exercises > 1) {
      setExercises(exercises - 1)
    }
  }

  const renderExerciseInputs = () => {
    const exerciseInputs = []
    for (let i = 0; i < exercises; i++) {
      exerciseInputs.push(<ExerciseInput />)
    }
    return exerciseInputs
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <button
        className="rounded-xl p-4 mb-6 border border-white/40 flex items-center justify-center"
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
        {renderExerciseInputs()}
        <div className="flex justify-center items-center w-full">
          <div
            onClick={handleAddClick}
            className="w-1/2 p-2 border text-center border-white/40 hover:cursor-pointer"
          >
            Add New
          </div>
          <div
            onClick={handleRemoveClick}
            className="w-1/2 p-2 border text-center border-white/40 hover:cursor-pointer"
          >
            Remove Last
          </div>
        </div>
        <SubmitButton className="border border-white/40 px-4 py-2 w-full" />
      </form>
    </div>
  )
}

export default CreateWorkoutSection
