import { useState } from "react";
import { Button } from "./Button";
import { useNavigate, useParams } from "react-router-dom";
import { TextField } from "./TextField";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "./userSlice";

export const EditUser = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);
  const existingUsers = users.filter((user) => user.id === params.id);
  const { name, email } = existingUsers[0];

  const navigate = useNavigate();
  const [values, setValues] = useState({
    name,
    email,
  });
  const handlerEditUser = () => {
    dispatch(
      editUser({
        id: params.id,
        name: values.name,
        email: values.email,
      })
    );
    navigate("/");
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
      <Button onClick={handlerEditUser}>Edit</Button>
    </div>
  );
};
