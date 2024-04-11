export interface TimeData {
    datetime: string
    day_of_week: number
    day_of_year: number
    timezone: string
    week_number: number
}

export type TimeOfDay = 'morning' | 'day' | 'afternoon' | 'night'