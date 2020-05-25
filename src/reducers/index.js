import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import AuthReducer from "./AuthReducer";
import StreamsReducer from "./StreamReducer";

export default combineReducers({
  auth: AuthReducer,
  form: FormReducer,
  streams: StreamsReducer,
});
