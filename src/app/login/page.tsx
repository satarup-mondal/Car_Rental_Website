"use client";


import { useState } from "react";

import { useRouter } from "next/navigation";

import Link from "next/link";





export default function LoginPage() {



  const router = useRouter();



  const [email,setEmail] = useState("");

  const [password,setPassword] = useState("");

  const [loading,setLoading] = useState(false);






  async function loginUser(){



    try{



      setLoading(true);





      const res = await fetch("/api/auth/login",{


        method:"POST",


        headers:{

          "Content-Type":"application/json"

        },


        body:JSON.stringify({

          email,

          password

        })


      });





      const data = await res.json();





      if(!data.success){


        alert(data.message);

        return;


      }






      // SAVE TOKEN

      localStorage.setItem(
        "token",
        data.token
      );





      // SAVE FULL USER DETAILS

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );








      router.push("/cars");





    }

    catch(error){



      console.log(error);


      alert("Login failed");



    }

    finally{


      setLoading(false);


    }



  }









  return (

    <div

      className="
      min-h-screen

      flex
      items-center
      justify-center

      bg-gradient-to-br
      from-black
      via-gray-900
      to-gray-200

      px-5
      "

    >




      <div

        className="
        w-full
        max-w-md

        bg-white/10

        backdrop-blur-2xl

        border
        border-white/20

        shadow-2xl

        rounded-3xl

        p-10
        "

      >






        <h1

          className="
          text-4xl
          font-bold

          text-white

          mb-10
          "

        >

          Login

        </h1>








        <input


          value={email}


          onChange={(e)=>setEmail(e.target.value)}


          placeholder="Email"


          className="
          w-full

          bg-white/80

          px-5
          py-4

          rounded-2xl

          outline-none

          mb-5

          focus:scale-[1.02]

          transition
          "


        />









        <input



          value={password}



          onChange={(e)=>setPassword(e.target.value)}



          placeholder="Password"



          type="password"



          className="
          w-full

          bg-white/80

          px-5
          py-4

          rounded-2xl

          outline-none

          mb-8

          focus:scale-[1.02]

          transition
          "



        />










        <button


          onClick={loginUser}


          disabled={loading}


          className="
          w-full

          bg-black

          text-white

          py-4

          rounded-2xl

          hover:bg-gray-800

          transition
          "


        >



          {loading ? "Logging in..." : "Login"}



        </button>











        <p

          className="
          text-center

          mt-6

          text-gray-200
          "

        >


          Don&apos;t have an account?{" "}





          <Link


            href="/register"


            className="
            text-white

            font-bold

            underline
            "


          >


            Register


          </Link>





        </p>








      </div>





    </div>


  );



}