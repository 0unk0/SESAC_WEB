const http = require("http");

const server = http.createServer((req, res) => {
  // req.headrs.cookie를 통해 쿠키 확인
  console.log(req.url, req.headers.cookie);
  // 헤더에 set-cookie 통해서 쿠키 부여
  res.writeHead(200, { "set-cookie": "mycookie=test" });
  res.end("DONE");
});

server.listen(3000, () => {
  console.log("서버가 대기중");
});
