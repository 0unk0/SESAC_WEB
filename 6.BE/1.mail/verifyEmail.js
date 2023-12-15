const express = require("express");
const nunjucks = require("nunjucks");

const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = 3000;

app.set("view engine", "html");

app.use(express.urlencoded({ extended: true }));

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

const code = Math.floor(Math.random() * 900000 + 100000).toString();

app.get("/", (req, res) => {
  res.render("verifyEmail");
});

app.post("/", (req, res) => {
  const inputEmail = req.body.email;
  const inputCode = req.body.code;
  let result;

  if (inputEmail) {
    sendCode(inputEmail, code);
    console.log(inputEmail, code);
  }
  if (inputCode == code) {
    result = 1;
  }
  res.render("verifyEmail", { code: code, result: result });
});

app.listen(PORT, () => {
  console.log("서버 레디");
});

// ====================
function sendCode(emailAddress, code) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    auth: {
      user: process.env.GMAIL_ID,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_ID,
    to: `"${emailAddress}"`,
    subject: "이메일 인증코드",
    text: code,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log("이메일 전송 완료:" + info.response);
    }
  });
}
