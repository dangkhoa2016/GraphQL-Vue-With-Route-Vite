# Tóm tắt ảnh chụp màn hình

> 🌐 Language / Ngôn ngữ: [English](SCREENSHOTS_SUMMARY.md) | **Tiếng Việt**

Tài liệu này liệt kê các ảnh chụp màn hình trong thư mục `screenshots` của dự án **GraphQL-Vue-With-Route-Vite**. Mỗi mục có: tên file (link tới ảnh), mô tả ngắn, và các view / component liên quan để dễ tham chiếu khi viết tài liệu hoặc kiểm thử UI.

---

## Danh sách ảnh (chi tiết)

- **[screenshots/app-loading.png](screenshots/app-loading.png)**
  - Mô tả: Màn hình khởi động/app loader (tiêu đề "GraphQL Vue js 3 With vue-router - Vite" và biểu tượng/animation ở giữa, text "App is loading...").
  - Thành phần liên quan: [src/components/App.vue](src/components/App.vue), [src/components/LoadingComponent.vue](src/components/LoadingComponent.vue).
  - Ghi chú: Dùng cho splash/loading state khi app khởi tạo.

- **[screenshots/cat-detail-page.png](screenshots/cat-detail-page.png)**
  - Mô tả: Trang chi tiết một con mèo — ảnh đại diện bên trái, bảng thông tin (Age/Breed/Owner), phần "About" và gallery ảnh của mèo.
  - Thành phần liên quan: [src/views/CatDetail.vue](src/views/CatDetail.vue), [src/components/PhotosBlock.vue](src/components/PhotosBlock.vue), [src/components/PhotoBlock.vue](src/components/PhotoBlock.vue), [src/components/Modal.vue](src/components/Modal.vue).
  - Ghi chú: Thể hiện layout chính của trang `CatDetail` và list/gallery của ảnh mèo.

- **[screenshots/cat-detail-page-open-gallery.png](screenshots/cat-detail-page-open-gallery.png)**
  - Mô tả: Phiên bản mở gallery/preview (lightbox/modal) từ trang chi tiết mèo, kèm navigation (mũi tên trái/phải).
  - Thành phần liên quan: [src/components/SimpleGallery.vue](src/components/SimpleGallery.vue), [src/components/Modal.vue](src/components/Modal.vue), [src/components/PhotoBlock.vue](src/components/PhotoBlock.vue).
  - Ghi chú: Kiểm tra behavior chuyển ảnh, caption và đóng modal.

- **[screenshots/cats-page.png](screenshots/cats-page.png)**
  - Mô tả: Trang danh sách các con mèo hiển thị dạng card grid; header/intro ở trên, pagination dưới cùng.
  - Thành phần liên quan: [src/views/CatsList.vue](src/views/CatsList.vue), [src/components/CatBlock.vue](src/components/CatBlock.vue), [src/components/CatsBlock.vue](src/components/CatsBlock.vue), [src/components/Pagination.vue](src/components/Pagination.vue).
  - Ghi chú: Dùng để kiểm thử filter/pagination và các trạng thái mỗi card (Like/View/Disable).

- **[screenshots/contact-page.png](screenshots/contact-page.png)**
  - Mô tả: Trang liên hệ với form (left) và thông tin liên hệ (right).
  - Thành phần liên quan: [src/views/Contact.vue](src/views/Contact.vue).
  - Ghi chú: Kiểm thử form validation và thông điệp demo notice.

- **[screenshots/failed-to-load-top-users.png](screenshots/failed-to-load-top-users.png)**
  - Mô tả: Trang features/gallery phần đầu và sau đó một vùng báo lỗi "Error while loading users" với nút Reload.
  - Thành phần liên quan: [src/components/TopUsers.vue](src/components/TopUsers.vue), [src/components/ErrorLoadUsers.vue](src/components/ErrorLoadUsers.vue) (hoặc tương tự), view: [src/views/MainPage.vue](src/views/MainPage.vue).
  - Ghi chú: Dùng để mô phỏng trạng thái mạng lỗi / fallback UI.

- **[screenshots/feature-page.png](screenshots/feature-page.png)**
  - Mô tả: Trang Features với các mục "Diverse Cat Breeds", "Heartwarming Stories", gallery nhỏ và phần About.
  - Thành phần liên quan: [src/views/Features.vue](src/views/Features.vue).
  - Ghi chú: Thích hợp cho tài liệu tính năng (marketing) hoặc mô tả nội dung trang.

- **[screenshots/home-page-open-gallery.png](screenshots/home-page-open-gallery.png)**
  - Mô tả: Trang chủ (Main) với gallery mở ở dạng lightbox/modal.
  - Thành phần liên quan: [src/views/MainPage.vue](src/views/MainPage.vue), [src/components/SimpleGallery.vue](src/components/SimpleGallery.vue).

- **[screenshots/home-page-open-preview.png](screenshots/home-page-open-preview.png)**
  - Mô tả: Trang chủ với modal preview (ví dụ preview user hoặc photo preview) hiển thị nội dung tóm tắt.
  - Thành phần liên quan: [src/views/MainPage.vue](src/views/MainPage.vue), [src/components/ModalUserSummary.vue](src/components/ModalUserSummary.vue), [src/components/Modal.vue](src/components/Modal.vue).

- **[screenshots/loading-user-modal-loading-skeleton.png](screenshots/loading-user-modal-loading-skeleton.png)**
  - Mô tả: Modal người dùng ở trạng thái loading (skeleton placeholders cho avatar và text lines).
  - Thành phần liên quan: [src/components/ModalUserSummary.vue](src/components/ModalUserSummary.vue), [src/components/LoadingComponent.vue](src/components/LoadingComponent.vue).
  - Ghi chú: Dùng để kiểm thử UX khi chờ dữ liệu người dùng.

- **[screenshots/require-login-to-follow-user.png](screenshots/require-login-to-follow-user.png)**
  - Mô tả: Thông báo (toast) yêu cầu đăng nhập để theo dõi người dùng.
  - Thành phần liên quan: [src/components/ToggleFollowUser.vue](src/components/ToggleFollowUser.vue), [src/components/Toast.vue](src/components/Toast.vue), view: [src/views/ViewUser.vue](src/views/ViewUser.vue).

- **[screenshots/require-login-to-view-user-cats.png](screenshots/require-login-to-view-user-cats.png)**
  - Mô tả: Notice/toast thông báo cần đăng nhập để xem cats của user (trong tab Cats).
  - Thành phần liên quan: [src/views/ViewUser.vue](src/views/ViewUser.vue), [src/components/Toast.vue](src/components/Toast.vue), [src/components/CatsByUser.vue](src/components/CatsByUser.vue).

- **[screenshots/require-login-to-view-user-photos.png](screenshots/require-login-to-view-user-photos.png)**
  - Mô tả: Notice/toast yêu cầu đăng nhập để xem photos của user (trong tab Photos).
  - Thành phần liên quan: [src/views/ViewUser.vue](src/views/ViewUser.vue), [src/components/PhotosByUser.vue](src/components/PhotosByUser.vue).

- **[screenshots/require-login-when-access-cats-page.png](screenshots/require-login-when-access-cats-page.png)**
  - Mô tả: Trang cats yêu cầu đăng nhập — hiển thị form sign-in lớn (giao diện page-level sign in).
  - Thành phần liên quan: [src/views/Login.vue](src/views/Login.vue), route-guard logic (router).

- **[screenshots/user-detail-loading-skeleton.png](screenshots/user-detail-loading-skeleton.png)**
  - Mô tả: Trang chi tiết người dùng ở trạng thái skeleton (avatar rỗng, các dòng placeholder cho thông tin).
  - Thành phần liên quan: [src/views/ViewUser.vue](src/views/ViewUser.vue), [src/components/UsersLoading.vue](src/components/UsersLoading.vue), [src/components/LoadingComponent.vue](src/components/LoadingComponent.vue).

- **[screenshots/user-detail-page-tab-cats.png](screenshots/user-detail-page-tab-cats.png)**
  - Mô tả: View user — tab "Cats" hiển thị list card các cat của user.
  - Thành phần liên quan: [src/views/ViewUser.vue](src/views/ViewUser.vue), [src/components/CatsByUser.vue](src/components/CatsByUser.vue), [src/components/CatBlock.vue](src/components/CatBlock.vue).

- **[screenshots/user-detail-page-tab-photos.png](screenshots/user-detail-page-tab-photos.png)**
  - Mô tả: View user — tab "Photos" (gallery thumbnails) và illustration khi rỗng/placeholder.
  - Thành phần liên quan: [src/views/ViewUser.vue](src/views/ViewUser.vue), [src/components/PhotosByUser.vue](src/components/PhotosByUser.vue), [src/components/SimpleGallery.vue](src/components/SimpleGallery.vue).

- **[screenshots/user-page-open-gallery.png](screenshots/user-page-open-gallery.png)**
  - Mô tả: User page với gallery mở modal/lightbox cho ảnh người dùng.
  - Thành phần liên quan: [src/components/SimpleGallery.vue](src/components/SimpleGallery.vue), [src/components/Modal.vue](src/components/Modal.vue).

- **[screenshots/users-page.png](screenshots/users-page.png)**
  - Mô tả: Trang danh sách người dùng (grid card) với avatar, tên, follow/preview buttons, pagination.
  - Thành phần liên quan: [src/views/UsersList.vue](src/views/UsersList.vue), [src/components/UserBlock2.vue](src/components/UserBlock2.vue), [src/components/UsersBlock.vue](src/components/UsersBlock.vue), [src/components/Pagination.vue](src/components/Pagination.vue).

---

## Ghi chú chung & gợi ý sử dụng
- Phân nhóm ảnh theo 3 loại: Pages (cats, users, contact, features), Modals/Galleries/Previews, States (loading/skeleton, error/toast, yêu cầu đăng nhập).
- Dùng tài liệu này khi cần:
  - Viết README trang (screenshots minh họa từng trang chính).
  - Tạo test/capture cho UI regression.
  - Kiểm tra trạng thái lỗi/loading và hành vi modal/gallery.
- Nếu muốn, tôi có thể: chèn ảnh thu nhỏ trực tiếp vào tài liệu, hoặc tạo phiên bản tiếng Anh, hoặc bổ sung thêm mapping chính xác tới các đoạn code (line) nếu cần.
