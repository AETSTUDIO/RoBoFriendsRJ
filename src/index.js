import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
//import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import "./index.css";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import "tachyons";
import { searchRobots, requestRobots } from "./reducers";

//const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots });
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
