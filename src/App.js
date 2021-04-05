import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import List from "./components/List";
import ModalCustom from "./components/ModalCustom";
import { Pagination } from "react-bootstrap";

function App() {
    // Hiện thị danh sách
    const [students, setStudentsList] = useState([]);

    useEffect(() => {
        async function getData() {
            const res = await fetch(
                "https://stdmanagement.herokuapp.com/users?_page=1&_limit=8"
            );
            const data = await res.json();
            setStudentsList(data);
        }
        getData();
    }, []);

    // Phân biệt modal
    const [whichModal, setWhichModal] = useState("");

    // Thông tin sinh viên
    const [idToRemove, setidToRemove] = useState("");
    const [studentName, setStudentName] = useState("");
    const [studentBirthDay, setStudentBirthDay] = useState("");
    const [studentEmail, setStudentEmail] = useState("");
    const [studentPhone, setStudentPhone] = useState("");

    // Thông tin sinh viên người dùng nhập vào thay đổi State
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
        setWhichModal(event.target.attributes[0].value);
        setidToRemove(stdID);
        setStudentName(stdName);
        setStudentBirthDay(stdBirthDay);
        setStudentEmail(stdEmail);
        setStudentPhone(stdPhone);
        setShow(true);
    };

    // Thêm mới học viên
    function addNew() {
        let newItem = {
            name: studentName,
            birthday: studentBirthDay,
            email: studentEmail,
            phone: studentPhone,
        };
        fetch("https://stdmanagement.herokuapp.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newItem),
        });

        students.push(newItem);
        setShow(false);
    }

    // Chỉnh sửa học viên
    function editItem() {
        let newArr = [...students];
        let index = newArr.findIndex((student) => student.id === idToRemove);
        if (index > -1) {
            newArr[index].name = studentName;
            newArr[index].birthday = studentBirthDay;
            newArr[index].email = studentEmail;
            newArr[index].phone = studentPhone;
        }

        let newItem = {
            id: idToRemove,
            name: studentName,
            birthday: studentBirthDay,
            email: studentEmail,
            phone: studentPhone,
        };
        fetch(`https://stdmanagement.herokuapp.com/users/${idToRemove}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newItem),
        });

        setStudentsList(newArr);
        setShow(false);
    }

    // Xóa học viên
    function deleteItem() {
        const removeItem = students.filter(
            (student) => student.id !== idToRemove
        );
        setStudentsList(removeItem);

        fetch(`https://stdmanagement.herokuapp.com/users/${idToRemove}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(),
        });

        setStudentsList(removeItem);
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
                    editItem={editItem}
                    deleteItem={deleteItem}
                ></ModalCustom>
            </div>
            <div className="container d-flex justify-content-center">
                <Pagination>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Ellipsis />

                    <Pagination.Item>{10}</Pagination.Item>
                    <Pagination.Item>{11}</Pagination.Item>
                    <Pagination.Item active>{12}</Pagination.Item>
                    <Pagination.Item>{13}</Pagination.Item>
                    <Pagination.Item disabled>{14}</Pagination.Item>

                    <Pagination.Ellipsis />
                    <Pagination.Item>{20}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
            </div>
        </div>
    );
}

export default App;
