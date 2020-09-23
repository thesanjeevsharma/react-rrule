export const getUTCDate = (date) => {
  const d = new Date(date)
  return new Date(
    Date.UTC(
      d.getUTCFullYear(),
      d.getUTCMonth(),
      d.getUTCDate(),
      d.getUTCHours(),
      d.getUTCMinutes(),
      d.getUTCSeconds()
    )
  )
}

const getFreq = (freq) => {
  switch (freq) {
    case 0:
      return 'YEARLY'
    case 1:
      return 'MONTHLY'
    case 2:
      return 'WEEKLY'
    case 3:
      return 'DAILY'
    case 4:
      return 'HOURLY'
    case 5:
      return 'MINUTELY'
    case 6:
      return 'SECONDLY'
    default:
      return 'MONTHLY'
  }
}

const getWkst = (wkst) => {
  switch (wkst) {
    case 0:
      return 'MO'
    case 1:
      return 'TU'
    case 2:
      return 'WE'
    case 3:
      return 'TH'
    case 4:
      return 'FR'
    case 5:
      return 'SA'
    case 6:
      return 'SU'
    default:
      return 'MO'
  }
}

const getByweekday = (byweekday) => {
  // if (byweekday.length > 1) {
  return byweekday.map((day) => `${day}`)
  // } else {
  //   return `RRule.${byweekday[0]}`
  // }
}

export const getPSQLRule = (rule) => {
  const master = {}
  const object = { ...rule }

  delete object.dtstart
  delete object.until

  object.freq = getFreq(object.freq)
  object.wkst = getWkst(object.wkst)
  if (object.byweekday?.length) {
    object.byday = getByweekday(object.byweekday)
    delete object.byweekday
  }

  master.rrule = object

  if (rule.dtstart) {
    master.dtstart = `${rule.dtstart.getFullYear()}-${
      rule.dtstart.getMonth() + 1
    }-${rule.dtstart.getDate()}`
  }
  if (rule.until) {
    master.dtend = `${rule.until.getFullYear()}-${
      rule.until.getMonth() + 1
    }-${rule.until.getDate()}`
  }
  return master
}
