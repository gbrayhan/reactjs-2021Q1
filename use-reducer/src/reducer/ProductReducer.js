const initialProductState = {
  products: [
    { id: 1, title: "Product 1" },
    { id: 2, title: "Product 2" },
  ],
  cart: [{ id: 1, quantity: 3 }],
  active: { id: 1 },
};

const types = {
  selectProduct: "Select product",
  addToCart: "Add to cart",
  removeFromCart: "Remove from cart",
};

const ProductReducer = (state, action) => {
  switch (action.type) {
    case types.selectProduct:
      return { ...state, active: action.payload };
    case types.addToCart:
      const newProduct = action.payload;
      const cartContainProduct = state.cart.find(
        (prod) => prod.id === newProduct.id
      );

      return cartContainProduct
        ? {
            ...state,
            cart: state.cart.map((prod) =>
              prod.id === newProduct.id
                ? { ...prod, quantity: prod.quantity++ }
                : prod
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...action.payload, quantity: 1 }],
          };
    case types.removeFromCart:
      return {
        ...state,
        cart: state.cart.filter((element) => element.id !== action.payload),
      };
    default:
      return state;
  }
};

export { initialProductState, types };
export default ProductReducer;
