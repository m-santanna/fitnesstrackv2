import { getSetsByDay } from '@/utils/api'
import { format } from 'date-fns'

const SetsPage = async ({ params }) => {
  const sets = await getSetsByDay(params.date, params.id)
  console.log(sets)
  const workedOut = sets.length === 0 ? false : true
  return (
    <div>
      {!workedOut ? (
        <h1>
          You don't have any workouts on{' '}
          {format(new Date(params.date), 'MMMM do')} registered!
        </h1>
      ) : (
        <h1>Your workout on {format(new Date(params.date), 'MMMM do')}:</h1>
      )}
    </div>
  )
}

export default SetsPage
