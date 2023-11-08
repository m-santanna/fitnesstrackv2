'use client'
import MinusCircle from '@/app/icons/MinusCircle'
import PlusCircle from '@/app/icons/PlusCircle'
import { useState } from 'react'

interface ExerciseInputProps {
  name?: string
}

const ExerciseInput = (props: ExerciseInputProps) => {
  const [name, setName] = useState(props.name || '')
  const [sets, setSets] = useState(1)
  const [weights, setWeights] = useState([''])
  const [reps, setReps] = useState([''])

  const createInputByState = () => {
    const inputDivs = []
    for (let i = 0; i < sets; i++) {
      inputDivs.push(
        <div className="flex justify-between items-center">
          <p className="mr-4 mt-2">{i + 1}.</p>
          <input
            required
            key={i}
            type="text"
            name={'currentWeight'}
            id={'currentWeight'}
            placeholder={`Weight`}
            className="p-2 mt-2 outline-none bg-stone-700 border-white/40 border"
            onChange={(e) => handleWeightChange(i, e)}
            value={weights[i]}
          />
          <input
            required
            key={i}
            type="text"
            name={'reps'}
            id={'reps'}
            placeholder={`Reps`}
            className="p-2 mt-2 outline-none bg-stone-700 border-white/40 border"
            onChange={(e) => handleRepsChange(i, e)}
            value={reps[i]}
          />
        </div>
      )
    }
    return inputDivs
  }

  const handleWeightChange = (index: number, event: any) => {
    const { value } = event.target
    const newValues = [...weights]
    newValues[index] = value
    setWeights(newValues)
  }

  const handleRepsChange = (index: number, event: any) => {
    const { value } = event.target
    const newValues = [...reps]
    newValues[index] = value
    setReps(newValues)
  }

  const handlePlusIconClick = () => {
    setSets(sets + 1)
    setWeights([...weights, ''])
    setReps([...reps, ''])
  }

  const handleMinusIconClick = () => {
    if (sets > 1) {
      setSets(sets - 1)
      setWeights(weights.slice(0, -1))
      setReps(reps.slice(0, -1))
    }
  }
  return (
    <div className="m-2">
      <input
        type="text"
        name="exerciseName"
        onChange={(e) => setName(e.target.value)}
        className="p-2 outline-none bg-stone-700 rounded-xl border-white/40 border"
        value={name}
      />
      {createInputByState()}
      <div className="flex justify-center items-center">
        <PlusCircle
          onClick={handlePlusIconClick}
          className="w-12 h-12 mx-2 hover:cursor-pointer"
        />
        <p className="cursor-default">/</p>
        <MinusCircle
          onClick={handleMinusIconClick}
          className="w-12 h-12 mx-2 hover:cursor-pointer"
        />
      </div>
    </div>
  )
}

export default ExerciseInput
