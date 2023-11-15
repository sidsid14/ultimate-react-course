import { useState } from "react";
import Product from "./Product";

function GroceryApp({ productsObj }) {
  let [products, setProducts] = useState(productsObj);
  const onVote = (name, operation) => {
    // Update the products array accordingly ...
    console.log(name, operation);
    setProducts((productsList) => {
      return productsList.map((p) =>
        p.name !== name
          ? p
          : operation === "plus"
          ? { ...p, votes: p.votes + 1 }
          : { ...p, votes: p.votes - 1 }
      );
    });
  };

  return (
    <ul>
      {products.map((product) => (
        <Product key={product.name} product={product} onVote={onVote} />
      ))}
    </ul>
  );
}

export default GroceryApp;
