import "./Product.css";

export default function Product({ product }) {
  const {
    type,
    title,
    sub_title,
    image_url,
    brand_name,
    brand_image_url,
    follower,
    price,
    discountPercentage,
    bookmarked,
  } = product;

  switch (type) {
    case "Product":
      return (
        <div className="product-container">
          <div className="image-container">
            <img className="product-image" src={image_url}></img>
            <img
              className="bookmark-image"
              src={bookmarked ? "/staron.svg" : "/staroff.svg"}
            ></img>
          </div>
          <div className="title-container">
            <h3>{title}</h3>
            <span className="discount">
              {discountPercentage ? `${discountPercentage}%` : ""}
            </span>
          </div>
          <div className="detail-container">
            <div className="dummy"></div>
            <span className="product-price">
              {Number(price).toLocaleString()}원
            </span>
          </div>
        </div>
      );

    case "Category":
      return (
        <div className="product-container">
          <div className="image-container">
            <img className="product-image" src={image_url}></img>
            <img
              className="bookmark-image"
              src={bookmarked ? "/staron.svg" : "/staroff.svg"}
            ></img>
          </div>
          <div className="title-container">
            <h3># {title}</h3>
          </div>
          <div className="detail-container"></div>
        </div>
      );

    case "Exhibition":
      return (
        <div className="product-container">
          <div className="image-container">
            <img className="product-image" src={image_url}></img>
            <img
              className="bookmark-image"
              src={bookmarked ? "/staron.svg" : "/staroff.svg"}
            ></img>
          </div>
          <div className="title-container">
            <h3>{title}</h3>
          </div>
          <div className="detail-container">
            <span>{sub_title}</span>
          </div>
        </div>
      );

    case "Brand":
      return (
        <div className="product-container">
          <div className="image-container">
            <img className="product-image" src={brand_image_url}></img>
            <img
              className="bookmark-image"
              src={bookmarked ? "/staron.svg" : "/staroff.svg"}
            ></img>
          </div>
          <div className="title-container">
            <h3>{brand_name}</h3>
            <h3>관심고객수</h3>
          </div>
          <div className="detail-container">
            <div className="dummy"></div>
            <span className="follwer-count">{follower.toLocaleString()}</span>
          </div>
        </div>
      );
    default:
  }
}