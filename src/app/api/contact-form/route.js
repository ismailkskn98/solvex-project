import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.GMAIL_USER}>`,
      to: "weecoins.frontend.dev@gmail.com",
      replyTo: email,
      subject: `Yeni mesaj: ${name}`,
      text: message,
    });

    return Response.json({ message: "Mail gönderildi", status: true });
  } catch (error) {
    console.error("Mail gönderim hatası:", error.message);
    return Response.json(
      { message: "Mail gönderilemedi", status: false },
      { status: 500 },
    );
  }
}
