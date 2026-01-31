import { API_CONFIG } from "@/src/config/api"


export class FetchError extends Error {
    status?: number
    response?: Response

    constructor(
        message: string,
        status?: number,
        response?: Response
    ) {
        super(message)
        this.name = 'FetchError'
        this.status = status
        this.response = response
    }
}

interface FetchOptions extends RequestInit {
    timeout?: number
    baseURL?: string
}

export const fetchJSON = async <T>(
    url: string,
    options: FetchOptions = {}
): Promise<T> => {
    const {
        timeout = API_CONFIG.timeout,
        baseURL = API_CONFIG.baseURL,
        ...fetchOptions
    } = options

    const fullURL = url.startsWith('http') ? url : `${baseURL}${url}`

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), timeout)

    try {
        const response = await fetch(fullURL, {
            ...fetchOptions,
            signal: controller.signal,
        })

        clearTimeout(timeoutId)

        if (!response.ok) {
            throw new FetchError(
                `HTTP error! status: ${response.status}`,
                response.status,
                response
            )
        }

        const data = await response.json()
        return data as T
    } catch (error) {
        clearTimeout(timeoutId)

        if (error instanceof FetchError) {
            throw error
        }

        if (error instanceof Error) {
            if (error.name === 'AbortError') {
                throw new FetchError('Request timeout')
            }

            if (error.message.includes('Failed to fetch')) {
                throw new FetchError('Network error. Please check your connection.')
            }

            throw new FetchError(error.message)
        }

        throw new FetchError('Unknown error occurred')
    }
}

export const get = async <T>(url: string, options?: FetchOptions): Promise<T> => {
    return fetchJSON<T>(url, {
        ...options,
        method: 'GET',
    })
}

export const post = async <T, D = unknown>(
    url: string,
    data: D,
    options?: FetchOptions
): Promise<T> => {
    return fetchJSON<T>(url, {
        ...options,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers,
        },
        body: JSON.stringify(data),
    })
}

export const put = async <T, D = unknown>(
    url: string,
    data: D,
    options?: FetchOptions
): Promise<T> => {
    return fetchJSON<T>(url, {
        ...options,
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers,
        },
        body: JSON.stringify(data),
    })
}

export const del = async <T>(url: string, options?: FetchOptions): Promise<T> => {
    return fetchJSON<T>(url, {
        ...options,
        method: 'DELETE',
    })
}

export const isFetchError = (error: unknown): error is FetchError => {
    if (error instanceof FetchError) {
        return true
    }
    return false
}

export const getErrorMessage = (error: unknown): string => {
    if (isFetchError(error)) {
        return error.message
    }

    if (error instanceof Error) {
        return error.message
    }

    return 'An unknown error occurred'
}