import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../actions';

export default function Edit(props) {

    const dispatch = useDispatch();
    const selected = useSelector(s => s.contacts.selected)

    const [data, setData] = useState({
        name: '',
        gender: '',
        number: '',
        id: ''
    })

    useEffect(() => {
        if (selected) {
            setData({
                name: selected.name,
                gender: selected.gender,
                number: selected.number,
                id: selected.id
            })
        }
    }, []);

    const submitEdit = () => {
        dispatch(actions.edit(data));
        props.editDone();
    }

    return (
        <div>
            {
                selected !== null ? (
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type='text' value={data.name} onChange={(event) => setData({ ...data, name: event.target.value })} ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Number</Form.Label>
                            <Form.Control value={data.number} onChange={e => setData({ ...data, number: e.target.value })}></Form.Control>
                        </Form.Group>
                        <Button onClick={() => submitEdit()} type="button">
                            Submit
                    </Button>
                    </Form>
                ) : 'THere is no selected user.'
            }
        </div>

    )
}