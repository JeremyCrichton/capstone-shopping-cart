<<<<<<< HEAD
// import thunkMiddleware from "redux-thunk";
// import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";

// const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  // applyMiddleware(thunkMiddleware, loggerMiddleware)
  // applyMiddleware(thunkMiddleware)
);
=======
import { createStore } from "redux";
import rootReducer from "./reducers/index";

const store = createStore(rootReducer);
>>>>>>> 1d7976c6b6ac284a8c8c92a67c2f2c6c6c33e15a

export default store;
