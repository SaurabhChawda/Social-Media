import { createContext, useEffect, useState, useContext } from "react";
import { useUser, useFilter } from "./Index";
const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const {
    state: { allPost },
  } = useUser();
  const {
    state: { filteredData },
  } = useFilter();

  const [updatedData, setUpdatedData] = useState([]);

  useEffect(() => {
    filteredData.length !== 0 ? setUpdatedData(filteredData) : setUpdatedData(allPost);
  }, [filteredData, allPost]);
  return <SearchContext.Provider value={{ updatedData, setUpdatedData, allPost }}>{children}</SearchContext.Provider>;
};

const useSearch = () => useContext(SearchContext);
export { useSearch, SearchProvider };
