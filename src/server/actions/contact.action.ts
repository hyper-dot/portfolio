"use server";
import { TContactSchema, contactSchema } from "@/schema/contact.schema";
import nodemailer from "nodemailer";
// Create a transporter
let transporter = nodemailer.createTransport({
  host: process.env.NODE_MAILER_HOST,
  port: 465,
  auth: {
    user: process.env.NODE_MAILER_USER,
    pass: process.env.NODE_MAILER_PASS,
  },
});

export async function sendMail(data: TContactSchema) {
  const parsed = contactSchema.safeParse(data);

  if (!parsed.success) {
    throw new Error("Invalid data type");
  }

  const { email, name, message } = parsed.data;

  // Setup email data
  let mailOptions = {
    from: '"Portfolio Website" <roshan@metalogic.com.np>',
    to: "rozanpoudel@gmail.com",
    subject: "Message came from portfolio website",
    html: emailTemplate(name, email, message),
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error occurred:", error.message);
      return error;
    }
    console.log("------------------------------------------------------------");
    console.log(`Email sent successfully to ${email} !!`);
    console.log("Message ID:", info.messageId);
    console.log("------------------------------------------------------------");
    return info;
  });
}

const emailTemplate = (name: string, email: string, message: string) => {
  return `
<div>
  <p>New Message from Website</p>

  Please review the message.<br />

  <ul>
  <li>Name : ${name}</li>
  <li>Email : ${email}</li>
  <li>message : ${message}</li>
  <ul/>
</div>
`;
};
