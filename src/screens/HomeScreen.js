import products from "../data";
import "./HomeScreen.css";
import ProductCard from "../Components/ProductCard";
import Nav from '../Components/Nav';
import Cart from '../Components/Cart';

const HomeScreen = () => {
  return (
    <div>
      <Nav />
      <Cart />
    <div className='products__wrapper'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </div>
  );
};

export default HomeScreen;
