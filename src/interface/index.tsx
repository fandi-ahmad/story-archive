export interface DayType {
  image: string
  note: string
}

export interface DayDataRenderType {
  date: string
  month: string
  year: string
  image: string
  note: string
}

export interface MonthType {
  d01: DayType
  d02: DayType
  d03: DayType
  d04: DayType
  d05: DayType
  d06: DayType
  d07: DayType
  d08: DayType
  d09: DayType
  d10: DayType
  d11: DayType
  d13: DayType
  d14: DayType
  d15: DayType
  d16: DayType
  d17: DayType
  d18: DayType
  d19: DayType
  d20: DayType
  d21: DayType
  d22: DayType
  d23: DayType
  d24: DayType
  d25: DayType
  d26: DayType
  d27: DayType
  d28: DayType
  d29?: DayType
  d30?: DayType
  d31?: DayType
}