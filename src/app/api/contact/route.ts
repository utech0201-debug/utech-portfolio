import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();


    if (!name || !email || !message) {
      return Response.json(
        {
          success: false,
          error: "Missing required fields",
        },
        {
          status: 400,
        }
      );
    }


    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "utech0201@gmail.com",

      subject: `Portfolio Contact from ${name}`,

      html: `
        <div style="font-family:sans-serif">

          <h2>
            New Portfolio Message
          </h2>

          <p>
            <strong>Name:</strong> ${name}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <p>
            <strong>Message:</strong>
          </p>

          <p>
            ${message}
          </p>

        </div>
      `,
    });


    return Response.json({
      success: true,
    });


  } catch (error) {

    console.error(error);

    return Response.json(
      {
        success:false,
        error:"Failed to send message",
      },
      {
        status:500,
      }
    );
  }
}