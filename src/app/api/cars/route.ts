import { NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";

import Car from "@/models/Car";



export async function GET(){


try{


await connectDB();



const cars = await Car.find({});



return NextResponse.json({

success:true,

cars:cars

});


}


catch(error){


console.log("GET CARS ERROR",error);



return NextResponse.json({

success:false,

cars:[]

},
{
status:500
});


}


}