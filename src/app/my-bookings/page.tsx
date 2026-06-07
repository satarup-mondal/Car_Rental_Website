"use client";


import { useEffect, useState } from "react";

import Image from "next/image";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";





export default function MyBookings(){



const [bookings,setBookings] = useState<any[]>([]);





useEffect(()=>{


// eslint-disable-next-line react-hooks/immutability
getBookings();


},[]);







async function getBookings(){


try{


const token = localStorage.getItem("token");



const res = await fetch("/api/booking",{


headers:{

Authorization:`Bearer ${token}`

}


});




const data = await res.json();


setBookings(data);



}catch(error){


console.log(error);


}


}








async function cancelBooking(id:string){



try{



await fetch(`/api/booking?id=${id}`,{


method:"DELETE"


});





setBookings(

bookings.filter(

(item)=>item._id !== id

)

);



}catch(error){



console.log(error);



}


}









return(

<>


<Navbar/>




<section

className="
min-h-screen
bg-white
text-black
px-20
py-20
"

>




<h1

className="
text-5xl
font-bold
mb-16
"

>

My Bookings

</h1>






<div

className="
flex
flex-col
gap-10
"

>





{


bookings.length === 0 ? (


<h1

className="
text-3xl
font-bold
text-center
"

>

No Bookings Found


</h1>



)

:

(

bookings.map((booking)=>(




<div

key={booking._id}

className="
shadow-2xl
rounded-[30px]

p-8

flex
items-center
justify-between

gap-10
"

>





{/* IMAGE */}


<div

className="
w-[260px]
h-[170px]

relative

rounded-[25px]

overflow-hidden

shadow-lg
"

>



<Image


src={booking.car?.images?.[0]}


alt="car"


fill


className="
object-cover
"


/>




</div>









{/* DETAILS */}


<div

className="
flex-1
"

>



<h2

className="
text-3xl
font-bold
mb-4
"

>


{booking.car?.brand}

{" "}

{booking.car?.model}



</h2>






<p>

Booking ID : {booking._id}

</p>





<p>


Pickup Date :


{" "}


{new Date(booking.pickupDate).toLocaleDateString()}



</p>





<p>


Return Date :


{" "}


{new Date(booking.returnDate).toLocaleDateString()}


</p>






<h2

className="
text-3xl
font-bold
mt-8
"

>


₹ {booking.totalPrice}



</h2>





</div>








{/* BUTTON */}



<button


onClick={()=>cancelBooking(booking._id)}


className="
bg-black

text-white

px-12

py-5

rounded-full

hover:scale-105

transition
"

>



Cancel Booking



</button>







</div>





))


)


}



</div>






</section>





<Footer/>




</>


);


}