import SaveButton from '@/components/SaveButton'
import { editWorkout } from '@/utils/actions'
import { getSetsByDay } from '@/utils/api'

const EditWorkoutSection = async ({ params }: any) => {
  const sets = await getSetsByDay(params.date, params.userId)
  console.log(sets)

  const createInputBySet = (set: any) => {
    const inputDivs = []
    for (let i = 0; i < set.reps.length; i++) {
      inputDivs.push(
        <div className="flex components-background">
          <p className="mx-4 mt-2 proportional-nums">{i + 1}.</p>
          <input
            type="hidden"
            name="setCount"
            id="setCount"
            value={set.reps.length}
          />
          <input
            required
            key={i}
            type="number"
            name={'currentWeight'}
            id={'currentWeight'}
            placeholder={`Weight`}
            className="p-2 outline-none bg-stone-700 border-white/40 border"
            defaultValue={set.currentWeight[i]}
          />
          <input
            required
            key={i}
            type="number"
            name={'reps'}
            id={'reps'}
            placeholder={`Reps`}
            className="p-2 outline-none bg-stone-700 border-white/40 border"
            defaultValue={set.reps[i]}
          />
        </div>
      )
    }
    return inputDivs
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl flex justify-center items-center p-4 my-4">
        Edit Workout:
      </h1>
      <form
        action={editWorkout}
        className="flex justify-center items-center flex-col"
      >
        {sets.map((set: any, i: number) => {
          return (
            <div className="flex flex-col items-center">
              <input
                type="hidden"
                name="timestamp"
                id="timestamp"
                value={params.date}
                className="hidden"
              />
              <input
                required
                type="text"
                name="exerciseName"
                placeholder={`Exercise Name`}
                className="p-2 outline-none bg-stone-700 w-full border-white/40 border"
                defaultValue={set.exerciseName}
              />
              {createInputBySet(set)}
            </div>
          )
        })}
        <SaveButton className="border-white border py-2 px-8 mt-8 rounded-lg" />
      </form>
    </div>
  )
}

export default EditWorkoutSection
