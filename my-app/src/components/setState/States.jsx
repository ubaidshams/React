// // // import React, { Component } from "react";

// // // export default class States extends Component {
// // //   state = {
// // //     number: 0,
// // //   };
// // //   getRandomNumber = () => {
// // //     this.setState({ number: Math.round(Math.random() * 100) });
// // //   };
// // //   render() {
// // //     return (
// // //       <div>
// // //         <h2>{this.state.number}</h2>
// // //         <button onClick={getRandomNumber}></button>
// // //       </div>
// // //     );
// // //   }
// // // }

// // // changing state using function component

// // import React, { useState } from "react";

// // const States = () => {
// //   let [number, setNumber] = useState(0);
// //   let getRandomNumber = () => {
// //     setNumber(Math.round(Math.random() * 100));
// //   };
// //   return (
// //     <div>
// //       <h2>{number}</h2>
// //       <button onClick={getRandomNumber}>click me</button>
// //     </div>
// //   );
// // };

// // export default States;

// import React, { Component } from "react";

// class States extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//   }
//   Increment = () => {
//     // this.setState({ count: this.state.count + 1 });
//     // this.setState({ count: this.state.count + 1 });

//     this.setState(preValue => ({ count: preValue.count + 1 }));
//     this.setState(preValue => ({ count: preValue.count + 1 }));
//   };
//   Decrement = () => {
//     // this.setState({ count: this.state.count - 1 });
//     // this.setState({ count: this.state.count - 1 });
//     this.setState(preValue => ({ count: preValue.count - 1 }));
//     this.setState(preValue => ({ count: preValue.count - 1 }));
//   };
//   Reset = () => {
//     this.setState({ count: 0 });
//   };
//   render() {
//     return (
//       <section>
//         <article>
//           <h1>{this.state.count}</h1>
//           <div>
//             <button onClick={this.Increment}>Increment</button>
//             <button onClick={this.Decrement}>Decrement</button>
//             <button onClick={this.Reset}>Reset</button>
//           </div>
//         </article>
//       </section>
//     );
//   }
// }

// export default States;

import React, { useState } from "react";

const States = () => {
  let [count, setCount] = useState(0);
  let Increment = () => {
    // setCount(count+1)
    //     setCount(count + 1);
    setCount(preValue => preValue + 1);
    setCount(preValue => preValue + 1);
  };
  let Decrement = () => {
    // setCount(count + 1);
    // setCount(count + 1);

    setCount(preValue => preValue - 1);
    setCount(preValue => preValue - 1);
  };
  let Reset = () => {
    setCount(0);
  };

  return (
    <section>
      <article>
        <h1>{count}</h1>
        <div>
          <button onClick={Increment}>Increment</button>
          <button onClick={Decrement}>Decrement</button>
          <button onClick={Reset}>Reset</button>
        </div>
      </article>
    </section>
  );
};

export default States;
