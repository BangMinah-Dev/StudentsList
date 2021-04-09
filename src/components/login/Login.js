import "./Login.css";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useState } from "react";

function Login() {
    document.title = "Đăng nhập";

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    // const [isLogin, setIsLogin]  = useState(200)
    // const history = useHistory()

    let account = {
        email: userEmail,
        password: userPassword,
    };
    async function doLogin() {
        fetch("https://stdmanagement.herokuapp.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(account),
        }).then((res) => {
            setIsLogin(res.status)
            console.log(res.status)
        })
    }


    console.log("userName = ", userEmail);
    console.log("userPassword = ", userPassword);

    return (
        <div className="loginPage">
            <h1 className="text-center">LOGIN</h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        onChange={(event) => setUserEmail(event.target.value)}
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
        </div>
    );
}

export default Login;
