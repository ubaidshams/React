import React, { useState } from "react";
import { succesBtn, dangerBtn } from "./Mystyle";

const Style = () => {
  const [state, setstate] = useState([
    {
      ename: "Ubaid",
      sal: 20000,
      company: "TY",
    },
    {
      ename: "Wahid",
      sal: 40000,
      company: "Byjus",
    },
    {
      ename: "Junaid",
      sal: 50000,
      company: "Extramarks.com",
    },
    {
      ename: "Musaib",
      sal: 10000,
      company: "Zoho",
    },
  ]);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Salary</th>
          <th>Company</th>
        </tr>
      </thead>
      <tbody>
        {state.map((emp, index) => {
          //   let { ename, sal, company } = emp;
          return (
            <tr key={index}>
              <td>{emp.ename}</td>
              <td style={emp.sal > 30000 ? succesBtn : dangerBtn}>{emp.sal}</td>
              <td>{emp.company}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Style;
