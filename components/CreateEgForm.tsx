'use client'
import ArrowDown from '@/app/icons/ArrowDown'
import ArrowUp from '@/app/icons/ArrowUp'
import MinusCircle from '@/app/icons/MinusCircle'
import PlusCircle from '@/app/icons/PlusCircle'
import { useState } from 'react'

const CreateEgForm = () => {
  const [hidden, setHidden] = useState(true)
  const [exercisesInput, setExercisesInput] = useState([
    {
      type: 'text',
      name: 'groupName',
      id: 'groupName',
      placeholder: "Group's Name",
      className:
        'p-2 mt-4 outline-none bg-stone-700 rounded-xl border-white/40 border w-[340px]',
      value: '',
    },
    {
      type: 'text',
      name: 'Exercise1',
      id: 'Exercise1',
      placeholder: 'Exercise #1',
      className:
        'p-2 mt-2 outline-none bg-stone-700 rounded-xl border-white/40 border w-[340px]',
      value: '',
    },
    {
      type: 'text',
      name: 'Exercise2',
      id: 'Exercise2',
      placeholder: 'Exercise #2',
      className:
        'p-2 mt-2 outline-none bg-stone-700 rounded-xl border-white/40 border w-[340px]',
      value: '',
    },
  ])

  const inputOnChangeHandle = (e: any) => {
    const { name, value } = e.target
    setExercisesInput(
      exercisesInput.map((input) => {
        if (input.name === name) {
          return {
            ...input,
            value,
          }
        }
        return input
      })
    )
    console.log(exercisesInput)
  }

  const handleSubmit = () => {
    console.log(exercisesInput)
  }

  const handlePlusIconClick = () => {
    setExercisesInput([
      ...exercisesInput,
      {
        type: 'text',
        name: `Exercise${exercisesInput.length}`,
        id: `Exercise${exercisesInput.length}`,
        placeholder: `Exercise #${exercisesInput.length}`,
        className:
          'p-2 mt-2 outline-none bg-stone-700 rounded-xl border-white/40 border w-[340px]',
        value: '',
      },
    ])
  }

  const handleMinusIconClick = () => {
    if (exercisesInput.length > 3) {
      setExercisesInput([...exercisesInput.slice(0, -1)])
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
          {exercisesInput.map((exercise) => (
            <input
              {...exercise}
              key={exercise.id}
              onChange={inputOnChangeHandle}
            />
          ))}

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
          <button
            className="hover:cursor-pointer border-white/40 border rounded-xl px-4 py-2"
            onClick={handleSubmit}
          >
            Create
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateEgForm
