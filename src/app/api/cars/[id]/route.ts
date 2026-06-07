import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Car from "@/models/Car";


// GET SINGLE CAR

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {

  try {

    await connectDB();


    const { id } = await params;


    const car = await Car.findById(id);


    if (!car) {
      return NextResponse.json(
        {
          success:false,
          message:"Car not found"
        },
        { status:404 }
      );
    }


    return NextResponse.json(
      {
        success:true,

        car:{
          _id:car._id,

          brand:car.brand,
          model:car.model,

          year:car.year,
          seats:car.seats,

          fuelType:car.fuelType,
          transmission:car.transmission,

          mileage:car.mileage,
          engine:car.engine,

          pricePerDay:car.pricePerDay,

          location:car.location,

          description:car.description,
          condition:car.condition,

          features:car.features,

          owner:car.owner,

          images:car.images,

          available:car.available
        }

      },
      { status:200 }
    );


  } catch(error){

    console.log("GET CAR ERROR",error);

    return NextResponse.json(
      {
        success:false,
        message:"Server error"
      },
      { status:500 }
    );

  }

}