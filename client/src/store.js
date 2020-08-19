import foodReducer from "./reducers/foodReducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import cartReducer from "./reducers/cartReducer";
import authReducer from "./reducers/authReducer";
import errorReducer from "./reducers/errorReducer";
import userReducer from "./reducers/userReducer";
import storage from "redux-persist/lib/storage";
import { persistCombineReducers } from "redux-persist";
import thunk from "redux-thunk";
const intitalState = {};
const middleware = [thunk];
const rootPersistConfig = {
  key: "root",
  storage: storage,
};
const rootReducer = persistCombineReducers(rootPersistConfig, {
  foodReducer,
  cartReducer,
  authReducer,
  errorReducer,
  userReducer,
});

const store = createStore(
  rootReducer,
  intitalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
