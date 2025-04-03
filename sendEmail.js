const nodemailer = require("nodemailer");
const config = require("config");

const sendEmail = async (options) => {
  // Create transporter
  const transporter = nodemailer.createTransport({
    host: config.get("smtpHost"),
    port: config.get("smtpPort"),
    auth: {
      user: config.get("smtpUser"),
      pass: config.get("smtpPassword"),
    },
  });

  // Define email options
  const mailOptions = {
    from: `${config.get("emailFrom")}`,
    to: options.email,
    subject: options.subject,
    html: options.message,
  };

  // Send email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
