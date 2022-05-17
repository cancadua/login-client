import { Navbar, Footer, Login, Modal, Register } from "../../components";

import { useState } from "react";

const Home = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  const [registerStatus, setRegisterStatus] = useState(false);

  return (
    <div>
      <Navbar
        setLoginStatus={setLoginStatus}
        setRegisterStatus={setRegisterStatus}
      />
      <div>
        {loginStatus && (
          <Modal closeModal={() => setLoginStatus(false)}>
            <Login />
          </Modal>
        )}

        {registerStatus && (
          <Modal closeModal={() => setRegisterStatus(false)}>
            <Register />
          </Modal>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
