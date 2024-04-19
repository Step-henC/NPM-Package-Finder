import { combineReducers } from "redux";
import repositoriesReducer from "./repositoriesReducers";



const reducers = combineReducers({
  repositories: repositoriesReducer,
})

export default reducers;


export type RootState = ReturnType<typeof reducers>; //take this function and give us back the type of whatever this funciton returns
//built in for typescript
//typescript is aware of our state but we need a type assigned to state in our useSelector()
//https://react-redux.js.org/using-react-redux/usage-with-typescript
//export this from the index.ts in state for central entryfile 