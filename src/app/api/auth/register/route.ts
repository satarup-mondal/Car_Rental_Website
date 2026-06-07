import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";


export async function POST(req: Request) {
  try {

    await connectDB();

    const {
      name,
      email,
      phone,
      password
    } = await req.json();


    // empty check
    if (!name || !email || !phone || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields required",
        },
        { status: 400 }
      );
    }


    // check existing user
    const existUser = await User.findOne({
      email: email.toLowerCase(),
    });


    if (existUser) {
      return NextResponse.json(
        {
          success: false,
          message: "User already exists",
        },
        { status: 400 }
      );
    }


    // hash password
    const hashedPassword =
      await bcrypt.hash(password, 10);


    // create user
    await User.create({
      name,
      email: email.toLowerCase(),
      phone,
      password: hashedPassword,
    });


    return NextResponse.json(
      {
        success: true,
        message: "Register success",
      },
      { status: 201 }
    );


  } catch (error) {

    console.log("REGISTER ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Register failed",
      },
      { status: 500 }
    );
  }
}