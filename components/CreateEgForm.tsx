'use client'
import ArrowDown from '@/app/icons/ArrowDown'
import ArrowUp from '@/app/icons/ArrowUp'
import MinusCircle from '@/app/icons/MinusCircle'
import PlusCircle from '@/app/icons/PlusCircle'
import { createExerciseGroup } from '@/utils/api'
import { useUser } from '@clerk/nextjs'
import { useState, useEffect } from 'react'

const CreateEgForm = () => {
  const [hidden, setHidden] = useState(true)
  const { user } = useUser()
  const [exercises, setExercises] = useState(3)
  const [values, setValues] = useState(['', '', ''])

  const createInputByState = () => {
    const inputElements = []
    for (let i = 3; i < exercises; i++) {
      inputElements.push(
        <input
          key={i}
          type="text"
          name={`input${i}`}
          id={`input${i}`}
          placeholder={`Exercise #${i}`}
          className="p-2 mt-2 outline-none bg-stone-700 rounded-xl border-white/40 border w-[340px]"
          onChange={(e) => handleInputOnChange(i, e)} // Pass the index to the handler
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
    console.log(values)
  }

  const handleMinusIconClick = () => {
    if (exercises > 2) {
      setExercises(exercises - 1)
      setValues(values.slice(0, -1))
      console.log(values)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-full mb-4">
      <button
        className="rounded-xl p-4 border border-white/40 flex items-center justify-center w-[240px]"
        onClick={() => setHidden(!hidden)}
      >
        <div className="mr-2">Create Exercise Group</div>
        {hidden ? <ArrowDown /> : <ArrowUp />}
      </button>

      <div>
        <form
          className={
            hidden ? 'hidden' : 'flex flex-col items-center justify-center'
          }
        >
          <input
            type="text"
            className="p-2 mt-4 outline-none bg-stone-700 rounded-xl border-white/40 border w-[340px]"
            placeholder="Group's Name"
            id="input0"
            name="input0"
            value={values[0]}
            onChange={(e) => handleInputOnChange(0, e)}
          />
          <input
            type="text"
            className="p-2 mt-2 outline-none bg-stone-700 rounded-xl border-white/40 border w-[340px]"
            placeholder="Exercise #1"
            id="input1"
            name="input1"
            value={values[1]}
            onChange={(e) => handleInputOnChange(1, e)}
          />
          <input
            type="text"
            className="p-2 mt-2 outline-none bg-stone-700 rounded-xl border-white/40 border w-[340px]"
            placeholder="Exercise #2"
            id="input2"
            name="input2"
            value={values[2]}
            onChange={(e) => handleInputOnChange(2, e)}
          />
          {createInputByState()}

          <div className="flex items-center mx-4">
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
          <button className="hover:cursor-pointer border-white/40 border rounded-xl px-4 py-2">
            Create
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateEgForm
