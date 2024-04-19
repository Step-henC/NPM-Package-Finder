import { ActionType } from "../action-types";

//since we have mulitple options of data returns, we need interface for each action type :(

interface SearchRepositoriesAction{
  type: ActionType.SEARCH_REPOSITORIES
}

interface SearchRepositoriesSuccess{
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface SearchRepositoriesError {
  type: ActionType.SEARCH_REPOSITORIES_ERROR
  payload: string; //the payload will have the error
}

export type Action = SearchRepositoriesAction | //type union
SearchRepositoriesError |
SearchRepositoriesSuccess