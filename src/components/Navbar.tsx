"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";



export default function Navbar() {


  const pathname = usePathname();
  const router = useRouter();


  const [mounted, setMounted] = useState(false);
  const [isLogin, setIsLogin] = useState(false);





  useEffect(() => {


    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);



    const checkLogin = () => {

      const token =
        localStorage.getItem("token");


      if (token) {

        setIsLogin(true);

      } else {

        setIsLogin(false);

      }


    };



    checkLogin();



    window.addEventListener(
      "storage",
      checkLogin
    );



    return () => {

      window.removeEventListener(
        "storage",
        checkLogin
      );

    };



  }, [pathname]);







  function logout() {


    localStorage.removeItem("token");


    setIsLogin(false);


    router.push("/login");


  }







  const linkClass = (url:string) =>

    pathname === url

      ?

      `
      text-white

      transition-all
      duration-300
      `


      :

      `
      text-white/70

      hover:text-white
      hover:scale-105

      transition-all
      duration-300
      ease-in-out
      `;







  return (


    <nav

      className="

      fixed
      top-6
      left-1/2
      -translate-x-1/2

      z-50

      w-[92%]


      bg-black/40
      backdrop-blur-xl


      border
      border-white/10


      rounded-full

      shadow-2xl


      px-10
      py-4


      flex
      items-center
      justify-between


      ">



      {/* LOGO */}


      <Link

        href="/"

        className="

        text-2xl
        font-bold

        text-white

        hover:scale-105

        transition-all
        duration-300

        "

      >

        RentX

      </Link>







      {/* LINKS */}


      <div

        className="
        flex
        gap-10
        items-center
        "

      >


        <Link
          href="/"
          className={linkClass("/")}
        >
          Home
        </Link>



        <Link
          href="/cars"
          className={linkClass("/cars")}
        >
          Cars
        </Link>



        <Link
          href="/my-bookings"
          className={linkClass("/my-bookings")}
        >
          My Bookings
        </Link>



        <Link
          href="/about"
          className={linkClass("/about")}
        >
          About
        </Link>



        <Link
          href="/contact"
          className={linkClass("/contact")}
        >
          Contact
        </Link>


      </div>








      {/* BUTTON */}


      <div>


        {
          mounted && (

            isLogin ?


            (

              <button

                onClick={logout}


                className="

                bg-white
                text-black

                px-8
                py-3

                rounded-full


                hover:bg-gray-300
                hover:scale-105

                active:scale-95


                transition-all
                duration-300

                "

              >

                Logout

              </button>


            )

            :

            (


              <Link href="/login">


                <button


                  className="

                  bg-white
                  text-black

                  px-8
                  py-3

                  rounded-full


                  hover:bg-gray-300
                  hover:scale-105

                  active:scale-95


                  transition-all
                  duration-300

                  "

                >

                  Login


                </button>


              </Link>



            )

          )

        }


      </div>




    </nav>


  );


}