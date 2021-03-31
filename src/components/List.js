export default function List({ data }) {
    const studentList = data.map((student) => (
        <tr ket={student.id}>
            <td>{student.name}</td>
            <td>{student.birthday}</td>
            <td>{student.email}</td>
            <td>{student.phone}</td>
            <td>dfad</td>
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
                    <th scope="col">Chức năng</th>
                </tr>
            </thead>
            <tbody>
                {studentList}
            </tbody>
        </table>
    );
}
