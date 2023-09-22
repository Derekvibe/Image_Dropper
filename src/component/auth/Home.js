import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



function Home (){
  const [login, setlogin] = useState(false)


  const history = useNavigate()

  const handlesubmit =(e)=>{
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;

    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user, "authData");
        history("/ImageDrop")
      })
      .catch((error) => {
        alert("User not Found, Check your Details:", error);
      });
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen text-center">
      <h1 className="text-white lg:text-6xl sm:text-3xl font-semibold">
        Dragger Drop
      </h1>

      <div className="border-2 rounded-lg mt-6 mx-6 w-2/4 ">
        <h2 className="text-white text-xl mt-4 font-medium">
          Hi Welcome to DraggerDrop
        </h2>
        <p className="text-white text-xs mt-2 italic font-medium">
          ..... Home of Multiple Image Drop.....
        </p>
        <h3 className="text-3xl text-white font-semibold">LOG IN</h3>
        <form onSubmit={(e) => handlesubmit(e, login? 'signin':'signup')} className="mt-6">
          <p className="mt-5 mx-12">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              className="w-full p-2 rounded-md"
            />
          </p>

          <p className="mt-5 mx-12">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-2 rounded-md"
            />
          </p>

          <button className="text-white border-2 py-1 px-3 bg-black rounded-md my-5 font-medium hover:bg-gray-400 hover:text-black">
            Let's Go
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
