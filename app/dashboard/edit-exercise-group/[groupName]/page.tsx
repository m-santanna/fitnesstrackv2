import SaveButton from '@/components/SaveButton'
import { updateExerciseGroup } from '@/utils/actions'
import { getExerciseGroup } from '@/utils/api'
import { getUserByClerkId } from '@/utils/auth'

const editExerciseGroup = async ({
  params,
}: {
  params: { groupName: string }
}) => {
  const exercisesInput = (exerciseGroup: any) => {
    const exercisesArray = []
    for (let i = 0; i < exerciseGroup.exercisesName.length; i++) {
      exercisesArray.push(
        <input
          required
          type="text"
          className="p-2 mt-4 outline-none bg-stone-700 rounded-xl border-white/40 border font-light w-full"
          placeholder="Exercise's Name"
          id="exercisesName"
          name="exercisesName"
          defaultValue={exerciseGroup.exercisesName[i]}
        />
      )
    }
    return exercisesArray
  }

  const user = await getUserByClerkId()
  const exerciseGroup = await getExerciseGroup(params.groupName, user.id)
  console.log(exerciseGroup)
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl my-8">Exercise Group Info</h1>
      <form
        action={updateExerciseGroup}
        className="flex flex-col items-center w-96"
      >
        <input
          type="hidden"
          name="exerciseGroupId"
          id="exerciseGroupId"
          value={exerciseGroup.id}
        />
        <input
          required
          type="text"
          className="p-2 mt-4 outline-none bg-stone-700 rounded-xl border-white/40 border text-center w-1/2"
          placeholder="Group Name"
          id="groupName"
          name="groupName"
          defaultValue={params.groupName}
        />
        {exercisesInput(exerciseGroup)}
        <SaveButton className="border border-white/40 rounded-xl mt-8 px-4 py-2 w-full" />
      </form>
    </div>
  )
}

export default editExerciseGroup
