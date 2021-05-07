import { useReducer } from "react";
import ProductReducer, {
  initialProductState,
  types,
} from "./reducer/ProductReducer";

const ProductApp = () => {
  const [productState, dispatch] = useReducer(
    ProductReducer,
    initialProductState,
    undefined
  );
  const { products, cart, active } = productState;

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} {product.id}
            <button
              onClick={() =>
                dispatch({
                  type: types.selectProduct,
                  payload: product,
                })
              }
            >
              Show
            </button>
            <button
              onClick={() =>
                dispatch({ type: types.addToCart, payload: product })
              }
            >
              Add to cart
            </button>
          </li>
        ))}
      </ul>

      <h2>Cart</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {products.find((element) => element.id === product.id)?.title}
            quantity :{` ${product.quantity} `}
            <button
              onClick={() =>
                dispatch({ type: types.removeFromCart, payload: product.id })
              }
            >
              Remove to cart
            </button>
          </li>
        ))}
      </ul>
      <h2>Preview</h2>
      <p>{products.find((element) => element.id === active.id)?.title}</p>
    </div>
  );
};

export default ProductApp;
