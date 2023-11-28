import React, { useState, useEffect } from 'react';
import { Table, Pagination } from 'react-bootstrap';
import createAxiosInstance from './createAxiosInstance';
import '../css/PaginatedTable.css'; // Import your custom CSS file
const itemsPerPage = 5;

const PaginatedTable = () => {
  const [data, setData] = useState({ data: [], total: 0 });
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  // Define fetchData outside of useEffect
  const fetchData = async () => {
    try {
      const axiosInstance = createAxiosInstance();

      const response = await axiosInstance.get('/user/list', {
        params: {
          pageNum: currentPage,
          search: searchTerm,
          // timestamp: Date.now(), // Add a timestamp to the request
        },
      });
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage, searchTerm]);

  // Change page
  const handlePageChange = async (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = () => {
    setCurrentPage(1); // Reset page to 1 when searching
    fetchData(); // Now fetchData is accessible within this scope
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  // Calculate the total number of pages based on the total count and items per page
  const totalPages = Math.ceil(data.total / itemsPerPage);
  const slicedData = data.data.slice(0, itemsPerPage);
  return (
    <div className="paginated-table-container">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search by Email"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // Reset page to 1 when searching
          }}
          onKeyDown={handleKeyDown} // Call handleKeyDown on key press
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <Pagination className="pagination-container">
        {Array.from({ length: totalPages }).map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
      <Table striped bordered hover className="text-center fixed-table">
        <thead>
          <tr>
            <th style={{ width: '10%' }}>ID</th>
            <th style={{ width: '20%' }}>Email</th>
            <th style={{ width: '10%' }}>Phone</th>
            <th style={{ width: '20%' }}>Image</th>
            <th style={{ width: '10%' }}>Authorization</th>
            <th style={{ width: '30%' }}>Date</th>
          </tr>
        </thead>
        <tbody>
          {slicedData.map((user) => (
            <tr key={user.USER_ID}>
              <td>{user.USER_ID}</td>
              <td>
                <a href={`/user/${user.USER_ID}`}>{user.USER_EMAIL}</a>
              </td>
              <td>{user.USER_PHONE}</td>
              <td>
                <img
                  src={user.USER_IMAGE}
                  alt={`Profile of ${user.USER_EMAIL}`}
                  style={{ width: '50px', height: '50px' }}
                />
              </td>
              <td>{user.USER_AUTH}</td>
              <td>{user.USER_DATE + ' ' + user.USER_TIME}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PaginatedTable;
