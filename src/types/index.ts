import type { ReactNode } from 'react'
import type { FilterTypeValue } from '@/src/constant/filter'

export interface AsyncState {
    isLoading: boolean
    error: string | null
}

export interface PaginationState {
    currentPage: number
    totalPages: number
    itemsPerPage: number
    totalItems: number
}


export interface ChildrenProps {
    children: ReactNode
}

export interface ClassNameProps {
    className?: string
}

export interface BaseComponentProps extends ClassNameProps {
    testId?: string
}


export interface LoadingStateProps extends BaseComponentProps {
    message?: string
}

export interface EmptyStateProps extends BaseComponentProps {
    title?: string
    message: string
    icon?: ReactNode
    action?: ReactNode
}

export interface ErrorStateProps extends BaseComponentProps {
    title?: string
    message: string
    onRetry?: () => void
    retryLabel?: string
}


export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends BaseComponentProps {
    children: ReactNode
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset'
    variant?: ButtonVariant
    size?: ButtonSize
    disabled?: boolean
    isLoading?: boolean
}


export interface InputProps extends BaseComponentProps {
    value: string
    onChange: (value: string) => void
    placeholder?: string
    type?: 'text' | 'number' | 'email' | 'password'
    disabled?: boolean
    autoFocus?: boolean
    maxLength?: number
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
}


export interface CardProps extends BaseComponentProps {
    children: ReactNode
    onClick?: () => void
    hoverable?: boolean
}


export interface TodoFormProps extends BaseComponentProps {
    onSubmit: (title: string) => void
    isLoading?: boolean
}

export interface TodoItemProps extends BaseComponentProps {
    id: string
    title: string
    completed: boolean
    onToggle: (id: string) => void
    onDelete: (id: string) => void
}

export interface TodoFilterProps extends BaseComponentProps {
    currentFilter: FilterTypeValue
    onFilterChange: (filter: FilterTypeValue) => void
    counts: {
        all: number
        completed: number
        pending: number
    }
}

export interface TodoListProps extends BaseComponentProps {
    children: ReactNode
}


export interface PostItemProps extends BaseComponentProps {
    id: number
    userId: number
    title: string
    body: string
    onSelect?: (id: number) => void
    isSelected?: boolean
}

export interface PostListProps extends BaseComponentProps {
    children: ReactNode
}

export interface SearchBoxProps extends BaseComponentProps {
    value: string
    onChange: (value: string) => void
    onSearch: () => void
    placeholder?: string
    isLoading?: boolean
}


export interface CommentItemProps extends BaseComponentProps {
    id: number
    name: string
    email: string
    body: string
}

export interface CommentListProps extends BaseComponentProps {
    postId: number
    comments: Array<{
        id: number
        name: string
        email: string
        body: string
    }>
    isLoading: boolean
    error: string | null
}


export type VoidCallback = () => void
export type StringCallback = (value: string) => void
export type NumberCallback = (value: number) => void
export type BooleanCallback = (value: boolean) => void


export interface ApiResponse<T> {
    data: T
    success: boolean
    error: string | null
}

export interface ApiListResponse<T> {
    data: T[]
    success: boolean
    error: string | null
    pagination?: PaginationState
}


export interface FormFieldError {
    field: string
    message: string
}

export interface FormState {
    isSubmitting: boolean
    isValid: boolean
    errors: FormFieldError[]
}

export interface SearchState {
    query: string
    isSearching: boolean
    hasSearched: boolean
}

export interface SearchResult<T> {
    items: T[]
    totalCount: number
    query: string
}