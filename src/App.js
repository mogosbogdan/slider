import React, { useState } from "react";
function App() {
  const initialData = Array.from({ length: 23 }, (_, i) => i + 1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(initialData.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(totalPages);
  const [startIndex, setStartIndex] = useState(
    initialData.length - itemsPerPage
  );
  const [endIndex, setEndIndex] = useState(initialData.length);
  const remainder = initialData.length % itemsPerPage;

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
    if (currentPage === 1 && remainder > 0) {
      setStartIndex(remainder);
    } else {
      setStartIndex(startIndex + itemsPerPage);
    }
    setEndIndex(endIndex + itemsPerPage);
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
    if (currentPage === 2) {
      setStartIndex(0);
    } else {
      setStartIndex(startIndex - itemsPerPage);
    }
    setEndIndex(currentPage === 1 ? remainder : endIndex - itemsPerPage);
  };

  const currentData = initialData.slice(startIndex, endIndex);

  return (
    <div>
      <ul>
        {currentData.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
      <button disabled={currentPage === 1} onClick={handlePrev}>
        Previous
      </button>
      <button disabled={currentPage === totalPages} onClick={handleNext}>
        Next
      </button>
    </div>
  );
}
export default App;