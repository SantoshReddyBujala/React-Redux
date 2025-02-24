import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cakesActions from "../redux/cake/CakesActions";
import { Button, Divider, TextField } from "@mui/material";

interface AppState {
  cakes: number;
}

const NewCakeContainer = () => {
  const [numCakes, setNumCakes] = useState<string | number>(1);
  const numOfCakes: any = useSelector((state: AppState) => state.cakes);
  const dispatch = useDispatch();
  const cakes = numOfCakes?.numOfCakes;
  const buyCake = (cakes: any) => {
    dispatch(cakesActions(cakes));
  };
  return (
    <>
      <h2>Cake Shop</h2>
      <h4>Number of cakes: {cakes}</h4>
      <TextField
        id="filled-basic"
        label="Enter Number of Cakes"
        variant="filled"
        value={numCakes}
        onChange={(ele) => setNumCakes(ele.target.value)}
      />
      <Divider sx={{ marginTop: "16px" }} />
      <Button
        variant="contained"
        onClick={() => buyCake(numCakes)}
        sx={{ marginTop: "16px" }}
      >
        Buy {numCakes} Cakes
      </Button>
    </>
  );
};

export default NewCakeContainer;
