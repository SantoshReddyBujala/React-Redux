import * as type from "./IceCreamTypes";

const initialStateIceCream = {
  numOfIceCreams: 15,
};
const iceCreamReducer = (state = initialStateIceCream, action: any) => {
  switch (action.type) {
    case type.BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

export default iceCreamReducer;
