import React, { Component } from "react";
import Spinners from "./Spinners";

export default class GithubUsers extends Component {
  state = {
    users: null,
  };
  async componentDidMount() {
    let responseData = await fetch("https://api.github.com/users");
    let user = await responseData.json();
    this.setState({ users: user });
  }
  render() {
    let USERS = () => {
      return this.state.users.map(user => {
        let { login, avatar_url } = user;
        return (
          <div>
            <h3>{login}</h3>
            <img src={avatar_url} alt={login} />
          </div>
        );
      });
    };
    return <div>{this.state.users === null ? <Spinners /> : <USERS />}</div>;
  }
}
