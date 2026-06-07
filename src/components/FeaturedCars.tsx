"use client";

import { useEffect, useState } from "react";
import CarCard from "./CarCard";

type Car = {
  _id: string;
  brand: string;
  model: string;
  year: number;
  seats: number;
  fuelType: string;
  transmission: string;
  pricePerDay: number;
  location: string;
  images: string[];
  [key: string]: unknown;
};

export default function FeaturedCars() {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    async function getCars() {
      try {
        const res = await fetch("/api/cars");

        const data = await res.json();

        setCars(data.cars.slice(0, 3));
      } catch (error) {
        console.log("Cars fetch error:", error);
      }
    }

    getCars();
  }, []);

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold">
            Explore Our Cars
          </h2>

          <p className="text-gray-500 mt-4">
            Choose your perfect ride from our Indian car collection
          </p>

        </div>


        {/* Cars Grid */}
        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-10
          "
        >

          {cars.map((car) => (
            <CarCard
              key={car._id}
              car={car}
            />
          ))}

        </div>

      </div>
    </section>
  );
}