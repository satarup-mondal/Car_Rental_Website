import Link from "next/link";

import {
  Car,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";


export default function Footer() {

  return (

    <footer
      className="
      bg-black
      text-white
      mt-20
      "
    >


      <div
        className="
        max-w-7xl
        mx-auto
        px-10
        py-16

        grid
        grid-cols-1
        md:grid-cols-4
        gap-10
        "
      >


        {/* BRAND */}


        <div>


          <div
            className="
            flex
            items-center
            gap-3
            text-2xl
            font-bold
            mb-5
            "
          >

            <div
              className="
              bg-white
              text-black
              p-2
              rounded-xl
              "
            >

              <Car />

            </div>


            DriveEasy


          </div>


          <p
            className="
            text-gray-400
            leading-7
            "
          >

            Premium car rental service providing
            comfortable and affordable rides
            across India.

          </p>



          <div
            className="
            flex
            gap-5
            mt-6
            text-xl
            "
          >

            <FaFacebook
              className="
              hover:scale-125
              transition
              cursor-pointer
              "
            />


            <FaInstagram
              className="
              hover:scale-125
              transition
              cursor-pointer
              "
            />


            <FaTwitter
              className="
              hover:scale-125
              transition
              cursor-pointer
              "
            />


          </div>



        </div>





        {/* QUICK LINKS */}


        <div>


          <h3
            className="
            font-bold
            text-lg
            mb-5
            "
          >

            Quick Links

          </h3>


          <ul
            className="
            space-y-3
            text-gray-400
            "
          >

            {
              [
                "Home",
                "Cars",
                "About",
                "Contact"
              ]
                .map((item) => (

                  <li key={item}>

                    <Link
                      href="/"
                      className="
                      hover:text-white
                      transition
                      "
                    >

                      {item}

                    </Link>

                  </li>

                ))
            }


          </ul>


        </div>





        {/* SERVICES */}


        <div>


          <h3
            className="
            font-bold
            text-lg
            mb-5
            "
          >

            Services

          </h3>



          <ul
            className="
            space-y-3
            text-gray-400
            "
          >

            <li>Self Drive Cars</li>

            <li>Luxury Rentals</li>

            <li>Airport Pickup</li>

            <li>Long Trips</li>


          </ul>


        </div>





        {/* CONTACT */}


        <div>


          <h3
            className="
            font-bold
            text-lg
            mb-5
            "
          >

            Contact Us

          </h3>



          <div
            className="
            space-y-4
            text-gray-400
            "
          >


            <p className="flex gap-3">

              <MapPin />

              Mumbai, India

            </p>



            <p className="flex gap-3">

              <Phone />

              +91 9876543210

            </p>



            <p className="flex gap-3">

              <Mail />

              support@driveeasy.com

            </p>



          </div>


        </div>



      </div>






      {/* COPYRIGHT */}


      <div
        className="
        border-t
        border-gray-800

        py-6

        text-center
        text-gray-400
        "
      >


        © {new Date().getFullYear()}
        {" "}
        DriveEasy Car Rentals.
        All Rights Reserved.



        <p
          className="
          text-sm
          mt-2
          "
        >

          Designed & Developed with ❤️ using Next.js

        </p>



      </div>



    </footer>


  );

}