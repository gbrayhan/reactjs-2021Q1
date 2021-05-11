import { createContext, useReducer } from "react";

const StoreContext = createContext();
const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={[store, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext };
export default StoreProvider;
