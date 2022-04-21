import React, { useState } from "react";
import JSON from "./Country.json";

const Select = () => {
  let [country, setCountry] = useState(JSON);
  let [state, setState] = useState("");
  let handleSubmit = e => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <section id="authBlock">
      <article>
        <form action="" onSubmit={handleSubmit}>
          <select
            name=""
            id=""
            onChange={e => {
              setState(e.target.value);
            }}
          >
            {country.map(c => {
              let { name, code } = c;
              return (
                <>
                  <option value={name}>{name}</option>
                </>
              );
            })}
          </select>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default Select;
