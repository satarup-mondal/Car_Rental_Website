"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


export default function AuthGuard({
  children,
}: {
  children: React.ReactNode;
}) {


  const router = useRouter();


  const [checking, setChecking] = useState(true);




  useEffect(() => {


    const checkAuth = () => {


      const token = localStorage.getItem("token");


      if (!token) {

        router.replace("/login");
        return;

      }


      setChecking(false);


    };



    checkAuth();



  }, [router]);







  if (checking) {


    return (

      <div
        className="
        min-h-screen
        flex
        items-center
        justify-center

        bg-black
        text-white

        text-xl
        "
      >

        Checking Access...


      </div>


    );

  }






  return <>{children}</>;

}