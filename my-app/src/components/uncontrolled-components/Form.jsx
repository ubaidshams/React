// Function based uncontrolled form

// import React, { useRef } from "react";

// const Form = () => {
//   let emailRef = useRef();
//   let pwdRef = useRef();
//   let handleSubmit = e => {
//     e.preventDefault();
//     let email = emailRef.current.value;
//     let pwd = pwdRef.current.value;
//     console.log({ email, pwd });
//   };

//   return (
//     <section className="authBlock">
//       <article>
//         <h2>Login</h2>
//         <form action="">
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               ref={emailRef}
//               type="email"
//               id="email"
//               placeholder="Enter email"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="pwd">Password</label>
//             <input
//               ref={pwdRef}
//               type="password"
//               id="pwd"
//               placeholder="Enter password"
//             />
//           </div>
//           <div className="form-group">
//             <button onClick={handleSubmit} type="submit">
//               Login
//             </button>
//           </div>
//         </form>
//       </article>
//     </section>
//   );
// };

// export default Form;

// Class based uncontrolled form

import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.emailRef = React.createRef();
    this.pwdRef = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    let email = this.emailRef.current.value;
    let pwd = this.pwdRef.current.value;
    console.log({ email, pwd });
  }
  render() {
    return (
      <section className="authBlock">
        <article>
          <h2>Login</h2>
          <form action="">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                ref={this.emailRef}
                type="email"
                id="email"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="pwd">Password</label>
              <input
                ref={this.pwdRef}
                type="password"
                id="pwd"
                placeholder="Enter password"
              />
            </div>
            <div className="form-group">
              <button onClick={this.handleSubmit} type="submit">
                Login
              </button>
            </div>
          </form>
        </article>
      </section>
    );
  }
}

export default Form;
