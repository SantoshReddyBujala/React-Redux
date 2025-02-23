import { useDispatch, useSelector } from "react-redux";
import iceCreamActions from "../redux/icecream/IceCreamAction";
interface AppState {
  iceCreams: number;
}
const IceCreamContainer = () => {
  const numOfIceCreams: any = useSelector((state: AppState) => state.iceCreams);
  const dispatch = useDispatch();
  const iceCreams = numOfIceCreams?.numOfIceCreams;
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
