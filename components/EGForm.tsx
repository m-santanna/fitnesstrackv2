'use client'
import { createExerciseGroup } from '@/utils/actions'
import { useState } from 'react'
import MinusCircle from '@/app/icons/MinusCircle'
import PlusCircle from '@/app/icons/PlusCircle'
import SubmitButton from './SubmitButton'

const EGForm = () => {
  const [exercises, setExercises] = useState(3)
  const [values, setValues] = useState(['', '', ''])
  const [disabledMinus, setDisabledMinus] = useState(true)

  const createInputByState = () => {
    const inputElements = []
    for (let i = 1; i < exercises; i++) {
      inputElements.push(
        <input
          required
          key={i}
          type="text"
          name={'exercisesName'}
          id={'exercisesName'}
          placeholder={`Exercise #${i}`}
          className="p-2 mt-2 outline-none bg-stone-700 rounded-xl border-white/40 border"
          onChange={(e) => handleInputOnChange(i, e)}
          value={values[i]}
        />
      )
    }
    return inputElements
  }

  const handleInputOnChange = (index: number, event: any) => {
    const { value } = event.target
    const newValues = [...values]
    newValues[index] = value
    setValues(newValues)
  }

  const handlePlusIconClick = () => {
    setExercises(exercises + 1)
    setValues([...values, ''])
    setDisabledMinus(false)
  }

  const handleMinusIconClick = () => {
    if (exercises > 4) {
      setExercises(exercises - 1)
      setValues(values.slice(0, -1))
    } else if (exercises === 4) {
      setExercises(exercises - 1)
      setValues(values.slice(0, -1))
      setDisabledMinus(true)
    } else {
      setDisabledMinus(true)
    }
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl my-8">Exercise Group Info</h1>
      <form action={createExerciseGroup} className="flex flex-col w-96">
        <input
          required
          type="text"
          className="p-2 mt-4 outline-none bg-stone-700 rounded-xl border-white/40 border"
          placeholder="Group's Name"
          id="groupName"
          name="groupName"
          value={values[0]}
          onChange={(e) => handleInputOnChange(0, e)}
        />

        {createInputByState()}

        <div className="flex justify-center items-center mx-4">
          <PlusCircle
            className={
              disabledMinus
                ? 'w-12 h-12 hover:cursor-pointer hover:text-white/80'
                : 'w-12 h-12 mx-2 hover:cursor-pointer hover:text-white/80'
            }
            onClick={handlePlusIconClick}
          />
          <MinusCircle
            className={
              disabledMinus
                ? 'text-transparent hidden'
                : 'w-12 h-12 mx-2 hover:cursor-pointer hover:text-white/80'
            }
            onClick={handleMinusIconClick}
          />
        </div>
        <SubmitButton className="border border-white/40 rounded-xl px-4 py-2 w-full" />
      </form>
    </div>
  )
}

export default EGForm
