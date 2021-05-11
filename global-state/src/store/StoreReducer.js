const types = {
  authLogin: "Auth Login",
  authLogout: "Auth Logout",
  productDeleteAll: "Product Delete All",
  productChange: "Product Change",
};

const initialStore = {
  user: { id: 1, name: "Alejandro Gabriel" },
  products: [
    { id: 1, title: "Title #1" },
    { id: 2, title: "Title #2" },
  ],
};

const StoreReducer = (state, action) => {
  switch (action.type) {
    case types.authLogout:
      return {
        ...state,
        user: null,
      };
    case types.authLogin:
      return {
        ...state,
        user: { id: action.payload.id, name: action.payload.name },
      };
    default:
      return state;
  }
};

export { initialStore, types };
export default StoreReducer;
