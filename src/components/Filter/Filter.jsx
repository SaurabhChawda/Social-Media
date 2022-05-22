import "./Filter.css";
export const Filter = () => {
  return (
    <div className="filter--container">
      <ul className="filter__unordered-List">
      <li className="filter__list-item">
          <button className="filter__btn">Latest</button>
        </li>
        <li className="filter__list-item">
          <button className="filter__btn">Trending</button>
        </li>
        <li className="filter__list-item">
          <button className="filter__btn">Oldest</button>
        </li>
      </ul>
    </div>
  );
};
