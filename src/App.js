import "./App.css";
import { useState } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Modal } from "react-bootstrap";
import { STUDENTS } from "./fakeData.js";
import Student from "./components/studentsList.js";

function App() {
    const [students, setStudents] = useState(STUDENTS);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [modalDelete, setmodalDelete] = useState(false);
    const [idToRemove, setidToRemove] = useState("");
    const [studentName, setStudentName] = useState("");

    function openModal(id, name) {
        setStudentName(name);
        setidToRemove(id);
        setmodalDelete(true);
        console.log(id)
    }

    function closeModal() {
        setmodalDelete(false);
    }

    function confirm() {
        const removeItem = students.filter(
            (student) => student.id !== idToRemove
        );
        setStudents(removeItem);
        setmodalDelete(false);
        console.log(removeItem)
    }


    let inputName = React.createRef()
    let inputBirthDay = React.createRef()
    let inputEmail = React.createRef()
    let inputPhone = React.createRef()


    // const [newStudent, setNewStudent] = useState("")
    const [newID, setNewID] = useState(12)

    function addNew(){
        let name = inputName.current.value;
        let birthDay = inputBirthDay.current.value;
        let email = inputEmail.current.value;
        let phone = inputPhone.current.value;
        setNewID(newID + 1)
        console.log(newID)

        let add = {
            id : newID,
            name : name,
            birthday : birthDay,
            email,  
            phone       
        }

        students.unshift(add)
        setShow(false)
    }


    return (
        <div className="App">
            <div className="container">
                <h1 className="title text-center mt-5 mb-5">
                    Danh sách học viên
                </h1>
                <div className="d-flex justify-content-between">
                    <button
                        className="btn add btn-success mb-3"
                        onClick={handleShow}
                    >
                        <i className="fas fa-plus-circle" />
                        Thêm học viên
                    </button>
                </div>
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Họ tên</th>
                            <th scope="col">Năm sinh</th>
                            <th scope="col">Email</th>
                            <th scope="col">Số điện thoại</th>
                            <th scope="col">Chức năng</th>
                        </tr>
                    </thead>
                    <Student
                        data={students}
                        confirm={confirm}
                        closeModal={closeModal}
                        studentName={studentName}
                        openModal={openModal}
                    ></Student>
                </table>
            </div>

            {/* Modal add */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thêm học viên</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Họ và Tên</Form.Label>
                            <Form.Control type="text" ref={inputName} />
                        </Form.Group>
                        <Form.Group controlId="formBasicBirthDay">
                            <Form.Label>Ngày Sinh</Form.Label>
                            <Form.Control type="text" ref={inputBirthDay}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" ref={inputEmail}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPhone">
                            <Form.Label>Số Điện Thoại</Form.Label>
                            <Form.Control type="text" ref={inputPhone}/>
                        </Form.Group>
                        <div className="d-flex justify-content-end">
                            <Button
                                variant="success mr-3"
                                type="button"
                                onClick={addNew}
                            >
                                Save Changes
                            </Button>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>

            {/* Modal Delete */}
            <Modal show={modalDelete} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title variant="">Bạn có muốn xóa học viên</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>{studentName}.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="danger" onClick={confirm}>Xóa</Button>
                    <Button variant="secondary" onClick={closeModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default App;
