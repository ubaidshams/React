import React, { Component, Fragment } from "react";

class Fetchusers extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    fetch("https://api.github.com/users")
      .then(response => response.json())
      .then(user => {
        this.setState({ users: user });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Profile</th>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {this.state.users.map(user => {
            let { avatar_url, login, type } = user;
            return (
              <tr>
                <td>
                  <img src={avatar_url} alt={login} />
                </td>
                <td>{login}</td>
                <td>{type}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Fetchusers;
