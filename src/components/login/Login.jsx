import axios from "axios";
import { jwtDecode } from "jwt-decode";
import React, { useState } from "react";

const Login = () => {

    // state
    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")

    const clickLogin = async() => {
        try {
            const url = "https://workshop-react-api.vercel.app/login"
            //ใช้ได้
            const res = await axios.post(url, {username, password})
           
            const decode = jwtDecode(res.data.token)
          
            localStorage.setItem('token', res.data.token )
            localStorage.setItem('user_id', decode.user_id )

            
            setTimeout(() => {
              window.location.reload()
            }, 1500);

        } catch (error) {
            // error
            console.log(error);
        }
    }
  
  return (
    <div className=" bg-gray-200 h-screen  flex justify-center items-center">
      <div className="bg-white px-40 py-10 rounded-lg shadow-lg">
        <h2 className=" text-2xl">เข้าสู่ระบบ</h2>

       username : {username} <br />
       password : {password}

        <div className=" flex flex-col">
          <input
          onChange={(e)=>setUsername(e.target.value)}
            placeholder="Username"
            type="text"
            className=" border border-gray-400 rounded-lg  mt-5 p-2 "
          />
          <input
            placeholder="Password"
            onChange={(e)=>setPassword(e.target.value)}

            type="password"
            className=" border border-gray-400 rounded-lg  mt-5 p-2 "
          />

          <button onClick={clickLogin} className="bg-purple-500 mt-2 py-2 rounded-lg text-white">เข้าสู่ระบบ</button>
        </div>

      </div>
    </div>
  );
};

export default Login;
