import * as type from "../cake/CakeTypes";
const initialState = {
  numOfCakes: 10,
};
const cakeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case type.BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

export default cakeReducer;
