'use client'
import { createExerciseGroup } from '@/utils/actions'
import { useState } from 'react'
import MinusCircle from '@/app/icons/MinusCircle'
import PlusCircle from '@/app/icons/PlusCircle'

const EGForm = () => {
  const [exercises, setExercises] = useState(3)
  const [values, setValues] = useState(['', '', ''])

  const createInputByState = () => {
    const inputElements = []
    for (let i = 1; i < exercises; i++) {
      inputElements.push(
        <input
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
  }

  const handleMinusIconClick = () => {
    if (exercises > 3) {
      setExercises(exercises - 1)
      setValues(values.slice(0, -1))
    }
  }
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl my-8">Exercise Group Info</h1>
      <form action={createExerciseGroup} className="flex flex-col w-96">
        <input
          type="text"
          className="p-2 mt-4 outline-none bg-stone-700 rounded-xl border-white/40 border"
          placeholder="Group's Name"
          id="groupName"
          name="groupName"
          value={values[0]}
          onChange={(e) => handleInputOnChange(0, e)}
        />

        {createInputByState()}

        <div className="flex justify-center items-center mt-2 mx-4">
          <PlusCircle
            className="w-12 h-12 mr-2 hover:cursor-pointer"
            onClick={handlePlusIconClick}
          />
          <div className=" cursor-default">/</div>
          <MinusCircle
            className={'w-12 h-12 ml-2 hover:cursor-pointer'}
            onClick={handleMinusIconClick}
          />
        </div>
        <button
          type="submit"
          className="border border-white/40 rounded-3xl p-2 m-2"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default EGForm
