interface RespositoriesState {
  loading: boolean;
  error: string | null;
  data: string[]; 
}


const reducer = (state: RespositoriesState, action: any) => { //fetching npm packages, but packages key word so we use repositories
switch(action.type){
  case 'search_repositories':
    return {loading: true, error: null, data: []} //loading is true, no error yet and reset data regardless since new search
  case 'search_repositories_success':
    return {loading: false, error: null, data: action.payload}
  case 'search_repositories_error':
    return {loading: false, error: action.payload, data: []}
  default:
    return state;
}

};


export default reducer;