import React, { Component } from "react";

class Task extends Component {
  state = {
    users: [],
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(user => {
        this.setState({ users: user });
      });
  }
  render() {
    return (
      <section id="userSec">
        <article>
          {this.state.users.map(user => {
            let { id, username, name, email } = user;
            return (
              <div className="userBlock">
                <h3>Name: {name}</h3>
                <p>ID: {id}</p>
                <p>Username: {username}</p>
                <p>Email: {email}</p>
              </div>
            );
          })}
        </article>
      </section>
    );
  }
}

export default Task;
