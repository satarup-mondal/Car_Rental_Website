import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";


export default function AboutPage() {

  return (

    <>

      <Navbar />


      <main className="min-h-screen px-6 pt-36 pb-24">


        <div className="max-w-7xl mx-auto">



          {/* HEADER */}


          <div className="mb-20">

            <p className="
            text-sm
            uppercase
            tracking-[5px]
            text-gray-500
            mb-5
            ">
              About DriveEasy
            </p>


            <h1 className="
            text-5xl
            md:text-7xl
            font-bold
            max-w-4xl
            leading-tight
            ">

              Redefining the way
              people rent cars

            </h1>


          </div>





          {/* CONTENT */}


          <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-16
          items-center
          ">



            <div className="
            rounded-[35px]
            overflow-hidden
            shadow-xl
            ">

              <Image

                src="/cars/fortuner.jpg"

                alt="DriveEasy"

                width={900}

                height={600}

                className="
                w-full
                h-[480px]
                object-cover
                "

              />

            </div>





            <div>


              <h2 className="
              text-4xl
              font-semibold
              mb-6
              ">

                Premium rental experience
                made simple

              </h2>


              <p className="
              text-gray-600
              text-lg
              leading-8
              ">

                DriveEasy provides a modern
                car rental experience with
                premium vehicles and simple
                online booking.


                <br />
                <br />


                Our goal is to make every trip
                comfortable, affordable and
                reliable.

              </p>





              <div className="
              grid
              grid-cols-2
              gap-10
              mt-14
              ">


                <div>

                  <h3 className="
                  text-5xl
                  font-bold
                  ">
                    9+
                  </h3>

                  <p className="
                  text-gray-500
                  mt-2
                  ">
                    Cars
                  </p>

                </div>




                <div>

                  <h3 className="
                  text-5xl
                  font-bold
                  ">
                    24/7
                  </h3>

                  <p className="
                  text-gray-500
                  mt-2
                  ">
                    Support
                  </p>

                </div>


              </div>


            </div>


          </div>






          {/* CARDS */}


          <div className="
          mt-28
          grid
          grid-cols-1
          md:grid-cols-3
          gap-8
          ">



            <div className="
            bg-black
            text-white
            rounded-[35px]
            p-10
            shadow-xl
            ">


              <p className="text-gray-500">
                01
              </p>


              <h3 className="
              text-2xl
              font-semibold
              my-6
              ">

                Premium Fleet

              </h3>


              <p className="
              text-gray-400
              leading-7
              ">

                Clean and well maintained cars
                available whenever you need.

              </p>


            </div>






            <div className="
            border
            rounded-[35px]
            p-10
            shadow-sm
            ">


              <p className="text-gray-400">
                02
              </p>


              <h3 className="
              text-2xl
              font-semibold
              my-6
              ">

                Easy Booking

              </h3>


              <p className="
              text-gray-500
              leading-7
              ">

                Fast online booking process
                with simple user experience.

              </p>


            </div>







            <div className="
            border
            rounded-[35px]
            p-10
            shadow-sm
            ">


              <p className="text-gray-400">
                03
              </p>


              <h3 className="
              text-2xl
              font-semibold
              my-6
              ">

                Trusted Service

              </h3>


              <p className="
              text-gray-500
              leading-7
              ">

                Reliable service focused on
                comfort and customer trust.

              </p>


            </div>



          </div>



        </div>


      </main>



      <Footer />


    </>

  );

}