import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../state";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector; 
//rather than using useSelector
//we will use this typedSelector
//lets us know we are returning a type