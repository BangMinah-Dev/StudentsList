import "./Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Table } from "react-bootstrap";
import {
    faEdit,
    faPlusCircle,
    faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

function DataTable({ students, handleShow, handleClose }) {
    const studentList = students.map((student) => (
        <tr key={student.id}>
            <td>{student.name}</td>
            <td>{student.birthday}</td>
            <td>{student.email}</td>
            <td>{student.phone}</td>
            <td className="text-center d-flex justify-content-around">
                <Button variant="success">
                    <FontAwesomeIcon
                        className="mr-2"
                        icon={faEdit}
                    ></FontAwesomeIcon>
                    Sửa
                </Button>
                <Button variant="danger">
                    <FontAwesomeIcon
                        className="mr-2"
                        icon={faTrashAlt}
                    ></FontAwesomeIcon>
                    Xóa
                </Button>
            </td>
        </tr>
    ));
    return (
        <div className="container">
            <Button className="mb-3" onClick={handleShow}>
                <FontAwesomeIcon
                    className="mr-2"
                    icon={faPlusCircle}
                ></FontAwesomeIcon>
                Thêm học viên
            </Button>
            <Table striped bordered hover>
                <thead className="thead-dark">
                    <tr>
                        <th>Họ Tên</th>
                        <th>Năm sinh</th>
                        <th>Email</th>
                        <th>Số điện thoại</th>
                        <th className="text-center">Chức năng</th>
                    </tr>
                </thead>
                <tbody>{studentList}</tbody>
            </Table>
        </div>
    );
}

export default DataTable;
