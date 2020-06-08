import { combineReducers } from "redux";
//giving a name to named export
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
});
