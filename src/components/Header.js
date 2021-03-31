import "./Icon"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
export default function Header({ handleShow }) {
    return (
        <div>
            <h1 className="title text-center mt-5 mb-5">Danh sách học viên</h1>
            <div className="d-flex justify-content-between">
                <button
                    databutton="buttonAdd"
                    className="btn add btn-primary mb-3"
                    onClick={(event) => handleShow(event) }
                >
                    <FontAwesomeIcon className="mr-2" icon="plus-circle"></FontAwesomeIcon>
                    Thêm học viên
                </button>
            </div>
        </div>
    );
}
