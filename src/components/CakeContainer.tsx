import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cakesActions from "../redux/cake/CakesActions";

interface AppState {
  cakes: number;
}

const CakeContainer = () => {
  const numOfCakes: any = useSelector((state: AppState) => state.cakes);
  const dispatch = useDispatch();
  const cakes = numOfCakes?.numOfCakes;
  const buyCake = (cakes: any) => {
    dispatch(cakesActions());
  };
  return (
    <>
      <h2>Cake Shop</h2>
      <h4>Number of cakes: {cakes}</h4>
      <button onClick={buyCake}>Buy cake</button>
    </>
  );
};

export default CakeContainer;
