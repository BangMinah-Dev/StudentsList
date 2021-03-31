import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { STUDENTS } from "./fakeData";
import Header from "./components/Header";
import List from "./components/List";
import ModalCustom from "./components/Modal";

function App() {
    // Hiện thị danh sách
    const [students, setNewStudents] = useState(STUDENTS);

    // Phân biệt modal
    const [whichModal, setWhichModal] = useState("");

    // Thông tin sinh viên
    const [idToRemove, setidToRemove] = useState("");
    const [studentName, setStudentName] = useState("");
    const [studentBirthDay, setStudentBirthDay] = useState("");
    const [studentEmail, setStudentEmail] = useState("");
    const [studentPhone, setStudentPhone] = useState("");

    // Thông tin sinh viên người dùng nhập vào
    const name = (event) => setStudentName(event.target.value);
    const birthDay = (event) => setStudentBirthDay(event.target.value);
    const email = (event) => setStudentEmail(event.target.value);
    const phone = (event) => setStudentPhone(event.target.value);

    // Bật tắt Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (
        event,
        stdID,
        stdName,
        stdBirthDay,
        stdEmail,
        stdPhone
    ) => {
        setWhichModal(event.target.id);
        setidToRemove(stdID);
        setStudentName(stdName);
        setStudentBirthDay(stdBirthDay);
        setStudentEmail(stdEmail);
        setStudentPhone(stdPhone);
        setShow(true);
    };

    // Thêm mới học viên
    const [newID, setNewID] = useState(11);

    function addNew() {
        setNewID(newID + 1);

        let add = {
            id: newID,
            name: studentName,
            birthday: studentBirthDay,
            email: studentEmail,
            phone: studentPhone,
        };

        students.unshift(add);
        setShow(false);
    }

    // Chỉnh sửa học viên
    function editItem(){
        let edit = {
            id: newID,
            name: studentName,
            birthday: studentBirthDay,
            email: studentEmail,
            phone: studentPhone,
        };

        students.unshift(edit);
        setShow(false);
    }

    // Xóa học viên
    function deleteItem() {
        const removeItem = students.filter(
            (student) => student.id !== idToRemove
        );
        setNewStudents(removeItem);
        setShow(false);
    }

    return (
        <div className="App">
            <div className="container">
                <Header handleShow={handleShow}></Header>
                <List
                    data={students}
                    handleShow={handleShow}
                    whichModal={whichModal}
                ></List>
                <ModalCustom
                    show={show}
                    handleClose={handleClose}
                    handleShow={handleShow}
                    whichModal={whichModal}
                    idToRemove={idToRemove}
                    studentName={studentName}
                    studentBirthDay={studentBirthDay}
                    studentEmail={studentEmail}
                    studentPhone={studentPhone}
                    name={name}
                    birthDay={birthDay}
                    email={email}
                    phone={phone}
                    addNew={addNew}
                    deleteItem={deleteItem}
                ></ModalCustom>
            </div>
        </div>
    );
}

export default App;
