import { createContext, useContext } from "react";
import { useIterator } from "../hooks/useIterator";

const IteratorContext = createContext();

function IteratorProvider({ children }) {
  const [userList, current, loading, next, previous] = useIterator(
    "https://randomuser.me/api"
  );
  return (
    <IteratorContext.Provider
      value={[userList, current, loading, next, previous]}
    >
      {children}
    </IteratorContext.Provider>
  );
}

function useIteratorContext() {
  const context = useContext(IteratorContext);
  if (context === undefined)
    throw new Error("Iterator context used outside the Iterator Provider");
  return context;
}

export { IteratorProvider, useIteratorContext };
