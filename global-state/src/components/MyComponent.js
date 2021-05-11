import React, { useContext } from "react";
import { StoreContext } from "../store/StoreProvider";

const MyComponent = () => {
  const [store, dispatch] = useContext(StoreContext);
  const { user, products } = store;

  return (
    <div>
      <h1>My Component</h1>
      <h2>User: {user.name}</h2>
      <button>Logout</button>
      <button>Login</button>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
      <button>Delete All</button>
      <button>Change</button>
    </div>
  );
};

export default MyComponent;
