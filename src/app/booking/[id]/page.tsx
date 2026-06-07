"use client";


import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function BookingPage(){


const { id } = useParams();

const router = useRouter();


const [pickup,setPickup] = useState("");

const [returnDate,setReturnDate] = useState("");

const [loading,setLoading] = useState(false);






async function handleBooking(){


if(!pickup || !returnDate){

alert("Please select dates");

return;

}



try{


setLoading(true);



const token =
localStorage.getItem("token");



if(!token){

alert("Please login first");

router.push("/login");

return;

}





const res =
await fetch("/api/booking",{

method:"POST",


headers:{

"Content-Type":"application/json",

Authorization:`Bearer ${token}`

},



body:JSON.stringify({

car:id,

pickupDate:pickup,

returnDate:returnDate,


// temporary price
// later car price se calculate karenge

totalPrice:2000


})


});






const data =
await res.json();





if(!res.ok){

alert(
data.message || "Booking failed"
);

return;

}




alert("Booking Confirmed 🚗");


// booking ke baad redirect

router.push("/my-bookings");





}catch(error){



console.log(
"BOOK ERROR",
error
);


alert("Booking failed");



}
finally{


setLoading(false);


}




}









return(

<>


<Navbar/>





<section
className="
min-h-screen
bg-white
px-20
py-20
text-black
"
>




<h1
className="
text-5xl
font-bold
text-center
mb-16
"
>

Book Your Car

</h1>








<div
className="
max-w-3xl
mx-auto
shadow-2xl
rounded-[30px]
p-12
"
>






<p
className="
text-gray-500
mb-8
"
>

Car ID : {id}

</p>









<label
className="
font-bold
text-xl
"
>

Pickup Date

</label>




<input

type="date"

value={pickup}

onChange={(e)=>
setPickup(e.target.value)
}


className="
w-full
border
rounded-full
px-6
py-4
mt-3
mb-8
"

/>









<label
className="
font-bold
text-xl
"
>

Return Date

</label>





<input

type="date"


value={returnDate}


onChange={(e)=>
setReturnDate(e.target.value)
}


className="
w-full
border
rounded-full
px-6
py-4
mt-3
mb-10
"

/>









<button


onClick={handleBooking}


disabled={loading}


className="
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



{
loading
?
"Booking..."
:
"Confirm Booking"
}



</button>






</div>





</section>





<Footer/>




</>


)


}