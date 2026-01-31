# Frontend Entry Test

Proyek frontend yang dibangun menggunakan **React.js**, **TypeScript**, dan **Redux Toolkit** sebagai state management global. Proyek ini mencakup dua halaman utama: **Todos** dan **Posts**.

## Demo

- **GitHub Repository**: [https://github.com/fadilarazhya/todo-posts-dashboard]
- **Live Demo**: [https://todo-posts-dashboard.vercel.app/]

## Fitur

### Todos Page
- ✅ Menambahkan task baru
- ✅ Menandai task sebagai selesai (completed)
- ✅ Menghapus task
- ✅ Persistensi data menggunakan localStorage
- ✅ Filter berdasarkan all / completed / pending
- ✅ Clear completed tasks
- ✅ Mark all as completed / pending
- ✅ Edit todo title

### Posts Page
- ✅ Fetch dan menampilkan posts dari JSONPlaceholder API
- ✅ Search posts berdasarkan ID
- ✅ Fetch dan menampilkan comments berdasarkan Post ID
- ✅ View detail post dengan comments

### UI States
- ✅ Loading state
- ✅ Empty state (tidak ada hasil)
- ✅ Error state (request gagal)

## Tech Stack

| Teknologi | Versi | Deskripsi |
|-----------|-------|-----------|
| React | 19.2.0 | UI Library |
| TypeScript | 5.9.3 | Type-safe JavaScript |
| Redux Toolkit | 2.11.2 | State Management |
| React Router DOM | 7.13.0 | Routing |
| Vite | 7.2.4 | Build Tool |
| Vitest | 3.2.4 | Testing Framework |
| Tailwind CSS | 3.4.19 | Styling |
| ESLint | 9.39.1 | Linting |
| Prettier | - | Code Formatting |

## Struktur Proyek

```
src/
├── components/
│   └── ui/
│       ├── index.tsx              # Reusable UI components (Button, etc.)
│       └── styles.module.css      # Component styles
│
├── constant/
│   ├── filter.ts                  # Filter type constants
│   ├── storage.ts                 # Storage key constants
│   ├── messages.ts                # Message constants
│   └── api.ts                     # API endpoint constants
│
├── model/
│   ├── todo-model.ts              # Todo data model & utilities
│   ├── post-model.ts              # Post data model & utilities
│   ├── comment-model.ts           # Comment data model & utilities
│   └── index.ts                   # Model exports
│
├── pages/
│   ├── TodoPage/                  # Todo page component
│   └── PostsPage/                 # Posts page component
│
├── source/
│   └── post-remote.ts             # API fetch functions
│
├── store/
│   ├── store.ts                   # Redux store configuration
│   ├── hooks.ts                   # Typed Redux hooks
│   └── slices/
│       ├── todo-slice.ts          # Todo Redux slice
│       └── post-slice.ts          # Posts Redux slice
│
├── utils/
│   ├── local-storage.ts           # localStorage utilities
│   └── fetch-wrapper.ts           # Fetch API wrapper
│
├── App.tsx                        # Main App component
├── App.css                        # App styles
├── main.tsx                       # Entry point
└── index.css                      # Global styles

tests/
├── todo-model.test.ts             # Todo model unit tests
├── todo-slice.test.ts             # Todo slice unit tests
├── post-model.test.ts             # Post model unit tests
├── post-slice.test.ts             # Post slice unit tests
├── comment-model.test.ts          # Comment model unit tests
├── local-storage.test.ts          # localStorage unit tests
└── filter.test.ts                 # Filter utility unit tests
```

## Prerequisites

- Node.js >= 18.x
- npm atau yarn

## Instalasi

1. Clone repository:
```bash
git clone <repository-url>
cd todo-posts-dashboard
```

2. Install dependencies:
```bash
npm install
```

## Menjalankan Proyek

### Development Mode
```bash
npm run dev
```
Akses aplikasi di `http://localhost:5173`

### Build Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Testing

### Menjalankan Semua Tests
```bash
npm test
```

### Watch Mode
```bash
npm run test:watch
```

### Coverage Report
```bash
npm run test:coverage
```

## Linting & Formatting

### Lint Check
```bash
npm run lint
```

### Lint Fix
```bash
npm run lint:fix
```

### Format Code
```bash
npm run format
```

### Check Format
```bash
npm run format:check
```

## API Endpoints

Proyek ini menggunakan [JSONPlaceholder](https://jsonplaceholder.typicode.com/) sebagai fake REST API.

| Endpoint | Deskripsi |
|----------|-----------|
| `GET /posts` | Mengambil semua posts |
| `GET /posts/:id` | Mengambil post berdasarkan ID |
| `GET /comments?postId=:id` | Mengambil comments berdasarkan Post ID |

## Coding Conventions

Proyek ini mengikuti coding conventions berikut:

1. **Pengkondisian**: Menggunakan single `if` tanpa `else`
   ```typescript
   // ✅ Correct
   if (condition) {
       return result
   }
   return defaultResult

   // ❌ Avoid
   if (condition) {
       return result
   } else {
       return defaultResult
   }
   ```

2. **Ternary Function**: Tidak menggunakan ternary operator untuk logic kompleks
   ```typescript
   // ✅ Correct
   const getStatus = (): string => {
       if (isCompleted) {
           return 'done'
       }
       return 'pending'
   }

   // ❌ Avoid
   const status = isCompleted ? 'done' : 'pending'
   ```

3. **Logging**: Tidak menggunakan `console.log`, gunakan `//NOTE:` untuk catatan
   ```typescript
   // ✅ Correct
   //NOTE: This function handles the edge case for empty arrays

   // ❌ Avoid
   console.log('debug:', value)
   ```

4. **CSS Separation**: CSS dipisahkan dalam file terpisah (page slicing UI)
   ```
   components/
   ├── Button/
   │   ├── index.tsx
   │   └── styles.module.css
   ```

## Test Cases

### Todo Model Tests
- ✅ Create todo dengan unique ID
- ✅ Create todo dengan timestamps
- ✅ Trim whitespace dari title
- ✅ Validate todo object structure
- ✅ Validate todo array
- ✅ Filter todos by status
- ✅ Find todo by ID
- ✅ Remove todo by ID
- ✅ Toggle todo completed status
- ✅ Get todo statistics
- ✅ Search todos by title

### Todo Slice Tests
- ✅ Add todo ke empty list
- ✅ Add todo ke existing list
- ✅ Tidak menambah todo dengan title kosong
- ✅ Trim whitespace dari todo title
- ✅ Delete todo by id
- ✅ Handle delete non-existent todo
- ✅ Toggle todo incomplete ke complete
- ✅ Toggle todo complete ke incomplete
- ✅ Load todos from storage
- ✅ Save todos to storage
- ✅ Clear completed todos
- ✅ Mark all completed/pending

### Post Model Tests
- ✅ Create mock post
- ✅ Validate post object structure
- ✅ Validate post array
- ✅ Create initial post state
- ✅ Handle invalid post data

### Comment Model Tests
- ✅ Create mock comment
- ✅ Validate comment object structure
- ✅ Validate comment array
- ✅ Create initial comment state

### Posts Slice Tests
- ✅ Fetch posts pending/fulfilled/rejected states
- ✅ Fetch single post states
- ✅ Fetch comments states
- ✅ Search post by ID
- ✅ Set/clear search query
- ✅ Select/clear selected post

### LocalStorage Tests
- ✅ Save to localStorage
- ✅ Get from localStorage
- ✅ Handle invalid JSON
- ✅ Handle storage errors

## Dependencies

### Production
- `@reduxjs/toolkit` - State management
- `react` - UI library
- `react-dom` - React DOM rendering
- `react-redux` - React bindings for Redux
- `react-router-dom` - Client-side routing

### Development
- `@testing-library/jest-dom` - Custom Jest matchers
- `@testing-library/react` - React testing utilities
- `@testing-library/user-event` - User event simulation
- `vitest` - Test runner
- `jsdom` - DOM environment for testing
- `typescript` - Type checking
- `typescript-eslint` - ESLint TypeScript support
- `eslint` - Code linting
- `prettier` - Code formatting
- `tailwindcss` - Utility-first CSS
- `postcss` - CSS processing
- `autoprefixer` - CSS vendor prefixing
- `vite` - Build tool
- `@vitejs/plugin-react` - Vite React plugin

## Catatan Tambahan

- Semua async actions menggunakan `createAsyncThunk` dari Redux Toolkit
- localStorage digunakan untuk persistensi data Todos
- Fetch API wrapper dengan error handling
- CSS Modules digunakan untuk component styling
- Tailwind CSS untuk utility classes
- Strict TypeScript mode enabled
- ESLint dengan recommended rules
- Prettier untuk consistent formatting

## Author

Fadila Razhya Rahmadhany

## License

MIT License