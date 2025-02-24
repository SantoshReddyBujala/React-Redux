import * as type from "../cake/CakeTypes";

const cakesActions = (numCakes = 1) => {
  return {
    type: type.BUY_CAKE,
    payload: numCakes,
  };
};

export default cakesActions;
