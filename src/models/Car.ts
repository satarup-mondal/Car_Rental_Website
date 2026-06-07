import mongoose from "mongoose";


const CarSchema = new mongoose.Schema(
  {

    brand:{
      type:String,
      required:true
    },

    model:{
      type:String,
      required:true
    },

    year:{
      type:Number,
      required:true
    },

    seats:{
      type:Number,
      required:true
    },

    fuelType:{
      type:String,
      required:true
    },

    transmission:{
      type:String,
      required:true
    },


    mileage:{
      type:String
    },


    engine:{
      type:String
    },


    pricePerDay:{
      type:Number,
      required:true
    },


    location:{
      type:String,
      required:true
    },


    description:{
      type:String
    },


    condition:{
      type:String
    },


    owner:{
      name:String,
      experience:String,
      rating:Number
    },


    features:[
      String
    ],


    images:[
      String
    ],


    available:{
      type:Boolean,
      default:true
    }


  },
  {
    timestamps:true
  }
);



const Car =
mongoose.models.Car ||
mongoose.model(
  "Car",
  CarSchema
);


export default Car;