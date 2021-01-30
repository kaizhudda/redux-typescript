import { combineReducers } from "redux";
import repoReducer from "./repositoriesReducer";

const reducers = combineReducers({
  repo: repoReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
