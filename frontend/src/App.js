import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/form/Form";
import Table from "./components/table/Table";
import EditForm from "./components/editForm/EditForm";

// import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/table" element={<Table />} />
        <Route path="/editUser/:id" element={<EditForm />} />
      </Routes>
    </Router>
  );
}

export default App;
