import { ActionType } from '../action-types';
import { Action } from '../actions';

interface RespositoriesState {
  //fetching npm packages, but packages key word so we use repositories
  loading: boolean;
  error: string | null;
  data: string[];
}

const intialState = {
  loading: false,
  error: null,
  data: []
}
const repositoriesReducer = (
  state: RespositoriesState = intialState, //must initialize state
  action: Action
): RespositoriesState => {
  //annotate return type so TS can catch data return type
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] }; //loading is true, no error yet and reset data regardless since new search
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default repositoriesReducer;
