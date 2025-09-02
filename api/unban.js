import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { appeal } = req.body;

  try {
   const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "silenthackersx@gmail.com",  // your Gmail
    pass: "jufe mlku dnwg ojql",   // the App Password, NOT your real Gmail password
  },
});


    for (let i = 0; i < 30; i++) {
      await transporter.sendMail({
        from: "silenthackersx@gmail.com",
        to: "support@whatsapp.com",
        subject: "Unban Request",
        text: appeal,
      });
    }

    return res.status(200).json({ message: "✅ Sent unban request 4 times" });
  } catch (err) {
    console.error("Error:", err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
