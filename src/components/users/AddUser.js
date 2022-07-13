import React, { useState } from "react";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import { TextField } from "./TextField";
import { useDispatch } from "react-redux";
import { addUser } from "./userSlice";
import {v4 as uuidv4 } from 'uuid'

export const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
  });
  const handlerAtUser = () => {
    setValues({ name: '', email: '' });
    dispatch(addUser({
      id: uuidv4(),
      name: values.name,
      email: values.email
    }));
    navigate('/');
  };
  return (
    <div className="MT-10 max-w-xl mx-auto">
      <TextField
        label="Name"
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        value={values.name}
        inputProps={{ type: "text", placeholder: "John Doe" }}
      />
      <TextField
        label="Email"
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        value={values.email}
        inputProps={{ type: "text", placeholder: "JohnDoe@gmail.com" }}
      />
      <Button onClick={handlerAtUser}>Submit</Button>
    </div>
  );
};
