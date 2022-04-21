// // Passing object as props

// import React from "react";

// const Obj = ({ user }) => {
//   let { ename, eid, sal, company } = user;

//   return (
//     <div>
//       <h1>Name: {ename}</h1>
//       <p>EID: {eid}</p>
//       <h3>Company: {company} </h3>
//       <h5>Salary: {sal} </h5>
//     </div>
//   );
// };

// export default Obj;

// Passing object of array

// import React from "react";

// const Obj = ({ users }) => {
//   return users.users.map(user => {
//     return (
//       <>
//         <li>{user}</li>
//       </>
//     );
//   });
// };

// export default Obj;

import React from "react";

const Obj = ({ obj }) => {
  return obj.users.map(user => {
    let { ename, desg, comp } = user;
    return (
      <div>
        <h3>Name: {ename}</h3>
        <h4>Designation: {desg}</h4>
        <h4>Company: {comp}</h4>
      </div>
    );
  });
};

export default Obj;
