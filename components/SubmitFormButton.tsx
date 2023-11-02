'use client'
import { useFormStatus } from 'react-dom'

interface SubmitFormButtonProps {
  buttonName: string
  className?: string
}

const SubmitFormButton = ({ buttonName, className }: SubmitFormButtonProps) => {
  const { pending } = useFormStatus()
  return (
    <button className={className} type="submit" aria-disabled={pending}>
      {buttonName}
    </button>
  )
}

export default SubmitFormButton
