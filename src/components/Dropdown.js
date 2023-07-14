import { Link } from "react-router-dom";
import "./Dropdown.css";

export default function Dropdown() {
  return (
    <ul className="dropdown-container">
      <li className="my-page">
        <span>송상현님, 안녕하세요!</span>
      </li>
      <li className="itemlist-page">
        <Link to="/product/list">
          <div>
            <img src="../item.svg" alt="itemlist"></img>
            <span>상품리스트 페이지</span>
          </div>
        </Link>
      </li>
      <li className="bookmark-page">
        <Link to="/bookmark">
          <div className="bookmark-icon">
            <img src="../bookmark.svg" alt="bookmark"></img>
            <span>북마크 페이지</span>
          </div>
        </Link>
      </li>
    </ul>
  );
}
