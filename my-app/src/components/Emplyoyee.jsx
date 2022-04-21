import React, { Component } from "react";
import "./Employee.css";

class Emplyoyee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [
        {
          emp_name: "Ubaid",
          emp_id: "ab01",
          emp_sal: 2000,
          emp_desg: "web dev",
          emp_gender: "Male",
          emp_edu: "BCA",
          emp_exp: "1 year",
        },
        {
          emp_name: "Shubham",
          emp_id: "ab02",
          emp_sal: 20000,
          emp_desg: "web dev",
          emp_gender: "Male",
          emp_edu: "BE",
          emp_exp: "2 year",
        },
        {
          emp_name: "Wahid",
          emp_id: "ab03",
          emp_sal: 40000,
          emp_desg: "Team lead",
          emp_gender: "Male",
          emp_edu: "BCA",
          emp_exp: "3 year",
        },
        {
          emp_name: "Musaib",
          emp_id: "ab04",
          emp_sal: 30000,
          emp_desg: "Java dev",
          emp_gender: "Male",
          emp_edu: "BCA",
          emp_exp: "2 year",
        },
        {
          emp_name: "Tushar",
          emp_id: "ab05",
          emp_sal: 5000,
          emp_desg: "Software Testing",
          emp_gender: "Male",
          emp_edu: "BCA",
          emp_exp: "1 year",
        },
      ],
    };
    console.log(this.state);
  }

  render() {
    return this.state.employees.map(emp => {
      return (
        <div>
          <table>
            <tr>
              <th>Name</th>
              <td>{emp.emp_name}</td>
            </tr>
            <tr>
              <th>EID</th>
              <td>{emp.emp_id}</td>
            </tr>
            <tr>
              <th>Salary</th>
              <td>{emp.emp_sal}</td>
            </tr>
            <tr>
              <th>Designation</th>
              <td>{emp.emp_desg}</td>
            </tr>
            <tr>
              <th>Gender</th>
              <td>{emp.emp_gender}</td>
            </tr>
            <tr>
              <th>Experience</th>
              <td>{emp.emp_exp}</td>
            </tr>
            <tr>
              <th>Education</th>
              <td>{emp.emp_edu}</td>
            </tr>
          </table>
        </div>
      );
    });
  }
}

export default Emplyoyee;
