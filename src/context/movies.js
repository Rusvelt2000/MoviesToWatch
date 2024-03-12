import { createContext, useState } from "react";

const MovieContext = createContext();

function Provider({ children }) {
  const valueToShare = {};

  return <MovieContext.Provider value={{}}>{children}</MovieContext.Provider>;
}

export { Provider };
export default MovieContext;
