export enum MonthsEnum {
  JANEIRO = 1,
  FEVEREIRO = 2,
  MARÇO = 3,
  ABRIL = 4,
  MAIO = 5,
  JUNHO = 6,
  JULHO = 7,
  AGOSTO = 8,
  SETEMBRO = 9,
  OUTUBRO = 10,
  NOVEMBRO = 11,
  DEZEMBRO = 12
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