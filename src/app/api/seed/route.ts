import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Car from "@/models/Car";


export async function GET() {

  try {

    await connectDB();


    await Car.deleteMany({});



    const cars = [


      {
        brand:"Maruti Suzuki",
        model:"Swift",
        year:2024,
        seats:5,
        fuelType:"Petrol",
        transmission:"Manual",
        mileage:"22 km/l",
        engine:"1.2L Petrol",
        pricePerDay:1800,
        location:"Mumbai",

        description:
        "Compact hatchback perfect for city travel with excellent mileage.",

        condition:
        "Excellent condition, recently serviced, clean interior and insurance active.",

        owner:{
          name:"Rahul Sharma",
          experience:"4 Years",
          rating:4.7
        },

        features:[
          "Air Conditioning",
          "Bluetooth",
          "Music System",
          "Airbags"
        ],

        images:[
          "/cars/swift.jpg"
        ],

        available:true
      },




      {
        brand:"Hyundai",
        model:"Creta",
        year:2024,
        seats:5,
        fuelType:"Petrol",
        transmission:"Automatic",
        mileage:"18 km/l",
        engine:"1.5L Petrol",
        pricePerDay:3000,
        location:"Delhi",

        description:
        "Premium SUV with modern technology and comfortable interiors.",

        condition:
        "Like new condition, regularly maintained and sanitized after every trip.",


        owner:{
          name:"Amit Verma",
          experience:"6 Years",
          rating:4.9
        },


        features:[
          "Touchscreen",
          "Rear Camera",
          "Bluetooth",
          "Sunroof"
        ],

        images:[
          "/cars/creta.jpg"
        ],

        available:true
      },





      {
        brand:"Mahindra",
        model:"Scorpio N",
        year:2024,
        seats:7,
        fuelType:"Diesel",
        transmission:"Manual",
        mileage:"15 km/l",
        engine:"2.2L Diesel",
        pricePerDay:4500,
        location:"Pune",

        description:
        "Powerful SUV designed for family trips and adventure rides.",

        condition:
        "Powerful engine, clean cabin, no accident history.",


        owner:{
          name:"Vikram Singh",
          experience:"8 Years",
          rating:4.8
        },


        features:[
          "7 Seater",
          "Rear AC",
          "Large Boot Space"
        ],

        images:[
          "/cars/scorpio.jpg"
        ],

        available:true
      },





      {
        brand:"Toyota",
        model:"Innova Crysta",
        year:2023,
        seats:7,
        fuelType:"Diesel",
        transmission:"Automatic",
        mileage:"14 km/l",
        engine:"2.4 Diesel",
        pricePerDay:5000,
        location:"Bangalore",

        description:
        "Comfortable family MPV suitable for long distance journeys.",

        condition:
        "Premium maintained vehicle with smooth performance.",


        owner:{
          name:"Karan Mehta",
          experience:"7 Years",
          rating:4.9
        },


        features:[
          "Captain Seats",
          "Rear AC",
          "Large Space"
        ],

        images:[
          "/cars/innova.jpg"
        ],

        available:true
      },





      {
        brand:"Tata",
        model:"Nexon",
        year:2024,
        seats:5,
        fuelType:"Petrol",
        transmission:"Automatic",
        mileage:"17 km/l",
        engine:"Turbo Petrol",
        pricePerDay:2500,
        location:"Kolkata",

        description:
        "Safe compact SUV with stylish design and premium comfort.",

        condition:
        "Clean SUV with regular service records.",


        owner:{
          name:"Arjun Roy",
          experience:"5 Years",
          rating:4.6
        },


        features:[
          "Sunroof",
          "Touchscreen",
          "Airbags"
        ],

        images:[
          "/cars/nexon.jpg"
        ],

        available:true
      },





      {
        brand:"Mahindra",
        model:"Thar",
        year:2024,
        seats:4,
        fuelType:"Diesel",
        transmission:"Manual",
        mileage:"15 km/l",
        engine:"2.2 Diesel",
        pricePerDay:5500,
        location:"Goa",

        description:
        "Adventure SUV made for off-road experiences.",

        condition:
        "Excellent off-road condition with premium maintenance.",


        owner:{
          name:"Rohit Nair",
          experience:"5 Years",
          rating:4.8
        },


        features:[
          "4x4",
          "Touchscreen",
          "Convertible"
        ],

        images:[
          "/cars/thar.jpg"
        ],

        available:true
      },





      {
        brand:"Toyota",
        model:"Fortuner",
        year:2024,
        seats:7,
        fuelType:"Diesel",
        transmission:"Automatic",
        mileage:"10 km/l",
        engine:"2.8 Diesel",
        pricePerDay:8000,
        location:"Delhi",

        description:
        "Luxury SUV with powerful performance and premium comfort.",


        condition:
        "Top condition luxury SUV with full service history.",


        owner:{
          name:"Aditya Kapoor",
          experience:"9 Years",
          rating:5
        },


        features:[
          "Leather Seats",
          "Premium Audio",
          "Camera"
        ],

        images:[
          "/cars/fortuner.jpg"
        ],

        available:true
      },





      {
        brand:"Kia",
        model:"Seltos",
        year:2024,
        seats:5,
        fuelType:"Petrol",
        transmission:"Automatic",
        mileage:"18 km/l",
        engine:"1.5 Petrol",
        pricePerDay:3500,
        location:"Mumbai",

        description:
        "Modern SUV loaded with smart features.",


        condition:
        "Almost new condition with luxury interior.",


        owner:{
          name:"Sameer Khan",
          experience:"4 Years",
          rating:4.7
        },


        features:[
          "Sunroof",
          "Wireless Charging",
          "Camera"
        ],

        images:[
          "/cars/seltos.jpg"
        ],

        available:true
      },





      {
        brand:"Hyundai",
        model:"i20",
        year:2024,
        seats:5,
        fuelType:"Petrol",
        transmission:"Manual",
        mileage:"20 km/l",
        engine:"1.2 Petrol",
        pricePerDay:2200,
        location:"Chennai",

        description:
        "Premium hatchback with sporty design.",

        condition:
        "Fresh interior, smooth drive and regularly serviced.",


        owner:{
          name:"Neeraj Patel",
          experience:"3 Years",
          rating:4.5
        },


        features:[
          "Bluetooth",
          "Touchscreen",
          "Airbags"
        ],

        images:[
          "/cars/i20.jpg"
        ],

        available:true
      }



    ];



    await Car.insertMany(cars);



    return NextResponse.json({

      success:true,

      count:cars.length,

      message:"Cars updated with owner details 🚗"

    });



  } catch(error){

    console.log(error);


    return NextResponse.json({

      success:false,

      error:"Seed failed"

    });


  }

}