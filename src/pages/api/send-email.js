const sgMail = require("@sendgrid/mail");

export default async function handler(req, res) {
  const { email, message, tel, name } = req.body;

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const messageContent = `Contato recebido do site:

  Nome: ${name}
  Email: ${email}
  Telefone: ${tel}
  Mensagem: ${message}
  `;

  const msg = {
    to: "contato@testoniadvogadas.com.br",
    from: email,
    subject: "Contato do site",
    text: messageContent,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ error: "An error occurred while sending the email" });
  }
}
