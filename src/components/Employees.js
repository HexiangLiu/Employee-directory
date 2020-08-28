import React from 'react';
import Employee from './Employee';
import axios from 'axios';

class Employees extends React.Component {
  state = {
    employees: [],
  };
  componentDidMount() {
    axios
      .get('https://randomuser.me/api/?page=3&results=50')
      .then((res) => {
        console.log(res);
        this.setState({ employees: res.data.results });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Profile</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {this.state.employees.map((employee) => (
            <Employee employee={employee} key={employee.login.uuid} />
          ))}
        </tbody>
      </table>
    );
  }
}

export default Employees;
