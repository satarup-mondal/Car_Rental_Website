import mongoose from "mongoose";


const BookingSchema = new mongoose.Schema(

  {


    user: {

      type: mongoose.Schema.Types.ObjectId,

      ref: "User",

      required: true,

    },



    car: {

      type: mongoose.Schema.Types.ObjectId,

      ref: "Car",

      required: true,

    },




    pickupDate: {

      type: Date,

      required: true,

    },



    returnDate: {

      type: Date,

      required: true,

    },



    totalPrice: {

      type: Number,

      required: true,

    },




    status: {

      type: String,

      enum: [

        "pending",

        "confirmed",

        "cancelled"

      ],


      default: "confirmed",

    },



  },


  {

    timestamps:true,

  }


);







const Booking =

mongoose.models.Booking ||

mongoose.model(

  "Booking",

  BookingSchema

);



export default Booking;