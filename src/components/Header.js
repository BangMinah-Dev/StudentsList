export default function Header() {
    return (
        <div>
            <h1 className="title text-center mt-5 mb-5">Danh sách học viên</h1>
            <div className="d-flex justify-content-between">
                <button className="btn add btn-success mb-3">
                    <i className="fas fa-plus-circle" />
                    Thêm học viên
                </button>
            </div>
        </div>
    );
}
