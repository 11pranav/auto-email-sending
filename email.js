const nodemailer = require("nodemailer");

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "pranavispatil@gmail.com",
    pass: "zeki udvz eujq nzto",
  },
});
// Wrap in an async IIFE so we can use await.
(async () => {
  const info = await transporter.sendMail({
    from: "pranavispatil@gmail.com",
    to: "pranavispatil11@gmail.com, shwetakp25@gmail.com, abhijithrede@gmail.com",
    subject: "pranav send otp please conform on whatsapp",
    text: "otp :- ", // plain‑text body
    html: "OTP IS :- " + Math.round(Math.random() * 10000).toString(), // HTML body
  });

  console.log("Message sent:", info.messageId);
})();
