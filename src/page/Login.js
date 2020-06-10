import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from 'react-router-dom'

export default function Login(props) {
  let history = useHistory()
  let email = useSelector(state => state.email)
  let password = useSelector(state => state.password)
  const dispatch = useDispatch();
  const login = (e) => {
    e.preventDefault();
    let user = { email: email, password: password };
    dispatch({ type: "LOGIN", payload: user });
    history.goBack();
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e) => email = e.target.value} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => password = e.target.value} />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={(e) => login(e)}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
