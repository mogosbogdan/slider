import React, { useState } from "react";
function App() {
  const initialData = Array.from({ length: 26 }, (_, i) => i + 1); 
  const itemsPerPage = 8;
  const totalPages = Math.ceil(initialData.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(totalPages);
  const remainder = initialData.length % itemsPerPage;
  let startIndex;
  let endIndex;
  if (currentPage === 1) {
    startIndex = 0;
    endIndex = remainder || itemsPerPage;
  } else {
    startIndex =
      remainder === 0
        ? remainder + itemsPerPage
        : remainder + (currentPage - 2) * itemsPerPage;
    endIndex = startIndex + itemsPerPage;
  }
  const currentData = initialData.slice(startIndex, endIndex);
  const goToPage = (page) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <ul>
        {currentData.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
      <button
        disabled={currentPage === 1}
        onClick={() => goToPage(currentPage - 1)}
      >
        Previous
      </button>
      <button
        disabled={currentPage === totalPages}
        onClick={() => goToPage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}
export default App;