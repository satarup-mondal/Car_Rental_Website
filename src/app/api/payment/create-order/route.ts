import { NextResponse } from "next/server";
import { razorpay } from "@/lib/razorpay";

export async function POST(req: Request) {
  try {
    const { amount } = await req.json();

    const order = await razorpay.orders.create({
      amount: amount * 100, // rupees -> paisa
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    });

    return NextResponse.json({
      success: true,
      order,
    });

  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Order creation failed",
      },
      { status: 500 }
    );
  }
}