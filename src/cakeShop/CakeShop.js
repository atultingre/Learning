import React from "react";
import { Provider } from "react-redux";
import CakeContainer from "./components/CakeContainer";
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/Users/UserContainer";

const CakeShop = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        <hr />
        <ItemContainer cake />
        <ItemContainer />
        <hr />
        <NewCakeContainer />
        <hr />
        <CakeContainer />
        <hr />
        <IceCreamContainer />
        <hr />
        <HooksCakeContainer />
      </div>
    </Provider>
  );
};

export default CakeShop;
