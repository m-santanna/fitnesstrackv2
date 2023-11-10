'use client'
import ArrowDown from '@/app/icons/ArrowDown'
import ArrowUp from '@/app/icons/ArrowUp'
import { useState } from 'react'
import ExerciseInput from './ExerciseInput'
import SubmitButton from './SubmitButton'

const CreateWorkoutSection = () => {
  const [hidden, setHidden] = useState(true)
  const [exercises, setExercises] = useState(1)
  const [disabledRemove, setDisabledRemove] = useState(true)

  const handleAddClick = () => {
    setExercises(exercises + 1)
    setDisabledRemove(false)
  }

  const handleRemoveClick = () => {
    if (exercises > 2) {
      setExercises(exercises - 1)
    } else if (exercises === 2) {
      setExercises(exercises - 1)
      setDisabledRemove(true)
    } else {
      setDisabledRemove(true)
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
        className="rounded-xl p-4 mb-6 border border-white/40 flex items-center justify-center hover:text-white/80 hover:border-white/20"
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
            className={
              disabledRemove
                ? 'w-full p-2 border text-center border-white/40 hover:cursor-pointer hover:text-white/80 hover:border-white/10'
                : 'w-1/2 p-2 border text-center border-white/40 hover:cursor-pointer hover:text-white/80 hover:border-white/10'
            }
          >
            {disabledRemove ? 'Add New Exercise' : 'Add New'}
          </div>
          <div
            onClick={handleRemoveClick}
            className={
              disabledRemove
                ? 'text-transparent hidden'
                : 'w-1/2 p-2 border text-center border-white/40 hover:cursor-pointer hover:text-white/80 hover:border-white/10'
            }
          >
            Remove Last
          </div>
        </div>
        <SubmitButton className="border border-white/40 px-4 py-2 w-full hover:text-white/80 hover:border-white/10" />
      </form>
    </div>
  )
}

export default CreateWorkoutSection
