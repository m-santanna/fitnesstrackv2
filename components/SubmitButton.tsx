import { useFormStatus } from 'react-dom'

export default function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      className={'border border-white/40 rounded-xl px-4 py-2 w-full'}
      disabled={pending}
    >
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  )
}
