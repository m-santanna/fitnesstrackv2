'use client'

import { useFormStatus } from 'react-dom'

interface DeleteButtonProps {
  className?: string
}

export default function DeleteButton(props: DeleteButtonProps) {
  const { pending } = useFormStatus()
  return (
    <button type="submit" className={props.className} disabled={pending}>
      {pending ? 'Deleting...' : 'Delete'}
    </button>
  )
}
