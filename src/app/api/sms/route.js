import { NextResponse } from "next/server";
import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

export async function POST(request) {
  try {
    const data = await request.json();
    const message = await client.messages.create({
      body: data.message,
      from: "+14252797504",
      to: data.phone,
    });
    console.log(message.sid);

    return NextResponse.json(
      { message: "Message sent" },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error);
  }
}
