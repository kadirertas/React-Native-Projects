const initialState = {
  user: null,
  announcement: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload,
      };

    case 'LOAD_ANNOUNCEMENT':
      return {
        ...state,
        announcement: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
