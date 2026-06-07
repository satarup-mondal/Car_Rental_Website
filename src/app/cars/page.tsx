"use client";


import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CarCard from "@/components/CarCard";



type Car = {

  _id:string;

  brand:string;

  model:string;

  year:number;

  seats:number;

  fuelType:string;

  transmission:string;

  pricePerDay:number;

  location:string;

  images:string[];

};




export default function CarsPage(){


  const [cars,setCars] =
  useState<Car[]>([]);


  const [search,setSearch] =
  useState("");



  // =========================
  // FETCH CARS
  // =========================


  useEffect(()=>{


    async function getCars(){


      try{


        const res =
        await fetch("/api/cars");


        const data =
        await res.json();



        console.log(
          "CARS DATA",
          data
        );



        if(data.success){

          setCars(
            data.cars || []
          );

        }else{

          setCars([]);

        }



      }catch(error){


        console.log(
          "FETCH ERROR",
          error
        );


        setCars([]);


      }


    }



    getCars();



  },[]);







  // =========================
  // SEARCH FILTER
  // =========================


  const filteredCars =
  cars.filter((car)=>{


    return (

      car.brand
      .toLowerCase()
      .includes(
        search.toLowerCase()
      )

      ||

      car.model
      .toLowerCase()
      .includes(
        search.toLowerCase()
      )

    );


  });









  return (

    <>



      <Navbar/>




      <section
        className="
        min-h-screen
        px-10
        py-28
        bg-white
        "
      >



        <h1
          className="
          text-5xl
          font-bold
          text-center
          mb-12
          "
        >

          Available Cars

        </h1>






        {/* SEARCH */}


        <div
          className="
          flex
          justify-center
          mb-14
          "
        >


          <input

            value={search}

            onChange={(e)=>
              setSearch(e.target.value)
            }

            placeholder="Search cars..."

            className="
            w-125
            px-8
            py-5
            rounded-full
            border
            outline-none
            text-lg
            "

          />


        </div>






        {/* CARS */}


        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-10
          "
        >


          {

            filteredCars.map((car)=>(


              <CarCard

                key={car._id}

                car={car}

              />


            ))

          }


        </div>



      </section>





      <Footer/>




    </>


  );

}