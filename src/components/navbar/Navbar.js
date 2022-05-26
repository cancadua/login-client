import "./navbar.css";

const Navbar = ({ setLoginStatus, setRegisterStatus }) => {
  return (
    <div className={"navbar"}>
      <span className={"navbar-home"}> HOME </span>
      <div>
        <button
          className={"navbar-home"}
          onClick={(event) => setLoginStatus(true)}
        >
          login
        </button>
        <button
          className={"navbar-home"}
          onClick={(event) => setRegisterStatus(true)}
        >
          register
        </button>
      </div>
    </div>
  );
};

export default Navbar;
