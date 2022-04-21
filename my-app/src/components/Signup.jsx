// // import React from "react";

// // const Signup = props => {
// //   let { name, salary, company, designation } = props.user;

// //   return (
// //     <>
// //       <div>
// //         <h2>{name}</h2>
// //         <p>Company : {company} </p>
// //         <p>Salary : {salary} </p>
// //         <p>Designation : {designation} </p>
// //       </div>
// //     </>
// //   );
// // };

// // export default Signup;

// // Sending array values Through props

// import React from "react";

// const Signup = (props) => {

//   return (
//     <>
//       <div>
//           props.users.map(x => {
//     return (<>
//         <li> {x} </li>
//         </>)
//   })
//     </div>
//     </>
//   );
// };

// export default Signup;

// passing boolean value as props

// import React from "react";

// const Signup = props => {
//   if (props.isLoggedIn === true) {
//     return (
//       <>
//         <li>Logout</li>
//       </>
//     );
//   } else {
//     return (
//       <>
//         <li>Login</li>
//         <li>Signup</li>
//       </>
//     );
//   }
// };

// export default Signup;

// Passing array of objects as props

import React from "react";

const Signup = props => {
  return props.employees.map(emp => {
    let { emp_name, emp_id, emp_salary, emp_desg, emp_edu, emp_exp } =
      emp;
    return (
      <>
        <div>
          <h1> {emp_name} </h1>
          <li> {emp_id} </li>
          <li> {emp_salary} </li>
          <li> {emp_desg} </li>
          <li> {emp_edu} </li>
          <li> {emp_exp} </li>
        </div>
      </>
    );
  });
};

export default Signup;
