import { Pagination } from "react-bootstrap";

export default function pagination({ totalItems, changePage, page }) {
    let active = page
    let paginationItems = [];
    let number = totalItems / 100;
    for (let i = 1; i <= number; i++) {
        paginationItems.push(i);
    }

    let numberOfPagination = paginationItems.map((item) => (
        <Pagination.Item active={item === active} key={item} onClick={() => changePage(item)}>
            {item}
        </Pagination.Item>
    ));
    return (
        <Pagination>
            <Pagination.First onClick={() => changePage(1)}/>
            <Pagination.Prev />
            {numberOfPagination}
            <Pagination.Next />
            <Pagination.Last />
        </Pagination>
    );
}
