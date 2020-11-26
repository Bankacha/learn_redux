import React, { useState } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';


export default function Edit() {

    // const [state, setState] = useState({ data: [], selected: null, filtered: [] })
    // console.log(state)
    const dispatch = useDispatch();
    const selected = useSelector(s => s.contacts.selected)
    console.log(selected)
    
    const handleChange = (input, key) => {
        let newState = {};
        newState[key] = input;
        return newState;
    }

    return (
        <div>
            {
                selected !== null ? (
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                <Form.Control type='text'  value={selected.name} onChange={(event)=> dispatch(handleChange(event.target.value, 'name'))} ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Number</Form.Label>
                        <Form.Control  value={selected.number} ></Form.Control>
                    </Form.Group>
                    <Button type="submit">
                        Submit
                    </Button>
                </Form>
                ) : ''
            }
        </div>

    )
}