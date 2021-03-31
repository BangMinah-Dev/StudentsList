import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { STUDENTS } from "./fakeData";
import Header from "./components/Header"
import List from "./components/List"
import { Form, Button, Modal } from "react-bootstrap";


function App() {

    const [students, setNewStudents] = useState(STUDENTS)

    return (
        <div className="App">
            <div className="container">
                <Header></Header>
                <List data={students}></List>
            </div>
        </div>
    
    );
}

export default App;
