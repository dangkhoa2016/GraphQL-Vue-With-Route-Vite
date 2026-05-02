# GraphQL Vue With Route - Vite

> 🌐 Language / Ngôn ngữ: **English** | [Tiếng Việt](README.vi.md)

## Overview

**GraphQL Vue With Route - Vite** is a Vue 3 single-page application that demonstrates a routed social-style interface for browsing users, cats, and photos. It uses Vue Router for hash-based navigation, Vite for development and production builds, Bootstrap 5 for the UI, and Axios for GraphQL requests.

The application includes common SPA patterns such as authentication, route guards, reactive client-side stores, paginated lists, detail pages, image galleries, optimistic-style interaction state, and admin moderation actions.

## What the App Does

The app models a small social platform where users can:

- Browse users and view profile details.
- Browse cats and open cat detail pages.
- View photos by cat or by user.
- Like and unlike cats and photos.
- Follow and unfollow users.
- Login and keep the session in local storage.
- Access protected routes after authentication.
- View loading, empty, and error states while data is fetched.

Admin users can also:

- Enable or disable users.
- Enable or disable cats.
- Enable or disable photos.
- Manage moderation actions through reusable modal/status components.

## Key Features

- **Vue 3 SPA**: Uses Vue single-file components and the Composition API style where needed.
- **Vite build setup**: Fast development server, production build, and preview workflow.
- **Vue Router**: Hash-mode routing with route-level lazy loading and authentication guards.
- **GraphQL data layer**: Queries and mutations are sent through Axios.
- **Live or mocked backend support**: `src/libs/api.mjs` can pass requests to a real GraphQL server or return local sample JSON data.
- **Lightweight stores**: Reactive stores are implemented with Vue's `reactive` and `toRefs`, without Vuex or Pinia.
- **Local session persistence**: Login data and liked item state are stored in local storage.
- **Bootstrap UI**: Responsive layout, buttons, modals, pagination, tabs, accordions, and navigation styling.
- **Photo gallery**: PhotoSwipe is used for image preview/gallery interactions.
- **Status feedback**: Toasts, loading components, skeleton-style placeholders, and error components help communicate app state.

## Technologies Used

- [Vue 3](https://vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Vite](https://vite.dev/)
- [Bootstrap 5](https://getbootstrap.com/)
- [Axios](https://axios-http.com/)
- [axios-mock-adapter](https://github.com/ctimmerm/axios-mock-adapter)
- [PhotoSwipe](https://photoswipe.com/)
- [mitt](https://github.com/developit/mitt)
- [dayjs](https://day.js.org/)

## Requirements

- Node.js `>=20.19.0` as declared in `package.json`
- Yarn or npm

The project includes Yarn configuration, so Yarn is the preferred package manager.

## Installation

```bash
yarn install
```

Or with npm:

```bash
npm install
```

## Running Locally

Start the Vite development server:

```bash
yarn dev
```

Or:

```bash
npm run dev
```

Open the local URL printed by Vite, usually:

```text
http://localhost:5173
```

The router uses hash history, so application routes look like:

```text
http://localhost:5173/#/users
http://localhost:5173/#/cats
http://localhost:5173/#/profile
```

## Available Scripts

```bash
yarn dev
```

Runs the Vite development server.

```bash
yarn build
```

Removes `dist` and creates a production build.

```bash
yarn preview
```

Serves the production build locally for verification.

```bash
yarn lint
```

Runs ESLint with auto-fix for Vue, JavaScript, TypeScript, JSX, and TSX files.

```bash
yarn prettier
```

Formats HTML, Vue, JavaScript, TypeScript, JSON, and Markdown files.

The same commands are available through npm:

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run prettier
```

## Project Structure

```text
.
├── index.html
├── package.json
├── vite.config.js
├── src
│   ├── app.js
│   ├── router.mjs
│   ├── assets
│   ├── components
│   ├── libs
│   ├── sample-data
│   ├── stores
│   └── views
└── screenshots
```

Important files and folders:

- `src/app.js`: Creates the Vue app, initializes authentication state, installs the router, and mounts the app.
- `src/router.mjs`: Defines routes, lazy-loads views, protects authenticated pages, and emits loading events.
- `src/libs/api.mjs`: Configures Axios and GraphQL mocking/pass-through behavior.
- `src/libs/eventBus.mjs`: Provides the shared event bus used for UI events such as loading and toast notifications.
- `src/libs/localStorageHelpers.mjs`: Wraps local storage reads and writes.
- `src/stores/`: Contains lightweight reactive stores for auth, users, cats, photos, likes, follows, statuses, and home-page data.
- `src/views/`: Contains route-level page components.
- `src/components/`: Contains reusable UI and domain components.
- `src/sample-data/`: Contains JSON files used by the mock GraphQL adapter.
- `screenshots/`: Contains screenshot documentation for the UI.

## Routing

Routes are defined in `src/router.mjs` using `createWebHashHistory('/')`.

Main routes:

- `/`: Home page
- `/about`: About page
- `/features`: Feature page
- `/pricing`: Pricing page
- `/users`: User list
- `/user/:id`: Public user detail page
- `/cats`: Protected cat list
- `/cat/:id`: Protected cat detail page
- `/faqs`: FAQ page
- `/contact`: Contact page
- `/login`: Login page
- `/profile`: Protected current-user profile page
- `/:pathMatch(.*)*`: Not found page

The `/cats`, `/cat/:id`, and `/profile` routes require authentication. If a visitor is not logged in, the router redirects to `/login` and preserves the intended destination in the `redirect` query parameter.

## Data and State Management

The app uses simple Vue reactive stores instead of a centralized state library.

Store responsibilities:

- `authStore.mjs`: Login, logout, token restoration, admin detection, and authentication state.
- `usersStore.mjs`: User list, user detail, pagination, loading state, and follow result updates.
- `catsStore.mjs`: Cat list, cat detail, pagination, loading state, and like result updates.
- `photosStore.mjs`: Photos by cat/user, pagination, loading state, and like result updates.
- `toggleLikesStore.mjs`: Like/unlike mutations for cats and photos, request limits, local liked-item state.
- `toggleFollowsStore.mjs`: Follow/unfollow mutations and per-user interaction state.
- `toggleStatusesStore.mjs`: Admin enable/disable mutations for users, cats, and photos.
- `homeStore.mjs`: Home-page data such as top users and related UI updates.
- `graphQLStore.mjs`: Shared GraphQL result/cache-oriented state.

Components import store functions directly and use `toRefs`-based accessors to react to state changes.

## GraphQL Backend and Mocking

GraphQL requests are configured in:

```text
src/libs/api.mjs
```

With this value, requests are passed through to the live GraphQL backend:

- [Fastify-Mercurius-GraphQL](https://github.com/dangkhoa2016/Fastify-Mercurius-GraphQL)

The same file also contains an `axios-mock-adapter` setup. If `endpoint` is changed to `/`, the adapter returns local sample responses from `src/sample-data/` instead of using the live backend.

Example mock configuration:

```js
export const endpoint = '/';
```

Example live local backend configuration:

```js
export const endpoint = 'http://localhost:4000';
```

Mocked response mapping includes:

- Users list and user detail
- Cats list and cat detail
- Photos by cat and by user
- Login and token restoration
- Follow/unfollow
- Like/unlike cat
- Like/unlike photo
- Enable/disable user, cat, and photo
- Top users

## Authentication

Authentication is handled by `src/stores/authStore.mjs`.

The login flow sends a GraphQL `login` mutation and stores the returned `userToken` in local storage under `authInfo`. On app startup, `authStoreInit()` reads that value and calls `decryptUserToken` to restore the session.

The authenticated user is considered an admin when:

```js
user.role === 'admin'
```

When the app is using local mock data, any login request can return the sample login response from:

```text
src/sample-data/login.json
```

The sample user in the README data is:

```text
Emmanuel_Deckow15@hotmail.com
```

## UI Components

The component layer is split between layout, data display, interaction controls, and state feedback.

Examples:

- `App.vue`, `AppHeader.vue`, `AppFooter.vue`: Main application shell.
- `UsersBlock.vue`, `UserDetail.vue`, `UserProfile.vue`, `UserSummary.vue`: User display and profile UI.
- `CatsBlock.vue`, `CatBlock.vue`, `CatInfoLong.vue`, `CatInfoShort.vue`: Cat list/detail UI.
- `PhotosBlock.vue`, `PhotoBlock.vue`, `PhotoStats.vue`, `SimpleGallery.vue`: Photo display and gallery UI.
- `ToggleLikeCat.vue`, `ToggleLikePhoto.vue`, `ToggleFollowUser.vue`, `ToggleStatus.vue`: User interaction controls.
- `Modal.vue`, `ModalUserSummary.vue`, `ModalToggleStatus.vue`: Modal-based workflows.
- `Pagination.vue`, `SimpleTabs.vue`, `SimpleAccordion.vue`: Reusable navigation/display controls.
- `LoadingComponent.vue`, `ErrorLoadUsers.vue`, `ErrorLoadCats.vue`, `ErrorLoadPhotos.vue`: Loading and error feedback.
- `Toast.vue`: Notification UI.

## Build Configuration

`vite.config.js` configures:

- Vue support through `@vitejs/plugin-vue`.
- The `@` alias pointing to `./src`.
- Custom production output naming:
  - JavaScript files under `js/`
  - Images under `images/`
  - Other assets under `assets/`

## Screenshots

Screenshot documentation is available here:

- [screenshots/SCREENSHOTS_SUMMARY.md](screenshots/SCREENSHOTS_SUMMARY.md)
- [screenshots/SCREENSHOTS_SUMMARY.vi.md](screenshots/SCREENSHOTS_SUMMARY.vi.md)

The screenshots cover pages and states such as home, users, cats, cat detail, user detail, galleries, login-required flows, loading skeletons, and error states.

## Related Projects

- [GraphQL-Vue-With-Route](https://github.com/dangkhoa2016/GraphQL-Vue-With-Route): Vue Router version without Vite build tooling.
- [GraphQL-Vue-Without-Route](https://github.com/dangkhoa2016/GraphQL-Vue-Without-Route): Version without Vue Router.
- [Fastify-Mercurius-GraphQL](https://github.com/dangkhoa2016/Fastify-Mercurius-GraphQL): GraphQL backend used by this frontend.

## Development Notes

- Keep GraphQL field selections close to the component/store needs to avoid over-fetching.
- Use the existing reactive store pattern when adding new domain state.
- Add new route-level pages under `src/views/` and register them in `src/router.mjs`.
- Add reusable UI pieces under `src/components/`.
- Use `@/` imports for source files, following the Vite alias.
- When changing backend behavior, update both live GraphQL assumptions and mock sample JSON files when relevant.
- Run `yarn lint` and `yarn prettier` before committing broad changes.

## License

This project is licensed under the **MIT License**. See [LICENSE](LICENSE) for details.

## Author

Dang Khoa - [https://github.com/dangkhoa2016](https://github.com/dangkhoa2016)
