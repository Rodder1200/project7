import { combineReducers } from "redux";
import userReducer from "./userReducer";
import formReducer from "./formReducer";
import { reducer } from "redux-form/immutable";

export default combineReducers({
  users: userReducer,
  formData: formReducer,
  reduxFormData: reducer
});
