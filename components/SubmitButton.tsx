import { useFormStatus } from 'react-dom'

interface SubmitButtonProps {
  className?: string
}

export default function SubmitButton(props: SubmitButtonProps) {
  const { pending } = useFormStatus()
  return (
    <button type="submit" className={props.className} disabled={pending}>
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  )
}
