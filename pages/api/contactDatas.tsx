import sgMail from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

const SENDGRID = process.env.SENDGRID;
const MAILTO = process.env.MAILTO;
const MAILFROM = process.env.MAILFROM;

if (!SENDGRID || !MAILTO || !MAILFROM) {
  throw new Error("Missing environment variables");
}

sgMail.setApiKey(SENDGRID);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { username, mail, phone, message } = req.body;
    const msg = {
      to: MAILTO as string,
      from: MAILFROM as string,
      subject: "Un client potentiel vient de vous contacter",
      text: `Nom: ${username}\nEmail: ${mail}\nTéléphone: ${phone}\nMessage: ${message}`,
    };

    try {
      await sgMail.send(msg);
      res.status(200).json({ message: "Message envoyé avec succés !" });
    } catch (error) {
      res.status(500).json({ error: "L'envoi du message n'a pas abouti" });
    }
  } else {
    res.status(405).json({ error: "Methode non approuvée" });
  }
}

