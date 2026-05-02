# Screenshot Summary

> 🌐 Language / Ngôn ngữ: **English** | [Tiếng Việt](SCREENSHOTS_SUMMARY.vi.md)

This document lists the screenshots in the `screenshots` folder of the **GraphQL-Vue-With-Route-Vite** project. Each entry includes: the file name (linked to the image), a brief description, and the related views/components for easy reference when writing documentation or performing UI testing.

---

## Screenshot List (Detailed)

- **[screenshots/app-loading.png](screenshots/app-loading.png)**
  - Description: App startup/loading screen (title "GraphQL Vue js 3 With vue-router - Vite" with a centered icon/animation and the text "App is loading...").
  - Related Components: [src/components/App.vue](src/components/App.vue), [src/components/LoadingComponent.vue](src/components/LoadingComponent.vue).
  - Notes: Used for the splash/loading state during app initialization.

- **[screenshots/cat-detail-page.png](screenshots/cat-detail-page.png)**
  - Description: Cat detail page — profile image on the left, information table (Age/Breed/Owner), "About" section, and cat photo gallery.
  - Related Components: [src/views/CatDetail.vue](src/views/CatDetail.vue), [src/components/PhotosBlock.vue](src/components/PhotosBlock.vue), [src/components/PhotoBlock.vue](src/components/PhotoBlock.vue), [src/components/Modal.vue](src/components/Modal.vue).
  - Notes: Demonstrates the main `CatDetail` page layout and cat photo list/gallery.

- **[screenshots/cat-detail-page-open-gallery.png](screenshots/cat-detail-page-open-gallery.png)**
  - Description: Expanded gallery/preview version (lightbox/modal) from the cat detail page, including navigation (left/right arrows).
  - Related Components: [src/components/SimpleGallery.vue](src/components/SimpleGallery.vue), [src/components/Modal.vue](src/components/Modal.vue), [src/components/PhotoBlock.vue](src/components/PhotoBlock.vue).
  - Notes: Used to test image navigation, captions, and modal close behavior.

- **[screenshots/cats-page.png](screenshots/cats-page.png)**
  - Description: Cat listing page displayed as a card grid; header/intro at the top and pagination at the bottom.
  - Related Components: [src/views/CatsList.vue](src/views/CatsList.vue), [src/components/CatBlock.vue](src/components/CatBlock.vue), [src/components/CatsBlock.vue](src/components/CatsBlock.vue), [src/components/Pagination.vue](src/components/Pagination.vue).
  - Notes: Useful for testing filters/pagination and card states (Like/View/Disable).

- **[screenshots/contact-page.png](screenshots/contact-page.png)**
  - Description: Contact page with form on the left and contact information on the right.
  - Related Components: [src/views/Contact.vue](src/views/Contact.vue).
  - Notes: Used for testing form validation and demo notice messages.

- **[screenshots/failed-to-load-top-users.png](screenshots/failed-to-load-top-users.png)**
  - Description: Features/gallery section followed by an error area showing "Error while loading users" with a Reload button.
  - Related Components: [src/components/TopUsers.vue](src/components/TopUsers.vue), [src/components/ErrorLoadUsers.vue](src/components/ErrorLoadUsers.vue) (or similar), view: [src/views/MainPage.vue](src/views/MainPage.vue).
  - Notes: Simulates network failure state / fallback UI.

- **[screenshots/feature-page.png](screenshots/feature-page.png)**
  - Description: Features page with sections such as "Diverse Cat Breeds," "Heartwarming Stories," mini gallery, and About section.
  - Related Components: [src/views/Features.vue](src/views/Features.vue).
  - Notes: Suitable for feature documentation (marketing) or page content descriptions.

- **[screenshots/home-page-open-gallery.png](screenshots/home-page-open-gallery.png)**
  - Description: Home page (Main) with gallery opened in lightbox/modal mode.
  - Related Components: [src/views/MainPage.vue](src/views/MainPage.vue), [src/components/SimpleGallery.vue](src/components/SimpleGallery.vue).

- **[screenshots/home-page-open-preview.png](screenshots/home-page-open-preview.png)**
  - Description: Home page with preview modal (e.g., user preview or photo preview) displaying summarized content.
  - Related Components: [src/views/MainPage.vue](src/views/MainPage.vue), [src/components/ModalUserSummary.vue](src/components/ModalUserSummary.vue), [src/components/Modal.vue](src/components/Modal.vue).

- **[screenshots/loading-user-modal-loading-skeleton.png](screenshots/loading-user-modal-loading-skeleton.png)**
  - Description: User modal in loading state (skeleton placeholders for avatar and text lines).
  - Related Components: [src/components/ModalUserSummary.vue](src/components/ModalUserSummary.vue), [src/components/LoadingComponent.vue](src/components/LoadingComponent.vue).
  - Notes: Used to test UX while waiting for user data.

- **[screenshots/require-login-to-follow-user.png](screenshots/require-login-to-follow-user.png)**
  - Description: Toast notification requiring login to follow a user.
  - Related Components: [src/components/ToggleFollowUser.vue](src/components/ToggleFollowUser.vue), [src/components/Toast.vue](src/components/Toast.vue), view: [src/views/ViewUser.vue](src/views/ViewUser.vue).

- **[screenshots/require-login-to-view-user-cats.png](screenshots/require-login-to-view-user-cats.png)**
  - Description: Notice/toast indicating login is required to view a user's cats (in the Cats tab).
  - Related Components: [src/views/ViewUser.vue](src/views/ViewUser.vue), [src/components/Toast.vue](src/components/Toast.vue), [src/components/CatsByUser.vue](src/components/CatsByUser.vue).

- **[screenshots/require-login-to-view-user-photos.png](screenshots/require-login-to-view-user-photos.png)**
  - Description: Notice/toast requiring login to view a user's photos (in the Photos tab).
  - Related Components: [src/views/ViewUser.vue](src/views/ViewUser.vue), [src/components/PhotosByUser.vue](src/components/PhotosByUser.vue).

- **[screenshots/require-login-when-access-cats-page.png](screenshots/require-login-when-access-cats-page.png)**
  - Description: Cats page requiring login — displays a large sign-in form (page-level sign-in UI).
  - Related Components: [src/views/Login.vue](src/views/Login.vue), route-guard logic (router).

- **[screenshots/user-detail-loading-skeleton.png](screenshots/user-detail-loading-skeleton.png)**
  - Description: User detail page in skeleton state (empty avatar and placeholder lines for information).
  - Related Components: [src/views/ViewUser.vue](src/views/ViewUser.vue), [src/components/UsersLoading.vue](src/components/UsersLoading.vue), [src/components/LoadingComponent.vue](src/components/LoadingComponent.vue).

- **[screenshots/user-detail-page-tab-cats.png](screenshots/user-detail-page-tab-cats.png)**
  - Description: User view — "Cats" tab displaying a card list of the user’s cats.
  - Related Components: [src/views/ViewUser.vue](src/views/ViewUser.vue), [src/components/CatsByUser.vue](src/components/CatsByUser.vue), [src/components/CatBlock.vue](src/components/CatBlock.vue).

- **[screenshots/user-detail-page-tab-photos.png](screenshots/user-detail-page-tab-photos.png)**
  - Description: User view — "Photos" tab (gallery thumbnails) with empty-state illustration/placeholder.
  - Related Components: [src/views/ViewUser.vue](src/views/ViewUser.vue), [src/components/PhotosByUser.vue](src/components/PhotosByUser.vue), [src/components/SimpleGallery.vue](src/components/SimpleGallery.vue).

- **[screenshots/user-page-open-gallery.png](screenshots/user-page-open-gallery.png)**
  - Description: User page with gallery opened in modal/lightbox mode for user photos.
  - Related Components: [src/components/SimpleGallery.vue](src/components/SimpleGallery.vue), [src/components/Modal.vue](src/components/Modal.vue).

- **[screenshots/users-page.png](screenshots/users-page.png)**
  - Description: User listing page (card grid) with avatars, names, follow/preview buttons, and pagination.
  - Related Components: [src/views/UsersList.vue](src/views/UsersList.vue), [src/components/UserBlock2.vue](src/components/UserBlock2.vue), [src/components/UsersBlock.vue](src/components/UsersBlock.vue), [src/components/Pagination.vue](src/components/Pagination.vue).

---

## General Notes & Suggested Usage
- Group screenshots into 3 categories:
  - Pages (cats, users, contact, features)
  - Modals/Galleries/Previews
  - States (loading/skeleton, error/toast, login required)
- Use this document when:
  - Writing page README documentation (screenshots illustrating major pages)
  - Creating test/capture references for UI regression
  - Checking error/loading states and modal/gallery behaviors
- If needed, I can also:
  - Embed thumbnail previews directly into this document
  - Create an English version
  - Add more precise mapping to code sections (line references)
