import { useState } from "react";
import axios from 'axios';
import { useSelector,useDispatch } from "react-redux";
import { fetchJoke } from "./jokeSlice";

function App() {
  const [category,setCategory]=useState()
  const joke=useSelector(function(state){
    return state.joke.joke
  })
  const dispatch=useDispatch()
  function handleChangeCategory(e){
    setCategory(e.target.value)
  }
  function handleFetch(){
    dispatch(fetchJoke(category))
  }
  return (
    <div >
     <input onChange={handleChangeCategory}></input>
     <button onClick={handleFetch}>Get Jokes</button>
     <h1 style={{color:"red;"}}>{joke}</h1>
    </div>
  );
}

export default App;
