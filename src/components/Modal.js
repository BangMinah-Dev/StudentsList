import { Form, Button, Modal } from "react-bootstrap";

export default function ModalCustom({
    show,
    handleClose,
    whichModal,
    idToRemove,
    studentName,
    studentBirthDay,
    studentEmail,
    studentPhone,
    name,
    birthDay,
    email,
    phone,
    addNew,
    editItem,
    deleteItem,
}) {
    // console.log(whichModal);

    return (
        <Modal
            show={show}
            onHide={handleClose}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                {whichModal === "buttonAdd" && (
                    <Modal.Title>Thêm mới học viên</Modal.Title>
                )}
                {whichModal === "buttonEdit" && (
                    <Modal.Title>Chỉnh sửa học viên</Modal.Title>
                )}
                {whichModal === "buttonDelete" && (
                    <Modal.Title className="text-danger">Bạn có chắc muốn xóa học viên ?</Modal.Title>
                )}
            </Modal.Header>
            <Modal.Body>
                {whichModal === "buttonAdd" && (
                    <Form>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Họ và Tên</Form.Label>
                            <Form.Control type="text" defaultValue="" onChange={(event) => name(event)} />
                        </Form.Group>
                        <Form.Group controlId="formBasicBirthDay">
                            <Form.Label>Năm sinh</Form.Label>
                            <Form.Control type="text" defaultValue="" onChange={(event) => birthDay(event)} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" defaultValue="" onChange={(event) => email(event)} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPhone">
                            <Form.Label>Điện thoại</Form.Label>
                            <Form.Control type="text" defaultValue="" onChange={(event) => phone(event)} />
                        </Form.Group>
                    </Form>
                )}
                {whichModal === "buttonEdit" && (
                    <Form>
                        <Form.Control type="hidden" defaultValue={idToRemove} />
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Họ và Tên</Form.Label>
                            <Form.Control type="text" defaultValue={studentName} onChange={(event) => name(event)} />
                        </Form.Group>
                        <Form.Group controlId="formBasicBirthDay">
                            <Form.Label>Năm sinh</Form.Label>
                            <Form.Control type="text" defaultValue={studentBirthDay} onChange={(event) => birthDay(event)} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" defaultValue={studentEmail} onChange={(event) => email(event)} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPhone">
                            <Form.Label>Điện thoại</Form.Label>
                            <Form.Control type="text" defaultValue={studentPhone} onChange={(event) => phone(event)} />
                        </Form.Group>
                    </Form>
                )}
                {whichModal === "buttonDelete" && <p className="studentName text-center">{studentName}</p>}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Đóng
                </Button>
                {whichModal === "buttonAdd" && (
                    <Button variant="primary" onClick={addNew}>
                        Thêm mới
                    </Button>
                )}
                {whichModal === "buttonEdit" && (
                    <Button variant="primary" onClick={editItem}>
                        Lưu
                    </Button>
                )}
                {whichModal === "buttonDelete" && (
                    <Button variant="danger" onClick={deleteItem}>
                        Xóa
                    </Button>
                )}
            </Modal.Footer>
        </Modal>
    );
}
