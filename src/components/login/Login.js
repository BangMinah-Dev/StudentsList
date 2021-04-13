import { Form, Button, Modal, ModalBody } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateName, updateAvatar } from "../../redux/userSlice";

function Login() {
    localStorage.clear();
    const dispatch = useDispatch();

    document.title = "Đăng nhập";
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [mess, setMess] = useState("");

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const history = useHistory();

    let account = {
        email: userEmail,
        password: userPassword,
    };
    async function doLogin() {
        fetch("https://stdmanagement.herokuapp.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "token",
            },
            body: JSON.stringify(account),
        })
            .then((res) => {
                if (res.status === 200) {
                    return res.json();
                } else {
                    throw new Error("Tài khoản hoặc mật khẩu không đúng");
                }
            })
            .then((data) => {
                console.log(data.name);
                if (data.token !== null) {
                    localStorage.setItem("token", data.token);
                    localStorage.setItem("userName", data.name);
                    localStorage.setItem("avatar", data.avatar);
                    history.push("/");
                }
            })
            .then(() => dispatch(updateName(localStorage.getItem("userName"))))
            .then(() => dispatch(updateAvatar(localStorage.getItem("avatar"))))
            .catch((err) => {
                setShow(true);
                setMess(err.message);
            });
    }

    console.log("userName = ", userEmail);
    console.log("userPassword = ", userPassword);

    return (
        <div
            className="loginPage"
            style={{
                maxWidth: "500px",
                margin: "30px auto",
                border: "1px solid dodgerblue",
                padding: "30px",
            }}
        >
            <h1 className="text-center">LOGIN</h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        onChange={(event) => setUserEmail(event.target.value)}
                        autoFocus
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={(event) =>
                            setUserPassword(event.target.value)
                        }
                    />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="button" onClick={doLogin}>
                    Login
                </Button>
            </Form>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-danger">
                        Lỗi đăng nhập
                    </Modal.Title>
                </Modal.Header>
                <ModalBody className="text-center" style={{ fontSize: "20px" }}>
                    {mess}
                </ModalBody>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Login;
