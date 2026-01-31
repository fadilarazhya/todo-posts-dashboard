export const StorageKey = {
    TODOS: 'todos_app_data',
    USER_PREFERENCES: 'user_preferences',
    LAST_FILTER: 'last_filter',
} as const

export type StorageKeyValue = typeof StorageKey[keyof typeof StorageKey]