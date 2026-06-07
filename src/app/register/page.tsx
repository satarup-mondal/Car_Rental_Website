"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";


export default function RegisterPage() {


  const router = useRouter();


  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [password,setPassword] = useState("");

  const [loading,setLoading] = useState(false);





  async function handleRegister(){


    try{

      setLoading(true);


      const res = await fetch(
        "/api/auth/register",
        {

          method:"POST",

          headers:{
            "Content-Type":"application/json"
          },


          body:JSON.stringify({

            name,
            email,
            phone,
            password

          })

        }
      );



      const data = await res.json();



      if(data.success){


        toast.success(
          "Account created"
        );


        router.push("/login");


      }

      else{

        toast.error(
          data.message ||
          "Register failed"
        );

      }



    }catch(error){


      console.log(error);


      toast.error(
        "Something went wrong"
      );


    }finally{


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
      to-gray-500

      text-white
      "
    >


      <div
        className="
        w-[450px]

        bg-white/10
        backdrop-blur-xl

        border
        border-white/20

        rounded-3xl

        p-10

        shadow-2xl
        "
      >


        <h1
          className="
          text-4xl
          font-bold
          mb-10
          "
        >
          Register
        </h1>





        <input

          value={name}

          onChange={(e)=>
            setName(e.target.value)
          }

          placeholder="Name"

          className="
          w-full
          bg-white/80
          text-black
          p-4
          rounded-xl
          mb-5
          outline-none
          "

        />






        <input

          value={email}

          onChange={(e)=>
            setEmail(e.target.value)
          }

          placeholder="Email"

          className="
          w-full
          bg-white/80
          text-black
          p-4
          rounded-xl
          mb-5
          outline-none
          "

        />







        <input

          value={phone}

          onChange={(e)=>
            setPhone(e.target.value)
          }

          placeholder="Phone"

          className="
          w-full
          bg-white/80
          text-black
          p-4
          rounded-xl
          mb-5
          outline-none
          "

        />







        <input

          type="password"

          value={password}

          onChange={(e)=>
            setPassword(e.target.value)
          }

          placeholder="Password"

          className="
          w-full
          bg-white/80
          text-black
          p-4
          rounded-xl
          mb-8
          outline-none
          "

        />








        <button

          onClick={handleRegister}

          disabled={loading}

          className="
          w-full

          bg-black

          py-4

          rounded-xl

          hover:bg-gray-900

          transition
          "

        >

          {
            loading
            ?
            "Creating..."
            :
            "Register"
          }


        </button>






        <p
          className="
          text-center
          mt-7
          text-gray-300
          "
        >

          Already have account?{" "}

          <Link
            href="/login"
            className="underline text-white"
          >

            Login

          </Link>


        </p>




      </div>


    </div>

  );


}