# GraphQL Vue With Route - Vite

> 🌐 Language / Ngôn ngữ: [English](README.md) | **Tiếng Việt**

## Mô tả

Ứng dụng mẫu học tập xây dựng bằng Vue 3, Vue Router và Vite. Giao diện sử dụng Bootstrap 5. Các request GraphQL được giả lập (mock) trên client để dễ chạy mà không cần backend.

## 📚 Liên kết tài liệu
- **Tài liệu ảnh chụp màn hình**: [screenshots/SCREENSHOTS_SUMMARY.md](screenshots/SCREENSHOTS_SUMMARY.md)
- **Tài liệu ảnh chụp màn hình (Tiếng Việt)**: [screenshots/SCREENSHOTS_SUMMARY.vi.md](screenshots/SCREENSHOTS_SUMMARY.vi.md)

## 🔗 Server Backend
Dự án frontend này được thiết kế để hoạt động với server backend **[Fastify-Mercurius-GraphQL](https://github.com/dangkhoa2016/Fastify-Mercurius-GraphQL)**. Backend cung cấp tất cả các API GraphQL để quản lý người dùng, mèo, ảnh và các tương tác xã hội. Hãy đảm bảo rằng server backend đang chạy trước khi sử dụng ứng dụng frontend.

## Công nghệ

- Vue 3
- Vue Router
- Vite
- Bootstrap 5
- Axios + axios-mock-adapter (mock GraphQL)

## Yêu cầu

- Node.js 16+ (khuyến nghị Node 18+)
- yarn hoặc npm

## Cài đặt & Chạy

Clone repository, sau đó cài dependencies và chạy dev server:

Yarn:
```bash
yarn install
yarn dev
```

NPM:
```bash
npm install
npm run dev
```

Mở trình duyệt tại http://localhost:5173 (mặc định Vite). Lưu ý: router sử dụng hash mode (URL có dấu `#`).

## Scripts hữu ích

- `dev` — chạy dev server (vite)
- `build` — build production (xóa `./dist` rồi build)
- `preview` — preview bản build
- `lint` — chạy eslint và auto-fix
- `prettier` — format code bằng Prettier

Ví dụ:
```bash
yarn build
yarn preview
yarn lint
yarn prettier
```

## Dữ liệu mock (GraphQL)

Ứng dụng giả lập endpoint GraphQL trên client để tiện phát triển:

- `src/libs/api.mjs` — cấu hình axios + axios-mock-adapter (mock trả về file trong `src/sample-data/`).
- `src/sample-data/` — chứa các file JSON trả về cho các query/mutation mẫu.

Nếu bạn muốn kết nối với backend GraphQL thật, chỉnh `src/libs/api.mjs` và đặt `endpoint` về URL server của bạn, rồi điều chỉnh/loại bỏ phần mock nếu cần.

Ví dụ:
```js
// src/libs/api.mjs
export const endpoint = 'http://localhost:4000';
```

## Đăng nhập mẫu

Login hiện đang được mock — bất kỳ email/password nào cũng sẽ trả về dữ liệu mẫu. File dữ liệu mẫu: `src/sample-data/login.json` (user mẫu: `kirsten.brakus@gmail.com`, role: `admin`). Dùng để thử chức năng admin.

## Tính năng

- Theo dõi / bỏ theo dõi người dùng
- Thích / bỏ thích mèo và ảnh
- Pagination và gallery ảnh (PhotoSwipe)
- Chức năng admin: kích hoạt / vô hiệu hoá người dùng, mèo, ảnh
- Nhiều trang: About, FAQs, Contact, Users, Cats, ...

## Cấu trúc quan trọng

- `src/app.js` — entry point
- `src/router.mjs` — định nghĩa route (hash mode)
- `src/libs/api.mjs` — client GraphQL + mock
- `src/sample-data/` — JSON mock responses
- `src/components/` — các component tái sử dụng
- `src/views/` — các trang (views)
- `src/stores/` — stores nhẹ

## Góp ý & Phát triển

- Thay mock bằng backend thật để kiểm thử tích hợp.
- Thêm unit tests và CI nếu cần.

## License

Dự án này được cấp phép theo **MIT License** - xem tệp [LICENSE](LICENSE) để biết thêm chi tiết.

## Tác giả

- Dang khoa — https://github.com/dangkhoa2016
