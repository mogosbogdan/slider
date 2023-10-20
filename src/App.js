import React, { useState } from 'react';

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const itemsPerPage = 8;

  // Create an array of 10 numbers
  const data = Array.from({ length: 10 }, (_, index) => index + 1);

  // Calculate the index range for the current page
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the data array to display 8 numbers on the current page
  const pageData = data.slice(startIndex, endIndex);

  // Handle next and previous page actions
  const nextPage = () => {
    if (pageNumber < Math.ceil(data.length / itemsPerPage)) {
      setPageNumber(pageNumber + 1);
    }
  };

  const prevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  return (
    <div>
      <h1>Numbers</h1>
      <ul>
        {pageData.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
      <div>
        <button onClick={prevPage} disabled={pageNumber === 1}>
          Previous
        </button>
        <button onClick={nextPage} disabled={pageNumber === Math.ceil(data.length / itemsPerPage)}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
