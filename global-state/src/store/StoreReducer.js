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
    default:
      return state;
  }
};

export { initialStore };
export default StoreReducer;
