import React, { useState } from "react";

const Users2 = ({ avatar_url, login, repos_url, html_url }) => {
  return (
    <>
      <tr>
        <td>
          <img src={avatar_url} alt={login} />
        </td>
        <td>{login}</td>
        <td>{repos_url}</td>
        <td>
          <a href={html_url} target="_blank">
            View Profile
          </a>
        </td>
      </tr>
    </>
  );
};

export default Users2;
