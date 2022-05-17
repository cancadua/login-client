import React from "react";
import "./form.css";

const Login = (props) => {
  const { closeModal } = props;

  return (
    <div className="overlay">
      <div className="content">
        <button onClick={closeModal} className={"close"}>
          X
        </button>
        {props.children}
      </div>
    </div>
  );
};

export default Login;
