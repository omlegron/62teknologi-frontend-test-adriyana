import React from 'react';

const PaginationControls = ({
  currentPage,
  totalPages,
  handlePageChange,
}) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <>
    <div className="row">
        <div className="col-12 mt-4 pt-2">
        <ul className="pagination justify-content-center mb-0">
            <li className="">
            <button onClick={() => handlePageChange(1)} 
                disabled={currentPage === 1} className="page-link">
                First
            </button>
            </li> {/* Add closing tag here */}
            <li className="">
            <button className="page-link"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Previous
            </button>
            </li>

            {Array(totalPages)
            .fill(0)
            .map((_, index) => (
                <li key={index} className="">
                <button
                    onClick={() => handlePageChange(index + 1)}
                    className={index + 1 === currentPage ? 'active page-link' : 'page-link'}
                >
                    {index + 1}
                </button>
                </li>
            ))}
            <li className="">
            <button className="page-link"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
            </li>
            <li className="">
            <button className="page-link"
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
            >
                Last
            </button>
            </li>
        </ul>
        </div>
    </div>
    </>
  );
};

export default PaginationControls;