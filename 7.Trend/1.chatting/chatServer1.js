const WebSocket = require("ws");

const port = 8080; // well-known port -- 정해져 있는 포트(번호) ex) 25 -- smtp, 22 -- ssh, 80 -- http, 21 -- ftp, 23 -- telnet etc..

const wss = new WebSocket.Server({ port: port });

wss.on("listening", () => {
  console.log(`웹소켓 ${port}번에 대기중!`);
});

wss.on("connection", (ws, req) => {
  const clientIp = req.socket.remoteAddress;
  console.log("클라이언트 접속함", clientIp);

  ws.on("message", (message) => {
    // 연결된 이후 내부 메세지 처리하는 부분
    console.log(message.toString());

    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message.toString());
      }
    });
  });

  ws.on("close", () => {});
});

console.log("웹소켓 서버 시작");
