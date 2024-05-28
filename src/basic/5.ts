// enum DayOfWeek {
//   Monday = "active",
//   Tuesday = "active",
//   Wednesday = "active",
//   Thursday = "active",
//   Friday = "active",
//   Saturday = "free",
//   Sunday = "free",
// }

// const isWeekend = (day: DayOfWeek): boolean => {
//   if (day === "active") {
//     return true;
//   } else if (day === "free") {
//     return false;
//   }
// };

enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
const isWeekend = (day: DayOfWeek) => {
  if (
    day === DayOfWeek.Saturday || day === DayOfWeek.Sunday)
   {
    return true
  } else  {
    return false;
  }
};
