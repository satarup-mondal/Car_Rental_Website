import twilio from "twilio";


const client = twilio(

  process.env.TWILIO_ACCOUNT_SID!,

  process.env.TWILIO_AUTH_TOKEN!

);



// =====================
// SEND WHATSAPP MESSAGE
// =====================


export async function sendWhatsApp(

  phone:string,

  message:string

){


try{


const res = await client.messages.create({

from:

`whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`,



to:

`whatsapp:+91${phone}`,



body:

message,


});



console.log(

"WHATSAPP SENT:",

res.sid

);



return true;



}catch(error){


console.log(

"WHATSAPP ERROR:",

error

);


return false;


}



}