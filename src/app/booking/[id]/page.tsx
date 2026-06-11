"use client";


import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


declare global {
  interface Window {
    Razorpay: any;
  }
}


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



// razorpay order create

const orderRes = await fetch("/api/payment/create-order",{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

amount:2000

})

});



const orderData = await orderRes.json();



if(!orderData.success){

alert("Payment failed");

return;

}




const options = {


key:process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,


amount:orderData.order.amount,


currency:"INR",


name:"Car Rental",


description:"Car Booking Payment",


order_id:orderData.order.id,



handler:async function(){



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




alert("Payment Done & Booking Confirmed 🚗");


router.push("/my-bookings");



}


};





const razorpay =
new window.Razorpay(options);


razorpay.open();







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
"Processing..."
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