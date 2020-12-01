import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import App from "./components/App";
import reducers from "./reducers";

const store = createStore(
  reducers,
  {
    auth: { authenticated: localStorage.getItem("token") },
  },
  applyMiddleware(thunk)
);

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
