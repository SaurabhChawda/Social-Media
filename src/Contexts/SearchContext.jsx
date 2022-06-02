import { createContext, useEffect, useState, useContext } from "react";
import { useFilter } from "./Index";
import { useSelector } from "react-redux";
const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const usersPostsList = useSelector((state) => state.post.usersPostsList);
  const {
    state: { filteredData },
  } = useFilter();

  const [updatedData, setUpdatedData] = useState([]);

  useEffect(() => {
    filteredData.length !== 0 ? setUpdatedData(filteredData) : setUpdatedData(usersPostsList);
  }, [filteredData, usersPostsList]);
  return (
    <SearchContext.Provider value={{ updatedData, setUpdatedData, usersPostsList }}>{children}</SearchContext.Provider>
  );
};

const useSearch = () => useContext(SearchContext);
export { useSearch, SearchProvider };
