# GraphQL Vue With Route - Vite

> 🌐 Language / Ngôn ngữ: **English** | [Tiếng Việt](README.vi.md)

## Description

A sample learning application built with Vue 3, Vue Router, and Vite. The interface uses Bootstrap 5. GraphQL requests are mocked on the client side for easy setup without requiring a backend.

## 📚 Documentation Links
- **Screenshot documentation**: [screenshots/SCREENSHOTS_SUMMARY.md](screenshots/SCREENSHOTS_SUMMARY.md)
- **Screenshot documentation (Vietnamese)**: [screenshots/SCREENSHOTS_SUMMARY.vi.md](screenshots/SCREENSHOTS_SUMMARY.vi.md)

## 🔗 Backend Server
This frontend project is designed to work with the **[Fastify-Mercurius-GraphQL](https://github.com/dangkhoa2016/Fastify-Mercurius-GraphQL)** backend server. The backend provides all GraphQL APIs for user management, cats, photos, and social interactions. Make sure to have the backend server running before using this frontend application.

## Technologies Used

- Vue 3
- Vue Router
- Vite
- Bootstrap 5
- Axios + axios-mock-adapter (mock GraphQL)

## Requirements

- Node.js 16+ (Node 18+ recommended)
- yarn or npm

## Installation & Running

Clone the repository, then install dependencies and start the development server:

Yarn:
```bash
yarn install
yarn dev
````

NPM:

```bash
npm install
npm run dev
```

Open your browser at [http://localhost:5173](http://localhost:5173) (default Vite port). Note: the router uses hash mode (URLs include `#`).

## Useful Scripts

* `dev` — run the development server (vite)
* `build` — build for production (removes `./dist` before building)
* `preview` — preview the production build
* `lint` — run eslint with auto-fix
* `prettier` — format code using Prettier

Example:

```bash
yarn build
yarn preview
yarn lint
yarn prettier
```

## Mock Data (GraphQL)

The application simulates a GraphQL endpoint on the client side for easier development:

* `src/libs/api.mjs` — axios + axios-mock-adapter configuration (mock responses are loaded from files in `src/sample-data/`)
* `src/sample-data/` — contains JSON files for sample query/mutation responses

If you want to connect to a real GraphQL backend, edit `src/libs/api.mjs`, set `endpoint` to your server URL, and adjust/remove the mock logic as needed.

Example:

```js
// src/libs/api.mjs
export const endpoint = 'http://localhost:4000';
```

## Sample Login

Login is currently mocked — any email/password combination will return sample data. Sample data file: `src/sample-data/login.json` (sample user: `kirsten.brakus@gmail.com`, role: `admin`). Useful for testing admin functionality.

## Features

* Follow / unfollow users
* Like / unlike cats and images
* Pagination and image gallery (PhotoSwipe)
* Admin features: enable / disable users, cats, and images
* Multiple pages: About, FAQs, Contact, Users, Cats, ...

## Important Structure

* `src/app.js` — entry point
* `src/router.mjs` — route definitions (hash mode)
* `src/libs/api.mjs` — GraphQL client + mock
* `src/sample-data/` — mock JSON responses
* `src/components/` — reusable components
* `src/views/` — pages (views)
* `src/stores/` — lightweight stores

## Suggestions & Development

* Replace mocks with a real backend for integration testing
* Add unit tests and CI if needed

## License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

## Author

* Dang khoa — [https://github.com/dangkhoa2016](https://github.com/dangkhoa2016)
