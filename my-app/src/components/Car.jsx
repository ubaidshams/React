// // import React from "react";

// // const Car = props => {
// //   return (
// //     <div>
// //       Car {props.props}
// //       <h1>{props.children}</h1>
// //     </div>
// //   );
// // };

// // export default Car;

// // Default props

// import React from "react";

// const Car = props => {
//   return (
//     <div>
//       Car
//       {props.props}
//       <>props.children</>
//       {props.courses.map(course => {
//         return (
//           <>
//             <p>{course}</p>
//           </>
//         );
//       })}
//       {props.trainers.map(trainer => {
//         return (
//           <>
//             <p>{trainer}</p>
//           </>
//         );
//       })}
//     </div>
//   );
// };

// export default Car;

// Car.defaultProps = {
//   trainers: ["shashi", "dixith", "shivu", "priyanka"],
// };

import PropTypes from "prop-types";
import React from "react";

const Car = props => {
  return (
    <div>
      <h2>{props.username}</h2>
      <p>{props.salary}</p>
      <p>{props.designation}</p>
    </div>
  );
};

export default Car;

Car.defaultProps = {
  username: "Wahid",
  salary: 40000,
  designation: "Tech Support",
};

Car.propTypes = {
  username: PropTypes.string,
};
