import "./login.css";
import {login} from "../../api/api";
import {useState} from "react";

export const Login = () => {
  const [data, setData] = useState({username: "", password: ""});

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      login(data)
    }}>
      <div className="input-container">
        <label>Username </label>
        <input type="text"
               name="username"
               onChange={(event) => {
                 setData({
                   ...data,
                   username: event.target.value
                 });
               }}
               required  />
      </div>
      <div className="input-container">
        <label>Password </label>
        <input type="password"
               name="password"
               onChange={(event) => {
                 setData({
                   ...data,
                   password: event.target.value
                 });
               }}
               required />
      </div>
      <div className="button-container">
        <input type="submit" value={"Login"} />
      </div>
    </form>
  );
};

export default Login;
