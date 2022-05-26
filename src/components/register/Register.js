import "./register.css";
import {register} from "../../api/api"
import {useState} from "react";

export const Register = () => {
  const [data, setData] = useState({username: "", password: "", email: ""});

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      register(data)

    }}>
      <div className="input-container">
        <label>Username </label>
        <input
          type="text"
          name="username"
          onChange={(event) => {
            setData({
              ...data,
              username: event.target.value
            });
          }}
          pattern="^[a-zA-Z0-9_-]{3,8}$"
          onInvalid={(e) => e.target.setCustomValidity("Enter valid username")}
          onInput={(e) => e.target.setCustomValidity("")}
          required
        />
      </div>
      <div className="input-container">
        <label>Email </label>
        <input
          type="email"
          name="email"
          onChange={(event) => {
            setData({
              ...data,
              email: event.target.value
            });
          }}
          pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-]*$"
          onInvalid={(e) => e.target.setCustomValidity("Enter valid email")}
          onInput={(e) => e.target.setCustomValidity("")}
          required
        />
      </div>
      <div className="input-container">
        <label>Password </label>
        <input
          type="password"
          name="password"
          onChange={(event) => {
            setData({
              ...data,
              password: event.target.value
            });
          }}
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])[a-zA-Z\d]{8,}$"
          onInvalid={(e) =>
            e.target.setCustomValidity(
              "Enter valid password (one lowercase, one uppercase, one number)"
            )
          }
          onInput={(e) => e.target.setCustomValidity("")}
          required
        />
      </div>
      <div className="input-container">
        <label>Repeat password </label>
        <input
          type="password"
          name="repeatPassword"
          onInvalid={(e) =>
            e.target.setCustomValidity("Passwords are not the same")
          }
          onInput={(e) => e.target.setCustomValidity("")}
          required
        />
      </div>
      <div className="button-container">
        <input type="submit" value={"Register"} />
      </div>
    </form>
  );
};

export default Register;
