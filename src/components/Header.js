import "./Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header({ handleShow }) {
    return (
        <div>
            <div className="d-flex justify-content-end mt-3">
                <Link to="/login">
                    <Button variant="secondary mr-3">Log Out</Button>
                </Link>
                <Link to="/profile">
                    <Button variant="info">PROFILE</Button>
                </Link>
            </div>
            <h1 className="title text-center mt-1 mb-3">Danh sách học viên</h1>
            <div className="d-flex justify-content-between">
                <Button
                    databutton="buttonAdd"
                    className="btn add btn-primary mb-3"
                    onClick={(event) => handleShow(event)}
                >
                    <FontAwesomeIcon
                        className="mr-2"
                        icon={faPlusCircle}
                    ></FontAwesomeIcon>
                    Thêm học viên
                </Button>
            </div>
        </div>
    );
}
