// import { queryByTestId } from '@testing-library/react';
import Axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, loggedIn, generateNumber, getContacts, deleteContact, selectContact, search } from './actions/index';
import { Table, Button, Container, Card, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.loggedIn);
  const dispatch = useDispatch();
  const generate = useSelector(state => state.generate);

  const contacts = useSelector(state => state.contacts.data);
  const selected = useSelector(s => s.contacts.selected)
  const filtered = useSelector(s => s.contacts.filtered)

  const loadContacts = () => {
    Axios.get('https://5f99583350d84900163b8807.mockapi.io/banjex/contacts').then(response => {
      dispatch(getContacts(response.data))
    })
  }

  useEffect(() => {
    loadContacts();
  }, [])

  const deleteItem = (id) => {
    Axios.delete(`https://5f99583350d84900163b8807.mockapi.io/banjex/contacts/${id}`).then(r => {
      dispatch(deleteContact(id));
    })
  }

  const data = filtered.length ? filtered : contacts; 

  return (
    <Container className="App">
      {/* <button onClick={() => dispatch(decrement())}>-</button>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(3))}>+</button>
      <button onClick={() => dispatch(loggedIn())}>Log In</button>
      {isLogged ? <h3>Some info i shouldn't see</h3> : ''}
      <br></br>
      <input value={generate}></input>
      <Button onClick={() => dispatch(generateNumber())}>Generate Number</Button> */}
      <input onChange={(event) => dispatch(search(event.target.value))}></input>
      {
        selected ? (
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{selected.name}</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
            </Card.Body>
          </Card>
        ) : ''
      }

      <Table>
        <thead>
          <tr>
            <td>name</td>
            <td>gender</td>
            <td>number</td>
            <td>del</td>
            <td>show</td>
          </tr>
        </thead>
        <tbody>
          {
              data.map((c, i) => {
                return (
                  <tr key={i}>
                    <td>{c.name}</td>
                    <td>{c.gender}</td>
                    <td>{c.number}</td>
                    <td><Button onClick={() => deleteItem(c.id)}>-</Button></td>
                    <td><Button onClick={() => dispatch(selectContact(c.id))}>+</Button></td>
                  </tr>
                )
              })
          }

        </tbody>
      </Table>
    </Container>
  );
}

export default App;


