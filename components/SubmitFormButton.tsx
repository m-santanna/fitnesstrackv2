'use client'

interface SubmitFormButtonProps {
  buttonName: string
  className?: string
  pending: boolean
  log?: string
}

const SubmitFormButton = ({
  buttonName,
  className,
  pending,
  log,
}: SubmitFormButtonProps) => {
  console.log(log)
  return (
    <button className={className} type="submit" aria-disabled={pending}>
      {buttonName}
    </button>
  )
}

export default SubmitFormButton
