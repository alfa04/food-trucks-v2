import React from 'react';
import './Controls.css';

const Controls = ({ page, setPage, lastPage }) => {
    return (
        <div className="paginationControls">
            <button
                className="paginationButton"
                onClick={() => setPage(old => old - 1)}
                disabled={page === 1}
            >
                Previous Page
            </button>
            <span> Page {page} </span>
            <button
                className="paginationButton"
                onClick={() => setPage(old => (lastPage ? old : old + 1 ))}
                disabled={lastPage}
            >
                Next Page
            </button>
        </div>
    );
};

export default Controls;