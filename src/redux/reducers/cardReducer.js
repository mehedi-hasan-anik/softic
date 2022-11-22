const cardReducer = (state = [], action) => {
  switch (action.type) {
    case "TOTAL_DATA": {
      const newState = {
        ...state,
        totalResult: action.payload,
      };
      return newState;
    }

    default: {
      return state;
    }
  }
};

export default cardReducer;
