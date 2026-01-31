export const saveToLocalStorage = <T>(key: string, data: T): boolean => {
    try {
        const serialized = JSON.stringify(data)
        localStorage.setItem(key, serialized)
        return true
    } catch (error) {
        if (error instanceof Error) {
            if (error.name === 'QuotaExceededError') {
                return false
            }
        }
        return false
    }
}

export const getFromLocalStorage = <T>(key: string): T | null => {
    try {
        const item = localStorage.getItem(key)

        if (!item) {
            return null
        }

        const parsed = JSON.parse(item) as T
        return parsed
    } catch (error) {
        return null
    }
}

export const removeFromLocalStorage = (key: string): boolean => {
    try {
        localStorage.removeItem(key)
        return true
    } catch (error) {
        return false
    }
}

export const clearLocalStorage = (): boolean => {
    try {
        localStorage.clear()
        return true
    } catch (error) {
        return false
    }
}

export const hasLocalStorageItem = (key: string): boolean => {
    try {
        const item = localStorage.getItem(key)

        if (item !== null) {
            return true
        }

        return false
    } catch (error) {
        return false
    }
}

export const getAllLocalStorageKeys = (): string[] => {
    try {
        const keys: string[] = []

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i)

            if (key !== null) {
                keys.push(key)
            }
        }

        return keys
    } catch (error) {
        return []
    }
}

export const getLocalStorageSize = (): number => {
    try {
        let total = 0

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i)

            if (key !== null) {
                const value = localStorage.getItem(key)

                if (value !== null) {
                    total += key.length + value.length
                }
            }
        }

        return total
    } catch (error) {
        return 0
    }
}