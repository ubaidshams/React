import React from "react";
import propTypes from "prop-types";
const Employee = ({ ename, id, desg }) => {
  return (
    <div>
      <h2>Employee Details</h2>
      <p>
        Name: {ename} ID:{id} Designation: {desg}
      </p>
    </div>
  );
};

export default Employee;

Employee.propTypes = {
  ename: propTypes.string.isRequired,
  id: propTypes.number.isRequired,
  desg: propTypes.string.isRequired,
};

Employee.defaultProps = {
  ename: "Stranger",
  id: 666,
  desg: "jobless",
};
