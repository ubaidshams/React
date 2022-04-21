// // // import React from "react";
// // // import Navbar from "./Navbar";
// // // import Signup from "./Signup";

// // // const App = () => {
// // //   // let userData = {
// // //   //   name: "Ubaid",
// // //   //   salary: 20000,
// // //   //   company: "TestYantra",
// // //   //   designation: "Web Dev",
// // //   // };

// // //   // let jspUser = {
// // //   //   name: "Ubaid2",
// // //   //   salary: 30000,
// // //   //   company: "TestYantra2",
// // //   //   designation: "Web Dev2",
// // //   // };
// // //   return (
// // //     <>
// // //       <Navbar />
// // //       <section id="propsBlock">
// // //         <article>
// // //           <Signup
// // //             user={{
// // //               name: "Ubaid",
// // //               salary: 20000,
// // //               company: "TestYantra",
// // //               designation: "Web Dev",
// // //             }}
// // //           />
// // //           {/* <Signup
// // //             name="Junaid"
// // //             company="ExtraMarks"
// // //             salary={50000}
// // //             designation="ASM"
// // //           />
// // //           <Signup
// // //             name="Wahid"
// // //             company="Byjus"
// // //             salary={45000}
// // //             designation="Team Leader"
// // //           />
// // //           <Signup
// // //             name="Musaib"
// // //             company="Elektrobit"
// // //             salary={60000}
// // //             designation="Senior dev"
// // //           /> */}
// // //         </article>
// // //       </section>
// // //     </>
// // //   );
// // // };

// // // export default App;

// // // Sending array values through props

// // import React from "react";
// // import Signup from "./Signup";

// // const App = () => {
// //   return (
// //     <>
// //       <Navbar />
// //       <Signup users={["Java", "Python", "JavaScript", "React"]} />
// //     </>
// //   );
// // };

// // export default App;

// // Passing boolean values as props

// import React from "react";
// import Navbar from "./Navbar";
// import Signup from "./Signup";

// // const App = () => {
// //   return (
// //     <>
// //       <Navbar />
// //       <Signup isLoggedIn={false} />
// //     </>
// //   );
// // };

// // export default App;

// // Passing array of objects as props

// let employees = [
//   {
//     emp_id: "typ1",
//     emp_name: "Manu",
//     emp_salary: 2000,
//     emp_desg: "node developer",
//     emp_edu: "B.E",
//     emp_exp: "3 years",
//   },
//   {
//     emp_id: "typ2",
//     emp_name: "Tanu",
//     emp_salary: 20000,
//     emp_desg: "Java developer",
//     emp_edu: "MCA",
//     emp_exp: "5 years",
//   },
//   {
//     emp_id: "typ3",
//     emp_name: "Ray",
//     emp_salary: 200000,
//     emp_desg: "Fullstack developer",
//     emp_edu: "M.Tech",
//     emp_exp: "7 years",
//   },
// ];

// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <Signup employees={employees} />
//     </>
//   );
// };

// export default App;

import React from "react";
import Navbar from "./Navbar";

const App = () => {
  let obj = {
    brand: "Ford",
    model: "Mustang",
    year: 1969,
  };
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default App;
