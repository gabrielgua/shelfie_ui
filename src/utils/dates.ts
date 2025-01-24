import { formatDate } from '@vueuse/core'

export const parseTime = (time: string) => {
  const [hours, minutes, seconds] = time.split(':').map(Number)
  const date = new Date()

  date.setHours(hours, minutes, seconds)
  return date
}

export const formatDateDefault = (date: Date) => {
  return formatDate(date, 'DD/MM/YYYY')
}
