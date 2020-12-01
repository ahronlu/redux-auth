import authReducer from "./auth";
import { reducer as formReducer } from "redux-form";

const { combineReducers } = require("redux");

const reducers = combineReducers({ auth: authReducer, form: formReducer });

export default reducers;
