interface RepositoryState {
  loading: boolean;
  error: string | null;
  data: string[];
}

interface SearchRepositoryAction {
  type: "search_repo";
}

interface SearchRepositorySuccessAction {
  type: "search_repo_success";
  payload: string[];
}

interface SearchRepositoryErrorAction {
  type: "search_repo_error";
  payload: string;
}

type Action =
  | SearchRepositoryAction
  | SearchRepositorySuccessAction
  | SearchRepositoryErrorAction;

const reducer = (state: RepositoryState, action: Action): RepositoryState => {
  switch (action.type) {
    case "search_repo":
      return { loading: true, error: null, data: [] };
    case "search_repo_success":
      return { loading: false, error: null, data: action.payload };
    case "search_repo_error":
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
