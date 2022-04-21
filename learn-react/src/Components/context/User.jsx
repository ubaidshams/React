// import React, { Fragment, useContext } from "react";
// import { AuthContext } from "../../apis/ContextApi";

// const User = () => {
//   let emps = useContext(AuthContext);
//   return (
//     <div>
//       {emps.map((emp, index) => {
//         let { ename, sal, comp } = emp;
//         return (
//           <Fragment key={index}>
//             <h3>Name: {ename}</h3>
//             <p>Salary: {sal} </p>
//             <p>Company: {comp} </p>
//           </Fragment>
//         );
//       })}
//     </div>
//   );
// };

// export default User;

import React, { Component, Fragment } from "react";
import { AuthContext } from "../../apis/ContextApi";
// import { AuthContext } from "../../apis/ContextApi";

class User extends Component {
  render() {
    return (
      <div>
        <AuthContext.Consumer>
          {value =>
            value.map((val, index) => {
              let { ename, sal, comp } = val;
              return (
                <Fragment key={index}>
                  <h3>Name: {ename}</h3>
                  <p>Salary: {sal} </p>
                  <p>Company: {comp} </p>
                </Fragment>
              );
            })
          }
        </AuthContext.Consumer>
      </div>
    );
  }
}

export default User;
