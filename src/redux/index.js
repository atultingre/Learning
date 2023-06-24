//  inport for react-redux
// import redux from 'redux';

// Import redux
const redux = require("redux");
const reduxLogger = require("redux-logger");

// Cretate Store
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

// ACTION
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAME = "BUY_ICECREAME";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "first redux action",
  };
}

function buyIceCreame() {
  return {
    type: BUY_ICECREAME,
  };
}

// (previousState, action) => newState

// Initial State
// const initialState = {
//   numOfCakes: 10,
//   numOfIcecreams: 20,
// };

const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIceCreams: 20,
};

// REDUCER
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAME:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1,
//       };

//     case BUY_ICECREAME:
//       return {
//         ...state,
//         numOfIcecreams: state.numOfIcecreams - 1,
//       };
//     default:
//       return state;
//   }
// };

// CombineReducer
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));
// STORE
// const store = createStore(reducer);
console.log("Initial State", store.getState());
// Subscribe store
const unsubscribe = store.subscribe(() =>{}
);

// Dispacing action to store
store.dispatch(buyCake());
// store.dispatch(buyCake());
// store.dispatch(buyCake());
// store.dispatch(buyIceCreame());
// store.dispatch(buyIceCreame());
store.dispatch(buyIceCreame());

// Unsubscribe Store
unsubscribe();
