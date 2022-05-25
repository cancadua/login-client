import "./login.css";

export const Login = () => {
  return (
    <form onSubmit={() => alert("To be implemented...")}>
      <div className="input-container">
        <label>Username </label>
        <input type="text" name="uname" required />
      </div>
      <div className="input-container">
        <label>Password </label>
        <input type="password" name="pass" required />
      </div>
      <div className="button-container">
        <input type="submit" value={"Login"} />
      </div>
    </form>
  );
};

export default Login;
