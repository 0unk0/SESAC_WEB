const express = require("express");
const nunjucks = require("nunjucks");
const multer = require("multer");
const path = require("path");
const sharp = require("sharp");
const fs = require("fs");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "html");
app.use(express.static("public"));

nunjucks
  .configure("views", {
    autoescape: true,
    express: app,
  })
  .addFilter("formatPostDate", function (date) {
    // 임의의 데이터 포멧 설정
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      min: "numeric",
      min: "numeric",
      second: "numeric",
    };
    return new Date(date).toLocaleDateString("ko-KR", options);
  });

let posts = [];

const upload = multer({
  dest: "public/uploads",
  limits: { FileSize: 10 * 1024 * 1024 }, // 10MB로 제한
  fileFilter: (req, file, cb) => {
    // 최소한의 필터
    if (!file.mimetype.startsWith("image/")) {
      return cb(new Error("그림 파일만 첨부 가능합니다"), false);
    }
    cb(null, true);
  },
});

app.get("/", (req, res) => {
  res.render("index2", { posts });
});

app.get("/write", (req, res) => {
  res.render("write2");
});

app.post("/write", upload.single("photo"), (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const date = new Date();
  // 업로드한 파일의 경로
  const filePath = req.file ? req.file.path : null;

  // 원본 이미지와 썸네일을 각각 관리
  const filename = filePath ? `${req.file.filename}` : null;
  const thumbnailpath = filePath ? `thumbnails/thumb_${req.file.filename}` : null;

  posts.push({ title, content, filePath, filename, thumbnailpath, date });

  if (filePath) {
    sharp(filePath)
      .resize(100)
      .toFile(`public/${thumbnailpath}`, (err, info) => {
        if (err) {
          console.error(err);
        }
      });
  }
  //   res.send("작성 완료");
  res.redirect("/");
});

app.get("/images/:filename", (req, res) => {
  const filename = req.params.filename;
  const filepath = path.join(__dirname, "public", "uploads", filename);

  res.setHeader("Content-Type", "image/jpeg");
  res.sendFile(filepath);
});

app.post("/delete/:index", (req, res) => {
  const index = req.params.index - 1; // 실제 인덱스로 변환
  const post = posts[index];

  if (post.filepath) {
    fs.unlinkSync(post.filepath);
    const thumbpath = path.join(__dirname, "public", post.thumbnailpath);
    fs.unlinkSync(thumbpath);
  }
  if (index >= 0 && index < posts.length) {
    posts.splice(index, 1);
  }
  res.redirect("/");
});

app.listen(port, () => {
  console.log("서버 레디...");
});
