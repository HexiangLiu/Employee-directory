import React from 'react';
import Employee from './Employee';

function Employees() {
  return (
    <table className="table">
      <thead>
        <th>Profile</th>
        <th>Name</th>
        <th>Email</th>
        <th>Age</th>
        <th>Country</th>
      </thead>
      <tbody>
        <Employee />
      </tbody>
    </table>
  );
}

export default Employees;
