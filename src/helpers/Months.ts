export enum MonthsEnum {
  JANEIRO = 0,
  FEVEREIRO = 1,
  MARÇO = 2,
  ABRIL = 3,
  MAIO = 4,
  JUNHO = 5,
  JULHO = 6,
  AGOSTO = 7,
  SETEMBRO = 8,
  OUTUBRO = 9,
  NOVEMBRO = 10,
  DEZEMBRO = 11
}
export enum DaysEnum {
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