import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import counter from "./Reducers/counter";

import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";


const store = createStore(counter, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
