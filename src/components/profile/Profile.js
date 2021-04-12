import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory} from "react-router-dom"
import { useSelector } from "react-redux";
import { selectUser, selectAvatar } from "../../redux/userSlice";

export default function Profile() {
    document.title = "Thông tin cá nhân";

    const history = useHistory();
    if(localStorage.getItem("token") === null){
        history.push("/login")
    }

    const user = useSelector(selectUser);
    const avatar = useSelector(selectAvatar);


    return (
        <div className="container">
            <h1 className="text-center mt-3 mb-3">Hồ sơ cá nhân</h1>
            <div className="container profileContent">
                <div className="row m-5">
                    <div className="col-md-3 d-flex align-items-center font-weight-bold">
                        Ảnh đại diện
                    </div>
                    <div className="col-md-9">
                        <img
                            className="d-block mb-2"
                            src={avatar}
                            alt="avatar"
                            style={{
                                width: "150px",
                                height: "150px",
                                overflow: "hidden"
                            }}
                        ></img>
                        <Button variant="secondary" style={{ width: 150 }}>
                            Thay ảnh
                        </Button>
                    </div>
                </div>
                <div className="row m-5">
                    <div className="col-md-3 font-weight-bold">Email</div>
                    <div className="col-md-9">huytq.act@gmail.com</div>
                </div>
                <div className="row m-5">
                    <div className="col-md-3 font-weight-bold d-flex align-items-center">
                        Mật khẩu
                    </div>
                    <div className="col-md-9 d-flex align-items-center">
                        <span className="mr-5">***********</span>
                        <span className="ml-5">
                            <Button variant="secondary">Đổi mật khẩu</Button>
                        </span>
                    </div>
                </div>
                <div className="row m-5">
                    <div className="col-md-3 font-weight-bold">Họ và tên</div>
                    <div className="col-md-9">{user}</div>
                </div>
                <div className="row m-5">
                    <div className="col-md-3 font-weight-bold">Điện thoại</div>
                    <div className="col-md-9">0989265355</div>
                </div>
            </div>
            <div className="text-center">
                <Link className="mr-3" to="/">
                    <Button>HOME</Button>
                </Link>
                <Link to="/login">
                    <Button variant="secondary">LOG OUT</Button>
                </Link>
            </div>
        </div>
    );
}
