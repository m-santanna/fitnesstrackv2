'use client'
import ArrowDown from '@/app/icons/ArrowDown'
import ArrowUp from '@/app/icons/ArrowUp'
import MinusCircle from '@/app/icons/MinusCircle'
import PlusCircle from '@/app/icons/PlusCircle'
import { useState } from 'react'
import SubmitFormButton from './SubmitFormButton'
import { useFormState } from 'react-dom'
import { createExerciseGroup } from '@/utils/actions'
import { useFormStatus } from 'react-dom'

const initialState = {
  message: null,
}

const CreateEgForm = () => {
  const [hidden, setHidden] = useState(true)
  const [exercises, setExercises] = useState(3)
  const [values, setValues] = useState(['', '', ''])
  const { pending } = useFormStatus()

  const [state, formAction] = useFormState(createExerciseGroup, initialState)

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
          className="p-2 mt-2 outline-none bg-stone-700 rounded-xl border-white/40 border w-[340px]"
          onChange={(e) => handleInputOnChange(i, e)} // Pass the index to the handler
          value={values[i]}
        />
      )
    }
    return inputElements
  }

  const clearInputs = () => {
    const emptyValues = values.map((newValue) => '')
    setValues(emptyValues)
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
    <div className="flex flex-col items-center justify-center w-full mb-4">
      <button
        className="rounded-xl p-4 border border-white/40 flex items-center justify-center w-3/5"
        onClick={() => {
          setHidden(!hidden)
          clearInputs()
        }}
      >
        <div className="mr-2">Create Exercise Group</div>
        {hidden ? <ArrowDown /> : <ArrowUp />}
      </button>

      <div>
        <form
          action={formAction}
          className={
            hidden ? 'hidden' : 'flex flex-col items-center justify-center'
          }
        >
          <input
            type="text"
            className="p-2 mt-4 outline-none bg-stone-700 rounded-xl border-white/40 border w-[340px]"
            placeholder="Group's Name"
            id="groupName"
            name="groupName"
            value={values[0]}
            onChange={(e) => handleInputOnChange(0, e)}
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
          <SubmitFormButton
            buttonName="Create"
            className="hover:cursor-pointer border-white/40 border rounded-xl px-4 py-2"
            pending={pending}
            log="pending"
          />
        </form>
      </div>
    </div>
  )
}

export default CreateEgForm
