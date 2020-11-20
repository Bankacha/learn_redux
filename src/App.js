import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, loggedIn, generateNumber } from './actions/index';

function App() {

  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.loggedIn);
  const dispatch = useDispatch();
  const generate = useSelector(state => state.generate);


  return (
    <div className="App">
      <button onClick={() => dispatch(decrement())}>-</button>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(3))}>+</button>
      <button onClick={() => dispatch(loggedIn())}>Log In</button>
      {isLogged ? <h3>Some info i shouldn't see</h3> : ''}
      <br></br>
      <input value={generate}></input> 
      <button onClick={() => dispatch(generateNumber())}>Generate Number</button>
    </div>
  );
}

export default App;


