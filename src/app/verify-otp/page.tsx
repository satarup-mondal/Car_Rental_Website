"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


export default function VerifyOtpPage(){


const router = useRouter();


const [otp,setOtp] = useState("");

const [loading,setLoading] = useState(false);



async function verifyOtp(){


try{


setLoading(true);


const userData = JSON.parse(
 localStorage.getItem("pendingUser") || "{}"
);



const res = await fetch("/api/auth/verify-otp",{


method:"POST",

headers:{

"Content-Type":"application/json"

},


body:JSON.stringify({

...userData,

otp

})


});




const data = await res.json();




if(data.success){


toast.success("Account verified");


localStorage.removeItem("pendingUser");


router.push("/login");


}

else{


toast.error(data.message);


}



}

catch(err){

console.log(err);

toast.error("OTP failed");

}


finally{

setLoading(false);

}



}







return(

<div
className="
min-h-screen
flex
items-center
justify-center
bg-gradient-to-br
from-black
via-gray-900
to-gray-500
text-white
"
>


<div
className="
bg-white/10
border
border-white/20
backdrop-blur-xl
p-10
rounded-3xl
w-[400px]
"
>


<h1
className="
text-4xl
font-bold
mb-8
"
>
Verify OTP
</h1>



<input

value={otp}

onChange={(e)=>setOtp(e.target.value)}

placeholder="Enter OTP"


className="
w-full
p-4
rounded-xl
text-black
mb-6
"

/>



<button

onClick={verifyOtp}

className="
w-full
bg-black
py-4
rounded-xl
"

>

{
loading
?
"Checking..."
:
"Verify OTP"
}


</button>


</div>


</div>

)


}