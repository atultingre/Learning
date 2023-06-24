import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake, buyIceCream } from "../redux";

const HooksCakeContainer = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Hooks Cake Container</h1>
      <h2>Number of cakes - {numOfCakes}</h2>
      <h2>Number of icecreams - {numOfIceCreams}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake </button>
      <button onClick={() => dispatch(buyIceCream())}>Buy Icecream </button>
    </div>
  );
};

export default HooksCakeContainer;
