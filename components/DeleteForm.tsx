import { deleteWorkout } from '@/utils/actions'
import DeleteButton from '@/components/DeleteButton'

const DeleteForm = (props: { date: string }) => {
  return (
    <form action={deleteWorkout}>
      <input
        type="hidden"
        name="timestamp"
        id="timestamp"
        value={props.date}
        className="hidden"
      />
      <DeleteButton className="py-2 px-12 border border-white/40 rounded-lg ml-4" />
    </form>
  )
}

export default DeleteForm
