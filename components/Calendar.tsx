'use client'
import { format } from 'date-fns'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Calendar from 'react-calendar'

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

const Calendary = (userId: any) => {
  const [date, setDate] = useState<Value>(new Date())
  const router = useRouter()
  return (
    <div suppressHydrationWarning>
      <Calendar
        value={date}
        onChange={async (value) => {
          setDate(value)
          const date = format(value as Date, 'yyyy-MM-dd')

          router.push(`/dashboard/${userId.userId}/${date}`)
        }}
        className="p-4 border border-white/40 rounded-3xl"
        calendarType="gregory"
        tileClassName="p-2 hover:bg-stone-200/20 hover:rounded-full"
        formatShortWeekday={(locale, date) => format(date, 'eeeee')}
        next2Label={null}
        prev2Label={null}
      />
    </div>
  )
}

export default Calendary
