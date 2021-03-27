function Student({ data, openModal }) {
    console.log(data)
    const studentsList = data.map((student) => (
        <tr key={student.id}>
            <td>{student.name}</td>
            <td>{student.birthday}</td>
            <td>{student.email}</td>
            <td>{student.phone}</td>
            <td>
                <button className="delete" onClick={ () => openModal(student.id, student.name) }>Xóa</button>
            </td>
        </tr>
    ));
    return <tbody id="dataTable">{studentsList}</tbody>;
}

export default Student;
