import React, { useState } from "react";

const Spotify = () => {
  let [email, setEmail] = useState("");
  let [confirmEmail, setConfirmEmail] = useState("");
  let [password, setPassword] = useState("");
  let [username, setUsername] = useState("");
  let [year, setYear] = useState("");
  let [month, setMonth] = useState("");
  let [day, setDay] = useState("");
  let [gender, setGender] = useState("");
  let handleSubmit = e => {
    e.preventDefault();
    console.log({
      email,
      confirmEmail,
      password,
      username,
      year,
      month,
      day,
      gender,
    });
  };
  return (
    <section className="authBlock">
      <article>
        <h2>Login</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">What's your email?</label>
            <input
              onChange={e => setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmEmail">Confirm your email?</label>
            <input
              onChange={e => setConfirmEmail(e.target.value)}
              type="email"
              id="confirmEmail"
              name="confirmEmail"
              value={confirmEmail}
              placeholder="Enter your email again"
            />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password</label>
            <input
              onChange={e => {
                setPassword(e.target.value);
              }}
              type="password"
              id="pwd"
              name="password"
              value={password}
              placeholder="Enter password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">What should we call you?</label>
            <input
              type="text"
              placeholder="Enter a profile name"
              id="username"
              name="username"
              value={username}
              onChange={e => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="form-group dob">
            <label htmlFor="dob">What's your date of birth?</label>
            <div className="dob-inner">
              <div className="formgroup">
                <label htmlFor="year">Year</label>
                <input
                  type="text"
                  id="year"
                  name="year"
                  placeholder="YYYY"
                  value={year}
                  onChange={e => {
                    setYear(e.target.value);
                  }}
                />
              </div>
              <div className="formgroup">
                <label htmlFor="month">Month</label>
                <select
                  name="month"
                  id="month"
                  value={month}
                  onChange={e => {
                    setMonth(e.target.value);
                  }}
                >
                  <option value="Month">Month</option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
              </div>
              <div className="formgroup">
                <label htmlFor="day">Day</label>
                <input
                  type="text"
                  id="day"
                  name="day"
                  value={day}
                  placeholder="DD"
                  onChange={e => {
                    setDay(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div
            className="form-group gender-group"
            onChange={e => {
              setGender(e.target.value);
            }}
          >
            <label htmlFor="">What's your gender?</label>
            <div className="gender">
              <div className="form-group">
                <input type="radio" name="gender" id="male" value="Male" />
                <label htmlFor="male">Male</label>
              </div>
              <div className="form-group">
                <input type="radio" name="gender" id="female" value="Female" />
                <label htmlFor="female">Female</label>
              </div>
              <div className="form-group">
                <input
                  type="radio"
                  name="gender"
                  id="non-binary"
                  value="Non-binary"
                />
                <label htmlFor="non-binary">Non-binary</label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <button type="submit">Sign up</button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default Spotify;
