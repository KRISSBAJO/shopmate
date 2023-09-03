import React from 'react';
import './pagination.css'; // Import the corresponding CSS file

export const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const getPageItemClass = (page) => (page === currentPage ? 'page-item active' : 'page-item');

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <button
            className="page-link"
            aria-label="Previous"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        {Array.from({ length: totalPages }).map((_, index) => (
          <li key={index} className={getPageItemClass(index + 1)}>
            <button className="page-link" onClick={() => onPageChange(index + 1)}>
              {index + 1}
            </button>
          </li>
        ))}
        <li className="page-item">
          <button
            className="page-link"
            aria-label="Next"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;


