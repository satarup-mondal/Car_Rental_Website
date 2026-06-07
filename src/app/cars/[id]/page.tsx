"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


type Car = {

  _id:string;

  brand:string;

  model:string;

  year:number;

  seats:number;

  fuelType:string;

  transmission:string;

  mileage:string;

  engine:string;

  pricePerDay:number;

  location:string;

  description:string;

  condition:string;

  features:string[];

  images:string[];

};



export default function CarDetails(){


const params = useParams();

const router = useRouter();


const id = params.id;


const [car,setCar] =
useState<Car | null>(null);




useEffect(()=>{


async function getCar(){


try{


const res =
await fetch(`/api/cars/${id}`);


const data =
await res.json();



if(data.success){

setCar(data.car);

}


}catch(error){

console.log(error);

}


}


getCar();


},[id]);






if(!car){

return (

<div>

<Navbar/>

<h1
className="
text-center
mt-40
text-3xl
font-bold
"
>

Loading...

</h1>


</div>

)

}







function handleBooking(){


const user =
localStorage.getItem("user");



if(!user){


router.push("/login");

return;


}

if(!car){
return;
}


router.push(
`/booking/${car._id}`
);



}










return (

<>


<Navbar/>





<section

className="
min-h-screen
px-20
py-20
bg-white
text-black
"

>





{/* TOP */}


<div

className="
grid
grid-cols-2
gap-20
items-center
"

>





{/* LEFT */}


<div>



<h1

className="
text-6xl
font-bold
mb-8
"

>

{car.brand}
<br/>
{car.model}


</h1>




<p className="text-gray-500 text-xl">

{car.year}

</p>






<div

className="
grid
grid-cols-2
gap-10
mt-14
text-lg
"

>


<div>

<p>Seats</p>

<b>{car.seats}</b>

</div>



<div>

<p>Fuel</p>

<b>{car.fuelType}</b>

</div>




<div>

<p>Transmission</p>

<b>{car.transmission}</b>

</div>




<div>

<p>Location</p>

<b>{car.location}</b>

</div>



</div>





<h2

className="
text-5xl
font-bold
mt-14
"

>

₹{car.pricePerDay}/day

</h2>





</div>









{/* RIGHT IMAGE */}



<div>


<Image

src={car.images[0]}

alt={car.model}

width={800}

height={500}

className="
rounded-[30px]
shadow-xl
w-full
h-112.5
object-cover
"

/>


</div>



</div>










{/* DESCRIPTION */}



<div className="mt-24">


<h2

className="
text-4xl
font-bold
mb-5
"

>

Description

</h2>



<p

className="
text-gray-600
text-lg
max-w-4xl
"

>

{car.description}

</p>



</div>








{/* FEATURES */}



<div className="mt-16">


<h2

className="
text-4xl
font-bold
mb-8
"

>

Features

</h2>



<div

className="
flex
gap-5
flex-wrap
"

>


{


car.features.map((item,index)=>(


<span

key={index}

className="
px-6
py-3
rounded-full
bg-black
text-white
"

>

{item}

</span>


))


}


</div>


</div>









{/* BUTTON */}


<button


onClick={handleBooking}


className="
mt-20
w-full
bg-black
text-white
py-5
rounded-full
text-xl
font-bold
hover:scale-105
transition
"

>


Book Now


</button>






</section>





<Footer/>


</>

)

}