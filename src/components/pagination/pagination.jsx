import React from "react";
import ReactPaginate from "react-paginate";
import { SPagination } from "./pagination.style";

function Pagination({ handlePageClick, total }) {
  return (
    <SPagination>
      <ReactPaginate
        breakLabel="..."
        onPageChange={handlePageClick}
        pageCount={Math.ceil(total / 5)}
        marginPagesDisplayed={1}
      />
    </SPagination>
  );
}

export default Pagination;
