import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  { id: "1", name: "osama", email: "osama.janjua84@gmail.com" },
  { id: "2", name: "hamza", email: "hamza.janjua84@gmail.com" },
  { id: "3", name: "abdullah", email: "abdullah.janjua84@gmail.com" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    editUser: (state, action) => {
      const { id, name, email } = action.payload;
      const existingUsers = state.find((user) => user.id === id);
      if (existingUsers) {
        existingUsers.name = name;
        existingUsers.email = email;
      }
    },
    deleteUser: (state, action) => {
        const { id } = action.payload;
        const existingUser = state.find(user => user.id === id);
        if(existingUser) {
          return state.filter(user => user.id !== id);
        }
      }
    }
});
export const { addUser, editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
