import { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";


const RepositoriesList: React.FC = () => {

  const [term, setTerm] = useState('');
  //const dispatch = useDispatch();
  const {searchRepositories } = useActions();
  const {data, error, loading} = useTypedSelector((state) => state.repositories); //destructure data from store, need to create type for state object
                                                          //normally could use useSelector, but state would have error due to no type assigned

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepositories(term) //normally would use dispa

  }
  return (
  <div>
    <form onSubmit={onSubmit}>
      <input value={term} onChange={(e) => setTerm(e.target.value)}/>
      <button>Search</button>
    </form>
    {error && <h3>{error}</h3>}
    {loading && <h3>Loading...</h3>}
    {!loading && !error && data.map(name => <div key={name}>{name}</div>)}

  </div>
  )
}

export default RepositoriesList;