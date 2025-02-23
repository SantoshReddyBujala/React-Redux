import React from "react";
import iceCreamActions from "../redux/icecream/IceCreamAction";
import { useDispatch, useSelector } from "react-redux";

const IceCreamContainer = () => {
  const numOfIceCreams: any = useSelector((state) => state);
  const dispatch = useDispatch();
  const iceCreams = numOfIceCreams.iceCreams.numOfIceCreams;
  const buyIceCream = (iceCreams: any) => {
    dispatch(iceCreamActions());
  };
  return (
    <>
      <h2>Cake Shop</h2>
      <h4>Number of icecream: {iceCreams}</h4>
      <button onClick={buyIceCream}>Buy IceCream</button>
    </>
  );
};

export default IceCreamContainer;
