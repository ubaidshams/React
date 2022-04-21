// // import React, { Component } from "react";
// // import Car from "./Car";

// // export default class App1 extends Component {
// //   render() {
// //     return (
// //       <div>
// //         <Car props={1}>
// //           <h1>Welcome to JSpiders</h1>
// //         </Car>
// //         <Car props={2}>
// //           <h1>Welcome to QSpiders</h1>
// //         </Car>
// //         <Car props={3}>
// //           <h1>Welcome to PySpiders</h1>
// //         </Car>
// //         <Car props={4}>
// //           <h1>Welcome to Web Spiders</h1>
// //         </Car>
// //       </div>
// //     );
// //   }
// // }

// // Default props
// import React, { Component } from "react";
// import Car from "./Car";

// class App1 extends Component {
//   render() {
//     return (
//       <div>
//         <Car
//           courses={["java", "sql", "html", "selenium"]}
//           trainers={["shashi", "dixith", "girish"]}
//         >
//           <h1>Qspiders</h1>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
//             maxime odio! Temporibus amet excepturi maiores perferendis, quae
//             veniam id nam repellendus iusto odio obcaecati, minus nisi aut
//             aperiam molestias possimus odit porro unde? Unde in magnam ab ea
//             itaque, maiores et omnis. Aperiam ipsum maiores aut mollitia
//             perferendis unde autem?
//           </p>
//         </Car>

//         <Car courses={["java", "sql", "html", "nodejs", "Reactjs"]}>
//           <h1>Qspiders</h1>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
//             maxime odio! Temporibus amet excepturi maiores perferendis, quae
//             veniam id nam repellendus iusto odio obcaecati, minus nisi aut
//             aperiam molestias possimus odit porro unde? Unde in magnam ab ea
//             itaque, maiores et omnis. Aperiam ipsum maiores aut mollitia
//             perferendis unde autem?
//           </p>
//         </Car>
//       </div>
//     );
//   }
// }

// export default App1;

// example 2

import React from "react";
import Car from "./Car";

const App1 = () => {
  return (
    <div>
      <Car username="ubaid" salary={20000} />
      <Car username="Shubham" designation="web dev" />
    </div>
  );
};

export default App1;
