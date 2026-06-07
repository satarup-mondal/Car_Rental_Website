import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import {connectDB} from "@/lib/mongodb";
import User from "@/models/User";


export async function POST(req:Request){


try{


await connectDB();


const {

name,
email,
phone,
password,
otp

} = await req.json();




// abhi terminal OTP ke liye
// temporary accept

if(!otp){


return NextResponse.json(
{
success:false,
message:"OTP required"
},
{status:400}
);


}




const oldUser = await User.findOne({
email
});


if(oldUser){


return NextResponse.json(
{
success:false,
message:"User already exists"
},
{status:400}
);


}




const hashedPassword =
await bcrypt.hash(password,10);



await User.create({

name,

email,

phone,

password:hashedPassword

});





return NextResponse.json({

success:true,

message:"Account created"


});






}catch(error){


console.log(error);


return NextResponse.json(
{
success:false,
message:"Verify failed"
},
{status:500}
);



}



}