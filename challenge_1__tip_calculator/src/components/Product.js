function Product({ product, onVote }) {
  const plus = () => {
    // Call props.onVote to increase the vote count for this product
    onVote(product.name, "plus");
  };
  const minus = () => {
    // Call props.onVote to decrease the vote count for this product
    onVote(product.name, "minus");
  };
  return (
    <li>
      <span>{product.name}</span> - <span>votes: {product.votes}</span>
      <button onClick={plus}>+</button> <button onClick={minus}>-</button>
    </li>
  );
}

export default Product;
