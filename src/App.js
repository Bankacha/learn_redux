// import { queryByTestId } from '@testing-library/react';
import Axios from 'axios';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, loggedIn, generateNumber, getContacts } from './actions/index';

function App() {

  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.loggedIn);
  const dispatch = useDispatch();
  const generate = useSelector(state => state.generate);
  const contacts = useSelector(state => state.contacts)

  Axios.get('https://5f99583350d84900163b8807.mockapi.io/banjex/contacts').then(response=> {
    dispatch(getContacts(response.data))
  })

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
      <table>
        <thead>
          <tr>
            <td>name</td>
            <td>gender</td>
            <td>number</td>
          </tr>
        </thead>
        <tbody>
          {
            contacts.map((c, i) => {
              return (
                <tr key={i}>
                  <td>{c.name}</td>
                  <td>{c.gender}</td>
                  <td>{c.number}</td>
                </tr>
              )
            })
          }

        </tbody>
      </table>
    </div>
  );
}

export default App;


