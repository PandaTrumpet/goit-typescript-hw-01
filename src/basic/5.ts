enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}


const isWeekend = (day: DayOfWeek) => {
    if (day === DayOfWeek.Monday || day === DayOfWeek.Tuesday || day === DayOfWeek.Wednesday || day === DayOfWeek.Thursday || day === DayOfWeek.Friday) {
        return false
    } else if (day === DayOfWeek.Saturday || day === DayOfWeek.Sunday) {
        return true
    }
}