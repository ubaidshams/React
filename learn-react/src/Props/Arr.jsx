// // Passing array as props
// import React from "react";

// const Arr = props => {
//   let [uname, eid, bool] = props.user;
//   return (
//     <>
//       <h1>Name:{uname}</h1>
//       <p>EID:{eid}</p>
//       <p>{bool}</p>
//     </>
//   );
// };

// export default Arr;

// Passing props as array of objects

import React from "react";

const Arr = ({ users }) => {
  return users.map(user => {
    let { uname, company, desg, eid } = user;
    return (
      <div>
        <p>EID: {eid}</p>
        <h3>Name: {uname}</h3>
        <h4>Company: {company}</h4>
        <h5>Designation: {desg}</h5>
      </div>
    );
  });
};

export default Arr;
