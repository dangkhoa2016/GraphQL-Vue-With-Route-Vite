# GraphQL Vue Với Route - Vite

> 🌐 Language / Ngôn ngữ: [English](README.md) | **Tiếng Việt**

## Tổng quan

**GraphQL Vue Với Route - Vite** là một ứng dụng đơn trang (SPA) sử dụng Vue 3, mô phỏng giao diện mạng xã hội có tính năng điều hướng để duyệt người dùng, mèo và ảnh. Dự án sử dụng Vue Router để điều hướng dựa trên hash, Vite để phát triển và đóng gói (build), Bootstrap 5 cho giao diện người dùng (UI), và Axios cho các yêu cầu GraphQL.

Ứng dụng bao gồm các mô hình SPA phổ biến như xác thực, bảo vệ định tuyến (route guards), store phản xạ (reactive stores) phía client, danh sách phân trang, trang chi tiết, bộ sưu tập ảnh, trạng thái tương tác kiểu cập nhật tức thì (optimistic-style), và các hành động kiểm duyệt của admin.

## Chức năng của ứng dụng

Ứng dụng mô phỏng một nền tảng mạng xã hội nhỏ nơi người dùng có thể:

- Duyệt danh sách người dùng và xem chi tiết hồ sơ.
- Duyệt danh sách mèo và mở trang chi tiết của từng con mèo.
- Xem ảnh theo mèo hoặc theo người dùng.
- Thích (like) và bỏ thích (unlike) mèo và ảnh.
- Theo dõi (follow) và bỏ theo dõi (unfollow) người dùng.
- Đăng nhập và lưu phiên làm việc trong local storage.
- Truy cập các tuyến đường (route) được bảo vệ sau khi xác thực.
- Xem các trạng thái đang tải (loading), danh sách trống và lỗi khi lấy dữ liệu.

Người dùng quản trị (Admin) cũng có thể:

- Kích hoạt hoặc vô hiệu hóa người dùng.
- Kích hoạt hoặc vô hiệu hóa mèo.
- Kích hoạt hoặc vô hiệu hóa ảnh.
- Quản lý các hành động kiểm duyệt thông qua các thành phần modal/trạng thái có thể tái sử dụng.

## Các tính năng chính

- **Vue 3 SPA**: Sử dụng các single-file components của Vue và phong cách Composition API khi cần thiết.
- **Cấu hình xây dựng Vite**: Máy chủ phát triển nhanh, quy trình đóng gói sản xuất và xem trước (preview).
- **Vue Router**: Điều hướng chế độ hash với tính năng tải chậm (lazy loading) ở cấp độ route và bảo vệ xác thực.
- **Lớp dữ liệu GraphQL**: Các truy vấn (queries) và đột biến (mutations) được gửi qua Axios.
- **Hỗ trợ Backend thực tế hoặc giả lập**: `src/libs/api.mjs` có thể chuyển tiếp yêu cầu đến máy chủ GraphQL thực hoặc trả về dữ liệu JSON mẫu cục bộ.
- **Store nhẹ (Lightweight stores)**: Các store phản xạ được triển khai bằng `reactive` và `toRefs` của Vue, không cần Vuex hay Pinia.
- **Duy trì phiên cục bộ**: Dữ liệu đăng nhập và trạng thái các mục đã thích được lưu trữ trong local storage.
- **Giao diện Bootstrap**: Bố cục đáp ứng (responsive), nút bấm, modal, phân trang, tab, accordion và kiểu dáng điều hướng.
- **Bộ sưu tập ảnh**: Sử dụng PhotoSwipe để tương tác xem trước/gallery ảnh.
- **Phản hồi trạng thái**: Toasts, thành phần loading, khung xương giữ chỗ (skeleton placeholders) và các thành phần lỗi giúp thông báo trạng thái ứng dụng.

## Công nghệ sử dụng

- [Vue 3](https://vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Vite](https://vite.dev/)
- [Bootstrap 5](https://getbootstrap.com/)
- [Axios](https://axios-http.com/)
- [axios-mock-adapter](https://github.com/ctimmerm/axios-mock-adapter)
- [PhotoSwipe](https://photoswipe.com/)
- [mitt](https://github.com/developit/mitt)
- [dayjs](https://day.js.org/)

## Yêu cầu hệ thống

- Node.js `>=20.19.0` như đã khai báo trong `package.json`
- Yarn hoặc npm

Dự án bao gồm cấu hình Yarn, vì vậy Yarn là trình quản lý gói được ưu tiên.

## Cài đặt

```bash
yarn install
```

Hoặc với npm:

```bash
npm install
```

## Chạy cục bộ

Khởi động máy chủ phát triển Vite:

```bash
yarn dev
```

Hoặc:

```bash
npm run dev
```

Mở URL cục bộ do Vite cung cấp, thường là:

```text
http://localhost:5173
```

Router sử dụng lịch sử dạng hash, vì vậy các đường dẫn ứng dụng sẽ có dạng:

```text
http://localhost:5173/#/users
http://localhost:5173/#/cats
http://localhost:5173/#/profile
```

## Các lệnh (Scripts) có sẵn

```bash
yarn dev
```
Chạy máy chủ phát triển Vite.

```bash
yarn build
```
Xóa thư mục `dist` và tạo bản build sản xuất.

```bash
yarn preview
```
Chạy thử bản build sản xuất tại cục bộ để kiểm tra.

```bash
yarn lint
```
Chạy ESLint với tính năng tự động sửa lỗi cho các tệp Vue, JavaScript, TypeScript, JSX và TSX.

```bash
yarn prettier
```
Định dạng các tệp HTML, Vue, JavaScript, TypeScript, JSON và Markdown.

Các lệnh tương tự cũng có sẵn thông qua npm (ví dụ: `npm run dev`).

## Cấu trúc dự án

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

Các tệp và thư mục quan trọng:

- `src/app.js`: Khởi tạo ứng dụng Vue, trạng thái xác thực, cài đặt router và gắn ứng dụng (mount).
- `src/router.mjs`: Định nghĩa các route, tải chậm các view, bảo vệ các trang yêu cầu xác thực và phát các sự kiện loading.
- `src/libs/api.mjs`: Cấu hình Axios và hành vi giả lập (mocking)/chuyển tiếp GraphQL.
- `src/libs/eventBus.mjs`: Cung cấp bus sự kiện dùng chung cho các sự kiện UI như loading và thông báo toast.
- `src/libs/localStorageHelpers.mjs`: Bao bọc các thao tác đọc và ghi vào local storage.
- `src/stores/`: Chứa các store phản xạ nhẹ cho xác thực, người dùng, mèo, ảnh, lượt thích, theo dõi, trạng thái và dữ liệu trang chủ.
- `src/views/`: Chứa các thành phần trang (cấp độ route).
- `src/components/`: Chứa các thành phần UI và thành phần nghiệp vụ có thể tái sử dụng.
- `src/sample-data/`: Chứa các tệp JSON được sử dụng bởi bộ điều hợp (adapter) GraphQL giả lập.
- `screenshots/`: Chứa tài liệu hình ảnh cho giao diện người dùng.

## Điều hướng (Routing)

Các route được định nghĩa trong `src/router.mjs` sử dụng `createWebHashHistory('/')`.

Các tuyến đường chính:

- `/`: Trang chủ
- `/about`: Trang giới thiệu
- `/features`: Trang tính năng
- `/pricing`: Trang bảng giá
- `/users`: Danh sách người dùng
- `/user/:id`: Trang chi tiết người dùng công khai
- `/cats`: Danh sách mèo (yêu cầu đăng nhập)
- `/cat/:id`: Chi tiết mèo (yêu cầu đăng nhập)
- `/faqs`: Trang câu hỏi thường gặp
- `/contact`: Trang liên hệ
- `/login`: Trang đăng nhập
- `/profile`: Trang hồ sơ người dùng hiện tại (yêu cầu đăng nhập)
- `/:pathMatch(.*)*`: Trang không tìm thấy (404)

Các route `/cats`, `/cat/:id`, và `/profile` yêu cầu xác thực. Nếu khách truy cập chưa đăng nhập, router sẽ chuyển hướng đến `/login` và giữ lại điểm đến dự định trong tham số truy vấn `redirect`.

## Quản lý dữ liệu và trạng thái

Ứng dụng sử dụng các store phản xạ Vue đơn giản thay vì một thư viện quản lý trạng thái tập trung.

Trách nhiệm của các Store:

- `authStore.mjs`: Đăng nhập, đăng xuất, khôi phục token, nhận diện admin và trạng thái xác thực.
- `usersStore.mjs`: Danh sách người dùng, chi tiết người dùng, phân trang, trạng thái tải và cập nhật kết quả theo dõi.
- `catsStore.mjs`: Danh sách mèo, chi tiết mèo, phân trang, trạng thái tải và cập nhật kết quả thích.
- `photosStore.mjs`: Ảnh theo mèo/người dùng, phân trang, trạng thái tải và cập nhật kết quả thích.
- `toggleLikesStore.mjs`: Các đột biến thích/bỏ thích cho mèo và ảnh, giới hạn yêu cầu, trạng thái mục đã thích cục bộ.
- `toggleFollowsStore.mjs`: Các đột biến theo dõi/bỏ theo dõi và trạng thái tương tác theo từng người dùng.
- `toggleStatusesStore.mjs`: Các đột biến kích hoạt/vô hiệu hóa của admin cho người dùng, mèo và ảnh.
- `homeStore.mjs`: Dữ liệu trang chủ như người dùng hàng đầu và các cập nhật UI liên quan.
- `graphQLStore.mjs`: Trạng thái định hướng kết quả/cache GraphQL dùng chung.

Các thành phần (components) nhập trực tiếp các hàm của store và sử dụng các bộ truy cập dựa trên `toRefs` để phản ứng với các thay đổi trạng thái.

## Backend GraphQL và Giả lập (Mocking)

Các yêu cầu GraphQL được cấu hình trong: `src/libs/api.mjs`

Với giá trị sau, các yêu cầu sẽ được chuyển tiếp đến backend GraphQL thực:
- [Fastify-Mercurius-GraphQL](https://github.com/dangkhoa2016/Fastify-Mercurius-GraphQL)

Tệp này cũng chứa thiết lập cho `axios-mock-adapter`. Nếu `endpoint` được thay đổi thành `/`, bộ điều hợp sẽ trả về các phản hồi mẫu cục bộ từ `src/sample-data/` thay vì sử dụng backend thực.

Ví dụ cấu hình giả lập:
```js
export const endpoint = '/';
```

Ví dụ cấu hình backend thực tại cục bộ:
```js
export const endpoint = 'http://localhost:4000';
```

Ánh xạ phản hồi giả lập bao gồm:
- Danh sách và chi tiết người dùng
- Danh sách và chi tiết mèo
- Ảnh theo mèo và theo người dùng
- Đăng nhập và khôi phục token
- Theo dõi/bỏ theo dõi
- Thích/bỏ thích mèo & ảnh
- Kích hoạt/vô hiệu hóa người dùng, mèo và ảnh
- Người dùng hàng đầu (Top users)

## Xác thực (Authentication)

Xác thực được xử lý bởi `src/stores/authStore.mjs`.

Luồng đăng nhập gửi một đột biến GraphQL `login` và lưu trữ `userToken` nhận được vào local storage dưới khóa `authInfo`. Khi ứng dụng khởi chạy, `authStoreInit()` sẽ đọc giá trị đó và gọi `decryptUserToken` để khôi phục phiên làm việc.

Người dùng đã đăng nhập được coi là quản trị viên khi:
```js
user.role === 'admin'
```

Khi ứng dụng sử dụng dữ liệu giả lập, bất kỳ yêu cầu đăng nhập nào cũng có thể trả về phản hồi đăng nhập mẫu từ: `src/sample-data/login.json`.

Người dùng mẫu trong dữ liệu README là: `Emmanuel_Deckow15@hotmail.com`

## Thành phần UI (UI Components)

Lớp thành phần được chia ra giữa bố cục (layout), hiển thị dữ liệu, điều khiển tương tác và phản hồi trạng thái.

Ví dụ:
- `App.vue`, `AppHeader.vue`, `AppFooter.vue`: Khung chính của ứng dụng.
- `UsersBlock.vue`, `UserDetail.vue`: Hiển thị người dùng và giao diện hồ sơ.
- `CatsBlock.vue`, `CatBlock.vue`: Giao diện danh sách/chi tiết mèo.
- `PhotosBlock.vue`, `SimpleGallery.vue`: Hiển thị ảnh và giao diện bộ sưu tập.
- `ToggleLikeCat.vue`, `ToggleStatus.vue`: Các bộ điều khiển tương tác của người dùng.
- `Modal.vue`, `ModalToggleStatus.vue`: Quy trình làm việc dựa trên modal.
- `Pagination.vue`, `SimpleTabs.vue`: Các bộ điều khiển điều hướng/hiển thị có thể tái sử dụng.
- `LoadingComponent.vue`, `ErrorLoadUsers.vue`: Phản hồi trạng thái tải và lỗi.
- `Toast.vue`: Giao diện thông báo.

## Cấu hình Build

`vite.config.js` cấu hình:
- Hỗ trợ Vue thông qua `@vitejs/plugin-vue`.
- Bí danh (alias) `@` trỏ đến thư mục `./src`.
- Đặt tên đầu ra sản xuất tùy chỉnh:
  - Tệp JavaScript trong thư mục `js/`
  - Hình ảnh trong thư mục `images/`
  - Các tài sản khác trong thư mục `assets/`

## Ảnh chụp màn hình

Tài liệu hình ảnh có sẵn tại đây:
- [screenshots/SCREENSHOTS_SUMMARY.md](screenshots/SCREENSHOTS_SUMMARY.md)
- [screenshots/SCREENSHOTS_SUMMARY.vi.md](screenshots/SCREENSHOTS_SUMMARY.vi.md)

Các ảnh chụp màn hình bao gồm các trang và trạng thái như trang chủ, người dùng, mèo, chi tiết mèo, chi tiết người dùng, bộ sưu tập, luồng yêu cầu đăng nhập, khung xương tải dữ liệu và trạng thái lỗi.

## Các dự án liên quan

- [GraphQL-Vue-With-Route](https://github.com/dangkhoa2016/GraphQL-Vue-With-Route): Phiên bản Vue Router không có công cụ đóng gói Vite.
- [GraphQL-Vue-Without-Route](https://github.com/dangkhoa2016/GraphQL-Vue-Without-Route): Phiên bản không sử dụng Vue Router.
- [Fastify-Mercurius-GraphQL](https://github.com/dangkhoa2016/Fastify-Mercurius-GraphQL): Backend GraphQL được sử dụng bởi frontend này.

## Lưu ý phát triển

- Giữ việc lựa chọn các trường (field) GraphQL sát với nhu cầu của thành phần/store để tránh lấy thừa dữ liệu (over-fetching).
- Sử dụng mẫu store phản xạ hiện có khi thêm trạng thái nghiệp vụ mới.
- Thêm các trang cấp route mới trong `src/views/` và đăng ký chúng trong `src/router.mjs`.
- Thêm các thành phần UI có thể tái sử dụng trong `src/components/`.
- Sử dụng các lệnh nhập (import) `@/` cho các tệp nguồn theo bí danh của Vite.
- Khi thay đổi hành vi backend, hãy cập nhật cả giả định GraphQL thực tế và các tệp JSON mẫu giả lập khi có liên quan.
- Chạy `yarn lint` và `yarn prettier` trước khi commit các thay đổi lớn.

## Giấy phép

Dự án này được cấp phép theo **Giấy phép MIT**. Xem tệp [LICENSE](LICENSE) để biết chi tiết.

## Tác giả

Đăng Khoa - [https://github.com/dangkhoa2016](https://github.com/dangkhoa2016)
