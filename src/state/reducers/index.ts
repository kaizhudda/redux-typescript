import { combineReducers } from "redux";
import repoReducer from "./repositoriesReducer";

const reducers = combineReducers({
  repo: repoReducer,
});

export default reducers;
