import { Link } from "react-router-dom";
export default function Dropdown() {
  return (
    <div className="dropdown-container">
      <div>
        <span>OOO님 안녕하세요</span>
      </div>
      <Link to="/product/list">
        <div>
          <span>상품리스트 페이지</span>
        </div>
      </Link>
      <Link to="/bookmark">
        <div>
          <span>북마크 페이지</span>
        </div>
      </Link>
    </div>
  );
}
