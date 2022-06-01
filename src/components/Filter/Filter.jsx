import "./Filter.css";
import { useFilter, useUser } from "../../Contexts/Index";
import { useEffect, useState } from "react";
export const Filter = () => {
  const [filterableData, setFilterableData] = useState();
  const {
    state: { usersPostsList },
  } = useUser();

  const { dispatch } = useFilter();
  useEffect(() => {
    setFilterableData(usersPostsList);
  }, [usersPostsList]);

  return (
    <div className="filter--container">
      <ul className="filter__unordered-List">
        <li className="filter__list-item">
          <button className="filter__btn" onClick={() => dispatch({ type: "Latest", payload: filterableData })}>
            Latest
          </button>
        </li>
        <li className="filter__list-item">
          <button className="filter__btn" onClick={() => dispatch({ type: "Trending", payload: filterableData })}>
            Trending
          </button>
        </li>
        <li className="filter__list-item">
          <button className="filter__btn" onClick={() => dispatch({ type: "Oldest", payload: filterableData })}>
            Oldest
          </button>
        </li>
        <li className="filter__list-item"></li>
      </ul>
    </div>
  );
};
