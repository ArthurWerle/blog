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

/**
 * Parse the site's `MM-DD-YYYY` pubDate frontmatter into a Date.
 * Falls back to `new Date(value)` for ISO-ish strings.
 */
export function parsePubDate(value: string): Date {
  const match = /^(\d{2})-(\d{2})-(\d{4})$/.exec(value?.trim() ?? "")
  if (match) {
    const [, month, day, year] = match
    return new Date(Number(year), Number(month) - 1, Number(day))
  }
  return new Date(value)
}