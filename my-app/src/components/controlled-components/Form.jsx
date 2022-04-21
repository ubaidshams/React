// import React, { Component } from "react";

// class Form extends Component {
//   state = {
//     email: "",
//     password: "",
//   };
//   handleChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };
//   handleSubmit = e => {
//     e.preventDefault();
//     console.log(this.state);
//   };
//   render() {
//     return (
//       <section className="authBlock">
//         <article>
//           <h2>Login</h2>
//           <form action="" onSubmit={this.handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input
//                 onChange={this.handleChange}
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={this.state.email}
//                 placeholder="Enter email"
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="pwd">Password</label>
//               <input
//                 onChange={this.handleChange}
//                 type="password"
//                 id="pwd"
//                 name="password"
//                 value={this.state.password}
//                 placeholder="Enter password"
//               />
//             </div>
//             <div className="form-group">
//               <button type="submit">Login</button>
//             </div>
//           </form>
//         </article>
//       </section>
//     );
//   }
// }

// export default Form;

// Functional based controlled component

// import React, { useState } from "react";

// const Form = () => {
//   let [state, setState] = useState({ email: "", password: "" });
//   let handleChange = e => {
//     setState({ ...state, [e.target.name]: e.target.value });
//   };
//   let handleSubmit = e => {
//     e.preventDefault();
//     console.log(state);
//   };
//   return (
//     <section className="authBlock">
//       <article>
//         <h2>Login</h2>
//         <form action="" onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               onChange={handleChange}
//               type="email"
//               id="email"
//               name="email"
//               value={state.email}
//               placeholder="Enter email"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="pwd">Password</label>
//             <input
//               onChange={handleChange}
//               type="password"
//               id="pwd"
//               name="password"
//               value={state.password}
//               placeholder="Enter password"
//             />
//           </div>
//           <div className="form-group">
//             <button type="submit">Login</button>
//           </div>
//         </form>
//       </article>
//     </section>
//   );
// };

// export default Form;
import React, { useState } from "react";

const Form = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let handleSubmit = e => {
    e.preventDefault();
    console.log({ email, password });
  };
  return (
    <section className="authBlock">
      <article>
        <h2>Login</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              onChange={e => {
                setEmail(e.target.value);
              }}
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password</label>
            <input
              onChange={e => {
                setPassword(e.target.value);
              }}
              type="password"
              id="pwd"
              name="password"
              value={password}
              placeholder="Enter password"
            />
          </div>
          <div className="form-group">
            <button type="submit">Login</button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default Form;
