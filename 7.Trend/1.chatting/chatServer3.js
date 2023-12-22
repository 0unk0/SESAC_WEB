const express = require("express");
const expressWs = require("express-ws");
const WebSocket = require("ws");
const path = require("path");

const port = 3000;

const app = express();
expressWs(app);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client3.html"));
});

const wsClients = new Map();

app.ws("/chat", (ws, req) => {
  const clientIp = req.socket.remoteAddress;
  console.log("클라이언트 접속함", clientIp);

  ws.on("message", (message) => {
    // 연결된 이후 내부 메세지 처리하는 부분
    console.log(message.toString());
    let parsedMessage = "";
    let messageType;
    let username;

    // 받은 문자열 파싱해서 객체화
    try {
      parsedMessage = JSON.parse(message);
      messageType = parsedMessage.type;
      username = parsedMessage.username;
      console.log(parsedMessage);
      console.log(clientIp, parsedMessage.content);
    } catch (error) {
      console.error("Invalid JSON Format: ", error);
      return;
    }

    // 세션 ID를 한번도 저장한적 X? 저장
    if (username && !wsClients.has(username)) {
      wsClients.set(username, ws);
    }

    console.log(`메세지 받음 from ${username}`);

    if (messageType !== "session") {
      wsClients.forEach((client) => {
        // console.log(client);

        if (client.readyState === WebSocket.OPEN) {
          const messageType = client === ws ? "sent" : "received";
          const messageObj = { type: messageType, sender: username, content: parsedMessage?.content };

          client.send(JSON.stringify(messageObj));
        }
      });
    }
  });

  ws.on("close", () => {});
});

app.listen(port, () => {
  console.log(`익스프레스 서버 및 웹소켓 레디 on ${port}`);
});
