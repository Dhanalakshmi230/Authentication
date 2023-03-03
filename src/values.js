import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

function Values(props) {
   const {isLoggedIn} =props;
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
    

    else {
      fetch('https://63cfb761e52f587829a384e5.mockapi.io/Form')
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setEmployees(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
    
  // }, [isLoggedIn]);
  
  }, [isLoggedIn, navigate]);

  return (
    <div className="container table-responsive w-60 py-5">
      <table className="table table-dark table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Firstname</th>
            <th scope="col">Lastname</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            return (
              <tr key={employee.id}>
                <td>{employee.Firstname}</td>
                <td>{employee.Lastname}</td>
                <td>{employee.Email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps =state => ({
  isLoggedIn: state.isLoggedIn,
});

export default connect(mapStateToProps)(Values);
