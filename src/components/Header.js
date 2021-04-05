import "./Icon"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons"
import {Button} from "react-bootstrap"

export default function Header({ handleShow }) {
    return (
        <div>
            <h1 className="title text-center mt-5 mb-5">Danh sách học viên</h1>
            <div className="d-flex justify-content-between">
                <Button
                    databutton="buttonAdd"
                    className="btn add btn-primary mb-3"
                    onClick={(event) => handleShow(event) }
                >
                    <FontAwesomeIcon className="mr-2" icon={faPlusCircle}></FontAwesomeIcon>
                    Thêm học viên
                </Button>
            </div>
        </div>
    );
}
