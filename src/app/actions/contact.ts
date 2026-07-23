"use server";

import { Resend } from "resend";
import { z } from "zod";


const resend = new Resend(process.env.RESEND_API_KEY);


const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});


export async function sendContactEmail(
  formData: FormData
) {

  const data = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });


  if (!data.success) {
    return {
      success:false,
      message:"Invalid form data"
    };
  }


  const {
    name,
    email,
    message
  } = data.data;


  try {

    await resend.emails.send({

      from:
      "Portfolio Contact <onboarding@resend.dev>",

      to:
      process.env.CONTACT_EMAIL!,

      subject:
      `New Portfolio Message from ${name}`,

      html:
      `
      <h2>New Contact</h2>

      <p>
      <strong>Name:</strong>
      ${name}
      </p>

      <p>
      <strong>Email:</strong>
      ${email}
      </p>

      <p>
      <strong>Message:</strong>
      </p>

      <p>
      ${message}
      </p>
      `

    });


    return {
      success:true,
      message:"Message sent successfully"
    };

  } catch {

    return {
      success:false,
      message:"Something went wrong"
    };

  }
}
