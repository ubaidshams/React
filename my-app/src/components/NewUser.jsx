import React from "react";

const NewUser = props => {
  let { usrname, salary, designation } = props;
  return (
    <div>
      <h1>{usrname}</h1>
      <p>{salary}</p>
      <p>{designation}</p>
    </div>
  );
};

export default NewUser;
NewUser.defaultProps = {
  usrname: "User",
  salary: 25000,
  designation: "Developer",
};
