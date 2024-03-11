import { createContext, useState } from "react";

const MovieContext = createContext();

function Provider({ children }) {
  const [count, setCount] = useState(0);

  const valueToShare = {
    count,
    incrementCount: () => {
      setCount(count + 1);
    },
  };

  return (
    <MovieContext.Provider value={valueToShare}>
      {children}
    </MovieContext.Provider>
  );
}

export { Provider };
export default MovieContext;
