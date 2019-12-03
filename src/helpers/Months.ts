export enum MonthsEnum { //monthIndex, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
  Janeiro = 0,
  Fevereiro = 1,
  Março = 2,
  Abril = 3,
  Maio = 4,
  Junho = 5,
  Julho = 6,
  Agosto = 7,
  Setembro = 8,
  Outubro = 9,
  Novembro = 10,
  Dezembro = 11
}
export enum DaysEnum { //dayIndex, https://momentjs.com/docs/#/get-set/day/ 
  DOMINGO = 0,
  SEGUNDA = 1,
  TERCA = 2,
  QUARTA = 3,
  QUINTA = 4,
  SEXTA = 5,
  SÁBADO = 6
}

export const getAllMonths = () => {
  return Object.keys(MonthsEnum).filter(prop => {
    return isNaN(+prop) && prop.toString()
  })
}
export const getMonth = (month) => {
  return !!MonthsEnum[month] && MonthsEnum[month].toString();
}
export const getAllDays = () => {
  return Object.keys(DaysEnum).filter(prop => {
    return isNaN(+prop) && prop.toString()
  })
}
export const getDay = (day) => {
  return !!DaysEnum[day] && DaysEnum[day].toString();
}