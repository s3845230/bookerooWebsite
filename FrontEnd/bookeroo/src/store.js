import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import allReducers from "./reducers";

const initalState = {};
const middleware = [thunk];

// let store;

// const ReactReduxDevTools =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// if (window.navigator.userAgent.includes("Chrome") && ReactReduxDevTools) {
//   store = createStore(
//     allReducers,
//     initalState,
//     compose(
//       applyMiddleware(...middleware),
//       ReactReduxDevTools
//     )
//   );
// } else {
//   store = createStore(
//     allReducers,
//     initalState,
//     compose(applyMiddleware(...middleware))
//   );
// }

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
);

const store = createStore(allReducers, enhancer);

// const store = createStore(
//   allReducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

export default store;