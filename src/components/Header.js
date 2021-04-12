import "./Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser, selectAvatar } from "../redux/userSlice";

export default function Header({ handleShow }) {
    const user = useSelector(selectUser);
    const avatar = useSelector(selectAvatar);
    return (
        <div>
            <div className="d-flex justify-content-end mt-3">
                <Link to="/login">
                    <Button variant="secondary mr-3">Log Out</Button>
                </Link>
                <Link to="/profile">
                    <Button variant="info">{user}</Button>
                </Link>
                <Link to="/profile">
                    <div
                        style={{
                            width: "38px",
                            height: "38px",
                            overflow: "hidden",
                            marginLeft: "10px",
                            borderRadius: "3px",
                        }}
                    >
                        <img
                            src={avatar}
                            alt="avatar"
                            style={{ objectFit: "cover", width: "100%" }}
                        ></img>
                    </div>
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
