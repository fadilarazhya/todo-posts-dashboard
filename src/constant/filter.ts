export const FilterType = {
    ALL: 'all',
    COMPLETED: 'completed',
    PENDING: 'pending',
} as const

export type FilterTypeValue = typeof FilterType[keyof typeof FilterType]

export const isValidFilter = (value: string): value is FilterTypeValue => {
    return Object.values(FilterType).includes(value as FilterTypeValue)
}