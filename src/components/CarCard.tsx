import Image from "next/image";
import Link from "next/link";

import {
  Fuel,
  Users,
  Settings,
} from "lucide-react";

interface Car {
  _id: string;
  brand: string;
  model: string;
  year: number;
  seats: number;
  fuelType: string;
  transmission: string;
  pricePerDay: number;
  images: string[];
}

export default function CarCard({ car }: { car: Car }) {

  return (

    <div
      className="
      bg-white
      rounded-[25px]
      overflow-hidden
      shadow-xl
      hover:-translate-y-2
      transition
      duration-300
      "
    >


      {/* IMAGE */}

      <Image

        src={car.images[0]}

        alt={car.model}

        width={500}

        height={300}

        className="
        w-full
        h-60
        object-cover
        "

      />



      {/* CONTENT */}

      <div className="p-6">


        <div className="
        flex
        justify-between
        items-start
        ">


          <div>

            <h2 className="
            text-xl
            font-bold
            ">
              {car.brand}
            </h2>


            <p className="
            text-gray-500
            font-semibold
            ">
              {car.model}
            </p>


          </div>


          <span
            className="
            bg-black
            text-white
            px-4
            py-2
            rounded-full
            text-sm
            "
          >
            {car.year}
          </span>


        </div>



        {/* SPECS */}

        <div
          className="
          grid
          grid-cols-3
          gap-4
          mt-6
          text-gray-500
          text-sm
          "
        >


          <div>
            <Users size={18}/>
            <p>{car.seats} Seats</p>
          </div>


          <div>
            <Fuel size={18}/>
            <p>{car.fuelType}</p>
          </div>


          <div>
            <Settings size={18}/>
            <p>{car.transmission}</p>
          </div>


        </div>



        {/* PRICE + BUTTON */}

        <div
          className="
          flex
          justify-between
          items-center
          mt-8
          "
        >


          <div>

            <p className="text-gray-500">
              Starting from
            </p>


            <h3 className="
            text-xl
            font-bold
            ">
              ₹{car.pricePerDay}/day
            </h3>


          </div>



          <Link href={`/cars/${car._id}`}>

            <button
              className="
              bg-black
              text-white
              px-6
              py-3
              rounded-full
              hover:scale-105
              transition
              "
            >

              View Details

            </button>

          </Link>


        </div>


      </div>


    </div>

  );

}