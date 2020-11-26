// import { queryByTestId } from '@testing-library/react';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, deleteContact, selectContact, search, edit } from './actions/index';
import { Table, Button, Container, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Edit from './components/editContact'

function App() {

  const [isEdit, setIsEdit] = useState(false);

  // const counter = useSelector(state => state.counter);
  // const isLogged = useSelector(state => state.loggedIn);
  const dispatch = useDispatch();
  // const generate = useSelector(state => state.generate);

  const contacts = useSelector(state => state.contacts.data);
  const selected = useSelector(s => s.contacts.selected);
  const filtered = useSelector(s => s.contacts.filtered);

  const loadContacts = () => {
    Axios.get('https://5f99583350d84900163b8807.mockapi.io/banjex/contacts').then(response => {
      dispatch(getContacts(response.data))
    })
      .catch((err) => {
        console.log('Error', err);
      })
  }

  useEffect(() => {
    loadContacts();
  }, [])

  const deleteItem = (id) => {
    Axios.delete(`https://5f99583350d84900163b8807.mockapi.io/banjex/contacts/${id}`)
      .then(r => {
        dispatch(deleteContact(id));
      })
      .catch((err) => {
        console.log('Error', err);
      })
  }

  const editDone = () => {
    setIsEdit(false);
    dispatch(selectContact(null));
  }

  const data = filtered.length ? filtered : contacts;

  return (

    <Container className="App">
      <input onChange={(event) => dispatch(search(event.target.value))}></input>
      {
        selected ? (
          <Card className="float-right" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{selected.name}</Card.Subtitle>
              <Card.Text>
                {selected.number}
              </Card.Text>
              <Button onClick={() => setIsEdit(true)}> Edit </Button>
            </Card.Body>
          </Card>
        ) : ''
      }
      {
        isEdit ? <Edit editDone={editDone}></Edit> : ''
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


