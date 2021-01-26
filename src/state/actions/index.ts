import { ActionType } from "../actionTypes";

interface SearchRepositoryAction {
  type: ActionType.SEARCH_REPO;
}

interface SearchRepositorySuccessAction {
  type: ActionType.SEARCH_REPO_SUCCESS;
  payload: string[];
}

interface SearchRepositoryErrorAction {
  type: ActionType.SEARCH_REPO_ERROR;
  payload: string;
}

export type Action =
  | SearchRepositoryAction
  | SearchRepositorySuccessAction
  | SearchRepositoryErrorAction;
