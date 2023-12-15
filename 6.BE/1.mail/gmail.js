const nodemailer = require("nodemailer");
require("dotenv").config();

// 네이버 메일 서버 설정
const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  auth: {
    user: process.env.GMAIL_ID,
    pass: process.env.GMAIL_PASS, // 애플리케이션 비밀번호
  },
});

// 이메일 내용 정의
const mailOptions = {
  from: process.env.GMAIL_ID,
  to: process.env.NAVER_ID, //실제 받고 싶은 수신자
  subject: "테스트 이메일",
  text: "안녕하세요, 이것은 네이버 메일로 보내는 테스트 메일입니다람쥐.",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error(error);
  } else {
    console.log("이메일 전송 완료:" + info.response);
  }
});
