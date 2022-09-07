
import Product from './components/Product';
import data from './ProductsData';
function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="index.html">Exo Shop</a>
        </div>
        <div>
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <main>
        <div className="row center">
           {data.products.map(product =>(
            //if we are using map then the first element after map should have a key and all keys should be unique
            <Product key= {product._id} product = {product} />
          ))
           }
          
        </div>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
  );
}

export default App;
