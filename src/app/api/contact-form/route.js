// pages/api/contact.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ message: "Sadece POST isteklerine izin verilir" });
  }

  const { name, email, message } = req.body;

  // Mail yapılandırması (örnek olarak Gmail)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER, // .env'den al
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "weecoins.frontend.dev@gmail.com", // nereye yönlendirmek istiyorsan
      subject: `Yeni mesaj: ${name}`,
      text: message,
    });

    res.status(200).json({ message: "Mail gönderildi" });
  } catch (error) {
    console.error("Mail gönderim hatası:", error);
    res.status(500).json({ message: "Mail gönderilemedi" });
  }
}
