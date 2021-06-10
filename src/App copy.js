import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Thẻ header: tạo phần đầu trang */}
      <header className="App-header">
        {/* Thẻ img: dùng để chèn hình ảnh vào trang web */}
        {/* Ý nghĩa thuộc tính:
          src: xác định đường dẫn đến tập tin hình ảnh
          alt: xác định nội dung văn bản sẽ hiển thị thay thế khi đường dẫn đến tập tin hình ảnh không chính xác */}
        <img src={logo} className="App-logo" alt="logo" />

        {/* Thẻ <code> dùng để xác định một đoạn văn bản mang ý nghĩa là các mã lệnh.
        Thẻ <code> được thiết lập mặc định font chữ monospace của trình duyệt, font chữ này thích hợp cho mã lệnh */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        {/* Thẻ a: dùng để tạo liên kết đến 1 tài liệu nào đó */}
        {/* Ý nghĩa thuộc tính:
          href: xác định url đến tài liệu muốn chuyển tới,
                xác đinh 1 vị trí bên trong trang web (vị trí được xác định dựa vào id)
          download: khi người dùng bấm vào liên kết thì tài liệu sẽ tự động tải về
          target: xác định nơi mà tài liệu sẽ được mở
            + _blank: mở tài liệu trong 1 tab mới
            + _self: mở tài liệu trong khung hiện tại
            + _parent: mở tài liệu trong khung cha của khung hiện tại
            + _top: mở tài liệu trong tab hiện tại
          rel="noopener noreferrer": ngăn chặn việc trang vừa mở của target="_blank" chiếm quyền sử dụng website */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
