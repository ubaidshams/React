// Passing json file as props

import React from "react";

const Jp = ({ GitUsers }) => {
  return GitUsers.user.map(x => {
    let { login, avatar_url, html_url, repos_url } = x;
    return (
      <div>
        <figure>
          <img src={avatar_url} alt={login} />
        </figure>
        <h3>{login}</h3>
      </div>
    );
  });
};

export default Jp;
