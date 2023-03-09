import { useState } from "react";
import axios from "axios";
const Login = () => {
  const data = {
    email: "",
    password: ""
  };
  const [info, setInfo] = useState(data);
  function validateForm() {
    return info.email.length > 0 && info.password.length > 0;
  }
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInfo((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let validate = validateInput(info);
    if (validate == false) return;
    try {
      let res = await axios.post("https://reqres.in/api/login", info);
      console.log(res);
      console.log(res.data.token + " " + "token");
      setInfo(data);
      console.log("register sucess");
    } catch (e) {
      console.log(e.message);
      alert(e.message + " " + "Invalid user");
    }
  };
  const validateInput = (data) => {
    if (data.email === "") {
      return false;
    }
  };
  return (
    <>
      <div className="form">
        <img
          className="logo"
          src="https://drive.google.com/uc?export=view&id=1hvRAGrdq0SqFBZApx2--IcuDf-DOmOBH"
        />
        <div>
          <h2>Hello there, Sign to continue</h2>
          <label>Email/User</label>

          <input
            type="email"
            name="email"
            value={info.email}
            onChange={handleInput}
          />
          <div></div>
          <br />
        </div>
        <div>
          <label>Password</label>

          <input
            type="password"
            name="password"
            value={info.password}
            onChange={handleInput}
          />
          <div></div>
        </div>
        <br />
        <div className="check-input">
          <input type="checkbox" />
          <label>
            By creating or logging into an account, you are agreeing with our
            <b> Terms & Conditions</b> and <b>Privacy Policys.</b>
          </label>
        </div>
        <br />
        <button type="submit" onClick={handleSubmit} disabled={!validateForm()}>
          Next
        </button>
        <h4>Signin with company SSO</h4>
      </div>
    </>
  );
};
export default Login;
