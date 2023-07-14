import Product from "../components/Product";
import Bookmark from "../components/Bookmark";
import "./Main.css";

export default function Main({ products }) {
  return (
    <main className="main-container">
      <h2>상품 리스트</h2>
      <section className="itemlist-container">
        {products
          .map((product) => (
            <Product key={product.id} product={product}></Product>
          ))
          .slice(0, 4)}
      </section>
      <h2>북마크 리스트</h2>
      <section className="bookmark_list-container">
        {products
          .filter((product) => product.bookmarked)
          .map((product) => (
            <Bookmark key={product.id} product={product}></Bookmark>
          ))
          .slice(0, 4)}
      </section>
    </main>
  );
}
