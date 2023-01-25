export function timestampToHumanUTC(timestamp: string): string {
  return new Date(addTime(timestamp)).toDateString()
}

export function timestampToHuman(timestamp: string): string {
  const date = new Date(addTime(timestamp))
  const month = dayOrMonthToString(date.getMonth() + 1)
  const day = dayOrMonthToString(date.getDate())

  return `${month}-${day}-${date.getFullYear()}`
}

export function dayOrMonthToString(dayOrMonth: number): string {
  if (dayOrMonth < 10) return `0${dayOrMonth}`

  else return `${dayOrMonth}`
}

export function addTime(timestamp: string): string {
  return timestamp.replace('T00', 'T12')
}