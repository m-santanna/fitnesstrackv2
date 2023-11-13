import CreateWorkoutSection from '@/components/CreateWorkoutSection'
import DeleteForm from '@/components/DeleteForm'
import WorkoutSection from '@/components/WorkoutSection'
import { deleteWorkout } from '@/utils/actions'
import { getSetsByDay } from '@/utils/api'
import { format } from 'date-fns'
import Link from 'next/link'

const SetsPage = async ({
  params,
}: {
  params: {
    date: string
    userId: string
  }
}) => {
  const sets = await getSetsByDay(params.date, params.userId)
  const workedOut = sets.length === 0 ? false : true
  const heading = 'text-2xl flex justify-center items-center p-4 my-4'
  return (
    <div>
      {!workedOut ? (
        <>
          <h1 className={heading}>
            You don't have any workouts on{' '}
            {format(new Date(params.date), 'MMMM do')} registered!
          </h1>
          <CreateWorkoutSection params={params} />
        </>
      ) : (
        <>
          <h1 className={heading}>
            Your workout on {format(new Date(params.date), 'MMMM do')}:
          </h1>

          <div className="flex justify-center items-center w-full">
            <WorkoutSection sets={sets} />
          </div>

          <div className="flex justify-center items-center mt-6">
            <Link
              href={`/dashboard/${params.date}/edit`}
              className="py-2 px-12 border border-white/40 rounded-lg"
              children="Edit"
            />
            <DeleteForm date={params.date} />
          </div>
        </>
      )}
    </div>
  )
}

export default SetsPage
