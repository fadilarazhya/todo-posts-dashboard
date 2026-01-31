export const LoadingMessage = {
    DEFAULT: 'Loading',
    FETCHING_POSTS: 'Fetching posts',
    FETCHING_COMMENTS: 'Loading comments',
} as const

export const ErrorMessage = {
    GENERIC: 'Something went wrong. Please try again.',
    NETWORK: 'Network error. Please check your connection.',
    NOT_FOUND: 'Resource not found.',
    TIMEOUT: 'Request timeout. Please try again.',
} as const

export const EmptyMessage = {
    NO_TODOS: 'No todos yet. Add your first task!',
    NO_POSTS: 'No posts found.',
    NO_COMMENTS: 'No comments available.',
    NO_RESULTS: 'No results found for your search.',
} as const

export type LoadingMessageValue = typeof LoadingMessage[keyof typeof LoadingMessage]
export type ErrorMessageValue = typeof ErrorMessage[keyof typeof ErrorMessage]
export type EmptyMessageValue = typeof EmptyMessage[keyof typeof EmptyMessage]