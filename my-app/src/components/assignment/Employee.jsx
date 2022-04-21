import React, { Component } from "react";
import JSON from "./citylist.json";

export default class Employee extends Component {
  state = {
    emp_name: "",
    emp_id: "",
    emp_email: "",
    emp_sal: "",
    emp_desg: "",
    emp_edu: "",
    emp_exp: "",
    emp_city: "",
    emp_skills: [],
    emp_prev_comp: [],
    emp_dob: "",
    emp_num: "",
    emp_photo: "",
    city_list: JSON,
  };
  componentDidMount() {}
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    window.localStorage.setItem("emp_name", this.state.emp_name);
    window.localStorage.setItem("emp_id", this.state.emp_id);
    window.localStorage.setItem("emp_email", this.state.emp_email);
    window.localStorage.setItem("emp_sal", this.state.emp_sal);
    window.localStorage.setItem("emp_desg", this.state.emp_desg);
    window.localStorage.setItem("emp_edu", this.state.emp_edu);
    window.localStorage.setItem("emp_exp", this.state.emp_exp);
    window.localStorage.setItem("emp_city", this.state.emp_city);
    window.localStorage.setItem("emp_skills", this.state.emp_skills);
    window.localStorage.setItem("emp_dob", this.state.emp_dob);
    window.localStorage.setItem("emp_photo", this.state.emp_photo);

    console.log(this.state);
  };
  render() {
    return (
      <section className="authBlock">
        <article>
          <h2>Employee Details</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-control">
              <label htmlFor="ename">Name</label>
              <input
                type="text"
                id="ename"
                name="emp_name"
                value={this.state.emp_name}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-control">
              <label htmlFor="eid">Employee ID</label>
              <input
                type="text"
                id="eid"
                name="emp_id"
                value={this.state.emp_id}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="emp_email"
                value={this.state.emp_email}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-control">
              <label htmlFor="sal">Salary</label>
              <input
                type="text"
                id="sal"
                name="emp_sal"
                value={this.state.emp_sal}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-control">
              <label htmlFor="desg">Designation</label>
              <input
                type="text"
                id="desg"
                name="emp_desg"
                value={this.state.emp_desg}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-control">
              <label htmlFor="edu">Education</label>
              <input
                type="text"
                id="edu"
                name="emp_edu"
                value={this.state.emp_edu}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-control">
              <label htmlFor="exp">Experience</label>
              <input
                type="text"
                id="exp"
                name="emp_exp"
                value={this.state.emp_exp}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-control">
              <label htmlFor="city">City</label>
              <select name="emp_city" id="city" onChange={this.handleChange}>
                {this.state.city_list.map(c => {
                  return (
                    <>
                      <option value={c}>{c}</option>
                    </>
                  );
                })}
              </select>
            </div>
            <div className="form-control" onChange={this.handleChange}>
              <label htmlFor="skills">Skills</label>
              <div className="skills">
                <div className="form-control">
                  <input
                    type="checkbox"
                    name="emp_skills"
                    id="java"
                    value="Java"
                  />
                  <label htmlFor="java">Java</label>
                </div>
                <div className="form-control">
                  <input
                    type="checkbox"
                    name="emp_skills"
                    id="SQL"
                    value="SQL"
                  />
                  <label htmlFor="SQL">SQL</label>
                </div>
                <div className="form-control">
                  <input
                    type="checkbox"
                    name="emp_skills"
                    id="Javascript"
                    value="Javascript"
                  />
                  <label htmlFor="Javascript">Javascript</label>
                </div>
                <div className="form-control">
                  <input
                    type="checkbox"
                    name="emp_skills"
                    id="HTML"
                    value="HTML"
                  />
                  <label htmlFor="HTML">HTML</label>
                </div>
                <div className="form-control">
                  <input
                    type="checkbox"
                    name="emp_skills"
                    id="CSS"
                    value="CSS"
                  />
                  <label htmlFor="CSS">CSS</label>
                </div>
                <div className="form-control">
                  <input
                    type="checkbox"
                    name="emp_skills"
                    id="React"
                    value="React"
                  />
                  <label htmlFor="React">React</label>
                </div>
              </div>
            </div>
            <div className="form-control">
              <label htmlFor="dob">Date of birth</label>
              <input
                type="date"
                name="emp_dob"
                id="dob"
                value={this.state.emp_dob}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-control">
              <input
                type="file"
                onChange={e => {
                  this.setState({ emp_photo: e.target.files[0] });
                }}
              />
            </div>
            <div className="form-control">
              <button type="submit">Submit</button>
            </div>
          </form>
        </article>
      </section>
    );
  }
}
