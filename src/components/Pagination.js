import { Pagination } from "react-bootstrap";

export default function pagination({ totalItems, changePage, prev, next, page }) {
    let active = page;
    let paginationItems = [];
    let number = Math.ceil(totalItems / 10);
    for (let i = 1; i <= number; i++) {
        paginationItems.push(i);
    }

    let numberOfPagination = paginationItems.map((item) => (
        <Pagination.Item
            active={item === active}
            key={item}
            onClick={() => changePage(item)}
        >
            {item}
        </Pagination.Item>
    ));

    return (
        <div>
            <Pagination>
                <Pagination.First onClick={() => changePage(1)} />
                <Pagination.Prev onClick={prev} />
                {numberOfPagination}
                <Pagination.Next onClick={next} />
                <Pagination.Last onClick={() => changePage(number)} />
            </Pagination>
        </div>
    );
}
