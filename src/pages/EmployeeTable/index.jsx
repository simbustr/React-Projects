import React, { useState, useEffect } from 'react';

const EmployeeTablePage = () => {
  const [data, setData] = useState([]);  // Initialize data as an empty array

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://node-user-curd.vercel.app/api/users/"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setData(result.users);  // Assuming the response has a 'users' field containing the data
      console.log(result, "Initial data fetched");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  return (
    <div>
      <h1>Employee Table Page</h1>
      {data.length > 0 ? (
        data.map((item, index) => (
          <div key={index}>
            <p>First Name: {item.firstName}</p>
            <p>Email: {item.email}</p>
            {item.profileImage && <img src={item.profileImage} alt={item.firstName} style={{ width: '100px', height: '100px' }} />}
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default EmployeeTablePage;
