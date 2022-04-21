import React, { Component } from "react";
import JSON from "./Github.json";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: JSON,
    };
  }
  render() {
    return (
      <section id="gitRepo">
        <article>
          {this.state.users.map(user => {
            let {
              login,
              id,
              node_id,
              avatar_url,
              gravatar_id,
              url,
              html_url,
              followers_url,
              following_url,
              gists_url,
              starred_url,
              subscriptions_url,
              organizations_url,
              repos_url,
              events_url,
              received_events_url,
              type,
              site_admin,
            } = user;

            return (
              <div className="userGrid">
                <figure>
                  <img src={avatar_url} alt={login} />
                </figure>
                <main>
                  <h2>{login}</h2>
                  <p>Repos: {repos_url}</p>
                  <a href={html_url} target="_blank">
                    view profile
                  </a>
                </main>
              </div>
            );
          })}
        </article>
      </section>
    );
  }
}

export default Users;
