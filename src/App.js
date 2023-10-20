import React, { useState, useEffect } from 'react';

const App = () => {
  const totalNumbers = 10;
  const numbersPerPage = 8;
  const totalPages = Math.ceil(totalNumbers / numbersPerPage);

  const [currentPage, setCurrentPage] = useState(totalPages); // Set to the last page initially

  const generateNumbers = (page) => {
    const start = (page - 1) * numbersPerPage;
    const end = Math.min(start + numbersPerPage, totalNumbers);
    const numbers = [];

    for (let i = start; i < end; i++) {
      numbers.push(i + 1);
    }

    return numbers;
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <h1>Numbers Display</h1>
      <ul>
        {generateNumbers(currentPage).map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
      <div>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
