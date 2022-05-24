export const Reducer = (state, action) => {
  switch (action.type) {
    case "Latest":
      return { ...state, filteredData: action.payload.map((item) => item).reverse() };
    case "Oldest":
      return { ...state, filteredData: action.payload.map((item) => item) };
    default:
      return { ...state, filteredData: action.payload };
  }
};
