import axios from "axios";
import React, { useContext, useState } from "react";
import { UserContext } from "../ContextAPI/UserContex";

const RegisterAndLoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginOrRegister, setIsLoginOrRegister] = useState("register");
  const { setUsername: setLoggedInUsername, setId } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLoginOrRegister === 'register'? 'register' : 'login';
    const { data } = await axios.post(url, { username, password });
    setLoggedInUsername(username);
    setId(data.id);
  };

  return (
    <div className="bg-blue-50 h-screen flex items-center">
      <form className="w-64 mx-auto mb-12" onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
          name="username"
          id="username"
          placeholder="username"
          className="block w-full rounded-sm mb-2 border"
        />
        <input
          type="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          name="password"
          id="password"
          placeholder="password"
          className="block w-full rounded-sm mb-2 border"
        />
        <input
          type="submit"
          className="bg-blue-500 text-white block w-full rounded-sm p-2"
          value={isLoginOrRegister === "register" ? "Register" : "Login"}
        />
        <div className="text-center font-bold mt-2">
          {isLoginOrRegister === "register" && (
            <div>
              Already a member?
              <button onClick={() => setIsLoginOrRegister("login")}>
                Login
              </button>
            </div>
          )}
          {isLoginOrRegister === "login" && (
            <div>
              Don't have an account?
              <button onClick={() => setIsLoginOrRegister("register")}>
                Register
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default RegisterAndLoginForm;
