import "./register.css";

export const Register = () => {
  return (
    <form onSubmit={() => console.log("REGISTRATION TO BE IMPLEMENTED")}>
      <div className="input-container">
        <label>Username </label>
        <input type="text" name="uname" required />
      </div>
      <div className="input-container">
        <label>Email </label>
        <input type="email" name="email" required />
      </div>
      <div className="input-container">
        <label>Password </label>
        <input type="password" name="pass" required />
      </div>
      <div className="input-container">
        <label>Repeat password </label>
        <input type="password" name="pass2" required />
      </div>
      <div className="button-container">
        <input type="submit" value={"Register"} />
      </div>
    </form>
  );
};

export default Register;
