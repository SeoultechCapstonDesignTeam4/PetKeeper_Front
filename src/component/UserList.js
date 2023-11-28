import React, { useState, useEffect } from 'react';
import { Table, Pagination } from 'react-bootstrap';
import createAxiosInstance from './createAxiosInstance';
const itemsPerPage = 5;

const PaginatedTable = () => {
  const [data, setData] = useState({ data: [], total: 0 });
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const axiosInstance = createAxiosInstance();

        const response = await axiosInstance.get('/user/list', {
          params: {
            pageNum: currentPage,
          },
        });
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [currentPage]);

  // Change page
  const handlePageChange = async (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate the total number of pages based on the total count and items per page
  const totalPages = Math.ceil(data.total / itemsPerPage);

  return (
    <div className="paginated-table-container">
      <Table striped bordered hover className="text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Image</th>
            <th>Authorization</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.data.map(user => (
            <tr key={user.USER_ID}>
              <td>{user.USER_ID}</td>
              <td><a href={`/user/${user.USER_ID}`}>{user.USER_EMAIL}</a></td>
              <td>{user.USER_PHONE}</td>
              <td>
                <img src={user.USER_IMAGE} alt={`Profile of ${user.USER_EMAIL}`} style={{ width: '50px', height: '50px' }} />
              </td>
              <td>{user.USER_AUTH}</td>
              <td>{user.USER_DATE +' '+ user.USER_TIME}</td>
            </tr>
          ))}
        </tbody>
      </Table>

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
    </div>
  );
};

export default PaginatedTable;
