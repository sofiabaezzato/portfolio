"use server"
import { error } from "console"
import { Resend } from "resend"
import { validateString } from "@/lib/utils"

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (FormData: FormData) => {
  const sender = FormData.get("email")
  const message = FormData.get("message")

  //server side input validation
  if (!validateString(sender, 200)) {
    return error('Invalid Email')
  }
  if (!validateString(message, 5000)) {
    return error('Invalid Message')
  }

  let data;
  try {
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'baezzatosofia331@gmail.com',
      subject: 'Portfolio Form: New message',
      reply_to: sender as string,
      text: message + ' from ' +  sender
    })
  } catch (error: any) {
      return error.message
  }

  return {
    data
  }
}
