import { NextResponse } from "next/server";


const otpStore: Record<string, string> = {};


export async function POST(req:Request){


try{


const {email} = await req.json();


const otp = Math.floor(
100000 + Math.random()*900000
).toString();



otpStore[email] = otp;



console.log("OTP:",otp);



return NextResponse.json({

success:true,

message:"OTP sent"

});




}catch(error){


return NextResponse.json(
{
success:false,
message:"OTP failed"
},
{
status:500
}
);


}


}