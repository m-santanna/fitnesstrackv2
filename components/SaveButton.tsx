'use client'
import { useFormStatus } from 'react-dom'

interface SaveButtonProps {
  className?: string
}

export default function SaveButton(props: SaveButtonProps) {
  const { pending } = useFormStatus()
  return (
    <button type="submit" className={props.className} disabled={pending}>
      {pending ? 'Saving...' : 'Save'}
    </button>
  )
}
