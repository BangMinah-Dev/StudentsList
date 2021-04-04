import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import DataTable from "./components/DataTable";
import FormModal from "./components/FormModal";

function App() {
    // Tải danh sách sinh viên
    useEffect(() => {
        async function getData() {
            const res = await fetch(
                "https://stdmanagement.herokuapp.com/users"
            );
            const data = await res.json();
            setStudents(data);
        }
        getData();
    }, []);

    // Danh sách sinh viên
    const [students, setStudents] = useState([]);

    // Tắt bật Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    
    return (
        <div className="App">
            <Header></Header>
            <DataTable
                students={students}
                handleShow={handleShow}
                handleClose={handleClose}
            ></DataTable>
            <FormModal
                show={show}
                handleShow={handleShow}
                handleClose={handleClose}
            ></FormModal>
        </div>
    );
}

export default App;
