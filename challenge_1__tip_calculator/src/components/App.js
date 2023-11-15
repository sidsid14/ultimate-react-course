import GroceryApp from "./GroceryApp";
import ImageGallery from "./ImageGallery";
import Products from "./Product";

function App() {
  //   const links = ["https://bit.ly/3lmYVna", "https://bit.ly/3flyaMj"];

  //   return <ImageGallery links={links} />;
  const products = [
    { name: "Oranges", votes: 0 },
    { name: "Bananas", votes: 0 },
  ];

  return <GroceryApp productsObj={products} />;
}

export default App;
