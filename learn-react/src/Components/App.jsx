// // Passing string as props

// import React from "react";
// import String from "../Props/String";
// const App = () => {
//   return (
//     <div>
//       <String name="Ubaid" />
//     </div>
//   );
// };

// export default App;

// Passing boolean as props

// import React from "react";
// import Bool from "../Props/Bool";

// const App = () => {
//   return (
//     <div>
//       <Bool isLoggedIn={false} uname="Ubaid" />
//     </div>
//   );
// };

// export default App;

// Passing number as props
// import React from "react";
// import Num from "../Props/Num";

// const App = () => {
//   return (
//     <div>
//       <Num eid={7} />
//     </div>
//   );
// };

// export default App;

// Passing function as props

// import React from "react";
// import Func from "../Props/Func";

// const App = () => {
//   let dispName = x => {
//     return <h1>My name is {x}</h1>;
//   };
//   return (
//     <div>
//       <Func dispName={dispName} uname="Ubaid" />
//     </div>
//   );
// };

// export default App;

// Passing array as props
// import React from "react";
// import Arr from "../Props/Arr";

// const App = () => {
//   let userArr = ["Ubaid", 7, true];
//   return (
//     <div>
//       <Arr user={userArr} />
//     </div>
//   );
// };

// export default App;

// Passing array of objects as props

// import React from "react";
// import Arr from "../Props/Arr";

// const App = () => {
//   let userArr = [
//     {
//       uname: "Ubaid",
//       eid: 111,
//       company: "TY",
//       desg: "Web Dev",
//     },
//     {
//       uname: "Musaib",
//       eid: 222,
//       company: "Wipro",
//       desg: "Java Dev",
//     },
//     {
//       uname: "Wahid",
//       eid: 333,
//       company: "Byjus",
//       desg: "Team Lead",
//     },
//   ];
//   return (
//     <div>
//       <Arr users={userArr} />
//     </div>
//   );
// };

// export default App;

// Passing object as props

// import React from 'react'
// import Obj from '../Props/Obj'

// const App = () => {
//   let user = {
//     ename: "Ubaid",
//     eid: 111,
//     sal: 20000,
//     company:"TY"
//   }
//   return (
//     <div>
//       <Obj user={user} />
//     </div>
//   )
// }

// export default App

// Passing object of array

// import React from "react";
// import Obj from "../Props/Obj";

// let obj = {
//   users: ["Ubaid", "Shubam", "Manju", "Richter"],
// };
// const App = () => {
//   return (
//     <div>
//       <Obj users={obj} />
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import Obj from "../Props/Obj";

// const App = () => {
//   let obj = {
//     users: [
//       {
//         ename: "Ubaid",
//         desg: "Web Dev",
//         comp: "TY",
//       },
//       {
//         ename: "Wahid",
//         desg: "Team Lead",
//         comp: "Byjus",
//       },
//       {
//         ename: "Zaid",
//         desg: "Project Manager",
//         comp: "Wipro",
//       },
//       {
//         ename: "Junaid",
//         desg: "ASM",
//         comp: "MagicBricks",
//       },
//     ],
//   };
//   return (
//     <div>
//       <Obj obj={obj} />
//     </div>
//   );
// };

// export default App;

// Passing json file  as props

import React from "react";
import JSON from "../Props/Github.json";
import Jp from "../Props/Jp";

const App = () => {
  let GitUsers = {
    user: JSON,
  };
  return (
    <div>
      <Jp users={GitUsers} />
    </div>
  );
};

export default App;
