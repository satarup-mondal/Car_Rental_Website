"use client";

import { motion } from "framer-motion";

import {
  Search,
  MapPin,
  Calendar,
} from "lucide-react";


export default function Hero() {


  return (

    <section
      className="
      min-h-screen
      pt-28

      flex
      items-center
      justify-center

      bg-gradient-to-b
      from-gray-50
      to-white

      px-10
      "
    >


      <div
        className="
        max-w-7xl
        w-full

        grid
        grid-cols-1
        md:grid-cols-2

        gap-16
        items-center
        "
      >




        {/* TEXT SIDE */}


        <motion.div


          initial={{
            opacity:0,
            x:-50
          }}


          animate={{
            opacity:1,
            x:0
          }}


          transition={{
            duration:.7
          }}


        >




          <h1
            className="
            text-6xl
            font-bold

            leading-tight
            "
          >

            Book Your Perfect


            <span className="block">

              Ride Today

            </span>


          </h1>






          <p
            className="
            mt-6

            text-lg
            text-gray-500

            leading-8

            max-w-xl
            "
          >


            Rent premium cars across India with
            affordable pricing, easy booking,
            and secure online payments.


          </p>








          {/* SEARCH */}



          <div
            className="
            mt-10

            bg-white

            shadow-xl

            rounded-2xl

            p-5

            flex

            items-center

            gap-6
            "
          >



            <div
              className="
              flex
              items-center
              gap-2
              "
            >

              <MapPin size={22}/>

              Mumbai

            </div>





            <div
              className="
              flex
              items-center
              gap-2
              "
            >


              <Calendar size={22}/>


              Select Date



            </div>





            <button

              className="
              ml-auto

              bg-black
              text-white

              p-4

              rounded-xl

              hover:scale-110

              transition
              "

            >

              <Search/>


            </button>



          </div>









          {/* STATS */}


          <div
            className="
            flex
            gap-12

            mt-12
            "
          >


            <div>

              <h2 className="text-3xl font-bold">
                500+
              </h2>

              <p className="text-gray-500">
                Cars
              </p>

            </div>





            <div>

              <h2 className="text-3xl font-bold">
                50+
              </h2>

              <p className="text-gray-500">
                Cities
              </p>

            </div>






            <div>

              <h2 className="text-3xl font-bold">
                10K+
              </h2>

              <p className="text-gray-500">
                Customers
              </p>

            </div>




          </div>




        </motion.div>











        {/* CAR IMAGE */}



        <motion.div


          initial={{
            opacity:0,
            x:50
          }}


          animate={{
            opacity:1,
            x:0
          }}


          transition={{
            duration:.7
          }}


        >



          <img

            src="/cars/scorpio.jpg"

            alt="Mahindra Scorpio"


            className="
            w-full

            h-[430px]

            object-cover

            rounded-[40px]

            shadow-2xl


            hover:scale-105

            transition

            duration-500
            "

          />




        </motion.div>






      </div>




    </section>

  );

}