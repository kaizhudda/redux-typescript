interface RepositoryState {
  loading: boolean;
  error: string | null;
  data: string[];
}

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

type Action =
  | SearchRepositoryAction
  | SearchRepositorySuccessAction
  | SearchRepositoryErrorAction;

enum ActionType {
  SEARCH_REPO = "search_repo",
  SEARCH_REPO_SUCCESS = "search_repo_success",
  SEARCH_REPO_ERROR = "search_repo_error",
}

const reducer = (state: RepositoryState, action: Action): RepositoryState => {
  switch (action.type) {
    case ActionType.SEARCH_REPO:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPO_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPO_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
