import { NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";

import User from "@/models/User";

import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";



// =======================
// LOGIN USER
// =======================


export async function POST(req: Request) {


  try {


    await connectDB();



    const { email, password } = await req.json();




    if (!email || !password) {


      return NextResponse.json(
        {
          success:false,
          message:"All fields required"
        },
        { status:400 }
      );


    }





    const user = await User.findOne({ email });



    if (!user) {


      return NextResponse.json(
        {
          success:false,
          message:"User not found"
        },
        { status:404 }
      );


    }






    const checkPassword = await bcrypt.compare(
      password,
      user.password
    );



    if (!checkPassword) {


      return NextResponse.json(
        {
          success:false,
          message:"Wrong password"
        },
        { status:401 }
      );


    }






    const token = jwt.sign(
      {
        id:user._id,
      },
      process.env.JWT_SECRET!,
      {
        expiresIn:"7d"
      }
    );







    return NextResponse.json(
      {

        success:true,

        message:"Login successful",

        token,


        user:{

          id:user._id,

          name:user.name,

          email:user.email,

          phone:user.phone

        }


      },
      { status:200 }

    );






  } catch(error){


    console.log("LOGIN ERROR",error);



    return NextResponse.json(
      {
        success:false,
        message:"Server Error"
      },
      { status:500 }
    );


  }


}