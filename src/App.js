import "./App.css";
import { UserList } from "./components/users/UserList";
import { Routes, Route } from "react-router-dom";
import { AddUser } from "./components/users/AddUser";
import { EditUser } from "./components/users/EditUser";

function App() {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <h1 className="text-center font-bold text-2xl text-gray-700">
        Crud with Redux
      </h1>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/Add-User" element={<AddUser />} />
        <Route path="/Edit-User/:id" element={<EditUser />} />


      </Routes>
    </div>
  );
}

export default App;
