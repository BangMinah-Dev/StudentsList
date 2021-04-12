import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Header from "./Header";
import List from "./List";
import ModalCustom from "./ModalCustom";
import Pagination from "./Pagination";
import { useHistory } from "react-router-dom";



function Home() {
    const history = useHistory();
    if(localStorage.getItem("token") === null){
        history.push("/login")
    }

    document.title = "Quản lý học viên";
    // Hiện thị danh sách
    const [students, setStudentsList] = useState([]);
    const [totalItems, setTotalItems] = useState(0);

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

    const [page, setPage] = useState(1);

    useEffect(() => {
        async function getData() {
            const res = await fetch(
                `https://stdmanagement.herokuapp.com/users?_page=${page}&_limit=10`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    }
                });
            const data = await res.json();

            let itemsCount = res.headers.get("X-Total-Count");

            setTotalItems(itemsCount);
            setStudentsList(data);
        }
        getData();
    }, [page]);

    // Pagination
    function changePage(item) {
        setPage(item);
    }

    function prev() {
        setPage(page - 1);
    }

    function next() {
        setPage(page + 1);
    }

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
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(newItem),
        });
        students.unshift(newItem);
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
                Authorization: `Bearer ${localStorage.getItem("token")}`,
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
            headers:{
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        });

        setStudentsList(removeItem);
        setShow(false);
    }

    return (
        <div className="App">
            <div>
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
                    <Pagination
                        totalItems={totalItems}
                        changePage={changePage}
                        prev={prev}
                        next={next}
                        page={page}
                    ></Pagination>
                </div>
            </div>
        </div>
    );
}

export default Home;
