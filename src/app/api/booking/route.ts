import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import twilio from "twilio";

import { connectDB } from "@/lib/mongodb";

import Booking from "@/models/Booking";
import Car from "@/models/Car";



// =======================
// CREATE BOOKING
// =======================


export async function POST(req: Request){


try{


await connectDB();



// TOKEN CHECK

const authHeader =
req.headers.get("authorization");



if(!authHeader){

return NextResponse.json(
{
message:"Unauthorized"
},
{
status:401
}
);

}



const token =
authHeader.split(" ")[1];



const decoded:any =
jwt.verify(
token,
process.env.JWT_SECRET!
);



const userId =
decoded.id;



// BODY DATA

const {

car,
pickupDate,
returnDate,
totalPrice

} = await req.json();



// GET CAR DATA

const carData =
await Car.findById(car);



if(!carData){


return NextResponse.json(
{
message:"Car not found"
},
{
status:404
}
);


}



// CREATE BOOKING

const booking =
await Booking.create({

user:userId,

car:car,

pickupDate,

returnDate,

totalPrice,

status:"confirmed"

});







// =======================
// WHATSAPP MESSAGE
// =======================


try{


const client =
twilio(

process.env.TWILIO_ACCOUNT_SID!,

process.env.TWILIO_AUTH_TOKEN!

);




await client.messages.create({


from:
process.env.TWILIO_WHATSAPP_NUMBER!,


// HARD CODED NUMBER

to:
"whatsapp:+919864892828",



body:
`
🚗 RentX Booking Confirmed!


🆔 Booking ID:
${booking._id}


🚘 Car:
${carData.brand} ${carData.model}


📅 Pickup Date:
${new Date(pickupDate).toLocaleDateString()}


📅 Return Date:
${new Date(returnDate).toLocaleDateString()}


💰 Total Price:
₹${totalPrice}


Thank you for booking with RentX ❤️
`


});



console.log("WHATSAPP SENT ✅");


}catch(error){


console.log(
"WHATSAPP ERROR ❌",
error
);


}







return NextResponse.json(

{

message:"Booking created",

booking

},

{

status:201

}

);





}catch(error){


console.log(
"BOOKING ERROR ❌",
error
);



return NextResponse.json(

{

message:"Booking failed"

},

{

status:500

}

);


}


}









// =======================
// GET BOOKINGS
// =======================


export async function GET(req:Request){


try{


await connectDB();



const authHeader =
req.headers.get("authorization");



if(!authHeader){


return NextResponse.json(
[],
{
status:401
}
);


}



const token =
authHeader.split(" ")[1];



const decoded:any =
jwt.verify(

token,

process.env.JWT_SECRET!

);



const bookings =
await Booking.find({

user:decoded.id

})

.populate("car")

.sort({

createdAt:-1

});





return NextResponse.json(
bookings
);





}catch(error){



console.log(
"GET BOOKING ERROR ❌",
error
);



return NextResponse.json(

[],

{

status:500

}

);


}



}









// =======================
// CANCEL BOOKING
// =======================


export async function DELETE(req:Request){



try{



await connectDB();



const { searchParams } =
new URL(req.url);



const id =
searchParams.get("id");




await Booking.findByIdAndDelete(id);




return NextResponse.json({

message:"Deleted"

});





}catch(error){



console.log(
"DELETE ERROR ❌",
error
);



return NextResponse.json(

{

message:"Delete failed"

},

{

status:500

}

);



}



}