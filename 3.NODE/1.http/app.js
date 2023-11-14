const http = require("http");

const server = http.createServer();

server.on("request", function() {
    console.log("요청이 왔습니다.");
});

server.on("connection", function() {
    console.log("연결되었습니다.");
});

server.on("close", function() {
    console.log("연결이 종료되었습니다");
});


server.listen(3000); // 서버가 시작되고 대기상태