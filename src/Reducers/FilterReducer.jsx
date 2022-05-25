export const Reducer = (state, action) => {
  switch (action.type) {
    case "Latest":
      return { ...state, filteredData: action.payload.map((item) => item).reverse() };
    case "Oldest":
      return { ...state, filteredData: action.payload.map((item) => item) };
    case "Trending":
      return {
        ...state,
        filteredData: action.payload.filter((item) => item.likes.likeCount).sort((a, b) => b - a),
      };
    default:
      return { ...state, filteredData: action.payload };
  }
};
