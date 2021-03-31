import "./Icon"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
export default function List({ data, handleShow }) {
    const studentList = data.map((student) => (
        <tr key={student.id}>
            <td>{student.name}</td>
            <td>{student.birthday}</td>
            <td>{student.email}</td>
            <td>{student.phone}</td>
            <td className="text-center">
                <button
                    databutton="buttonEdit"
                    className="btn btn-success mr-3"
                    onClick={(event) => handleShow(event, student.id, student.name, student.birthday, student.email, student.phone)}
                >
                    <FontAwesomeIcon className="mr-2" icon="edit"></FontAwesomeIcon>
                    Sửa
                </button>
                <button
                    databutton="buttonDelete"
                    className="btn btn-danger"
                    onClick={(event) => handleShow(event, student.id, student.name)}
                >
                    <FontAwesomeIcon className="mr-2" icon="trash-alt"></FontAwesomeIcon>
                    Xóa
                </button>
            </td>
        </tr>
    ));
    return (
        <table className="table table-striped">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Họ tên</th>
                    <th scope="col">Năm sinh</th>
                    <th scope="col">Email</th>
                    <th scope="col">Số điện thoại</th>
                    <th scope="col" className="text-center">
                        Chức năng
                    </th>
                </tr>
            </thead>
            <tbody>{studentList}</tbody>
        </table>
    );
}
