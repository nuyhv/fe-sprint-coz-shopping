import "./Bookmark.css";

export default function Bookmark({ image_url, title, price }) {
  return (
    <div className="bookmark-container">
      <img className="product-image" src={image_url}></img>
      <h3>{title}</h3>
      <span className="product-detail">{price}</span>
    </div>
  );
}
