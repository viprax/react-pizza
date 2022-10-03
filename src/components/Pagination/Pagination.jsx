import ReactPaginate from "react-paginate";
import PropTypes from "prop-types";
import classes from "./Pagination.module.scss";

export const Pagination = ({
  onChangePage = () => undefined,
  currentPage = 1,
}) => {
  return (
    <ReactPaginate
      className={classes.root}
      previousLabel="<"
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => onChangePage(e.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={currentPage - 1}
      renderOnZeroPageCount={null}
    />
  );
};

Pagination.propTypes = {
  onChangePage: PropTypes.func,
  currentPage: PropTypes.number,
};
