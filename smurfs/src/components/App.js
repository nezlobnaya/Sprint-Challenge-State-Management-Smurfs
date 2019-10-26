import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../actions';

import "./App.css";

const App = () => {
  const state = useSelector(state => state)
  const dispatch = useDispatch()

    return (
      <div className="App">
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <div>Welcome to your state management version of Smurfs!</div>
          <div>Have fun!</div>
          <button onClick={() => dispatch(fetchData())}>Fetch Smurfs!</button>
          {state.isLoading && <p>Loading your Smurfs!</p>}
        <div>
          {state.smurfs.map(i => (
          <h4 key={i.name}>{i.name}, {i.age}, {i.height}</h4>
          ))}
        </div>

      </div>
    );
  }


export default App;
