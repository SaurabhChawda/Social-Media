import "./searchbar.css";
import { useSearch, useFilter } from "../../Contexts/Index";

export const SearchBar = () => {
  const {
    state: { filteredData },
  } = useFilter();
  const { setUpdatedData, allPost } = useSearch();
  const searchHandler = (value) => {
    return filteredData.length !== 0
      ? setUpdatedData(filteredData.filter((item) => item.username.toLowerCase().match(value.toLowerCase())))
      : setUpdatedData(allPost.filter((item) => item.username.toLowerCase().match(value.toLowerCase())));
  };
  return (
    <div className="searchbar">
      <input
        className="nav__input--search"
        type="search"
        placeholder="Search"
        onChange={(e) => searchHandler(e.target.value)}
      />
    </div>
  );
};
