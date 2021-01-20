const initialState = {
  showSidebar: false,
};
const Reducer = (state = initialState, action) => {
  if (action.type === "CLICKED") {
    return {
      ...state,
      showSidebar: true,
    };
  }
  if (action.type === "CROSSED") {
    return {
      ...state,
      showSidebar: false,
    };
  }
  return state;
};

export default Reducer;
