import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationControls: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageButtons = () => {
    const buttons = [];

    // Calculate the start and end page numbers for the current chunk
    const startPage = Math.max(1, Math.min(currentPage, totalPages - 9));
    const endPage = Math.min(totalPages, startPage + 9);

    // Add buttons for the current chunk of pages
    for (let i = startPage; i <= startPage + 1; i++) {
      buttons.push(
        <button key={i} onClick={() => onPageChange(i)} className={i === currentPage ? 'btn active' : 'btn'}>
          {i}
        </button>
      );
    }

    buttons.push(
        <button key={'...'} className = 'btn' disabled={true}>
          ...
        </button>
      );

    if(endPage > startPage) {
        for (let i = endPage - 1; i <= endPage; i++) {
            buttons.push(
              <button key={i} onClick={() => onPageChange(i)} className={i === currentPage ? 'btn active' : 'btn'}>
                {i}
              </button>
            );
          }
    }
  

    return buttons;
  };

  return (
    <div className="pagination">
      <button className = 'btn' onClick={() => onPageChange(currentPage - 9 <= 1 ? currentPage - 1 : currentPage - 9)} disabled={currentPage === 1}>
        &lt;
      </button>
      {renderPageButtons()}
      <button className = 'btn' onClick={() => onPageChange(currentPage + 9 >= totalPages ? currentPage + 1 : currentPage + 9)} disabled={currentPage + 9 >= totalPages}>
        &gt;
      </button>
    </div>
  );
};

export default PaginationControls;
