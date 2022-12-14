import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import result from "./reducers/cardReducer";

const middleware = applyMiddleware(thunk);

const combinedReducer = combineReducers({
  result,
});

export const store = createStore(
  combinedReducer,
  composeWithDevTools(middleware)
);
