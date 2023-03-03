const initialState = {
  isLoggedIn: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Access':
      return { ...state, isLoggedIn: true };
    case 'Not Access':
      return { ...state, isLoggedIn: false };
    default:
      break;
  }
  return state;

};

export default reducer;
