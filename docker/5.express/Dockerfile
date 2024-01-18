FROM node:18-slim

WORKDIR /app

COPY . . 
# 단, 로컬에서 빌드되어 호스트나 아키텍쳐의 dependency를 갖고 있는 것들은 복사하지 않아야 한다 -> .dockerignore

# package.json을 읽어서 알아서 설치해줌
RUN npm install

# ENTRYPOINT [ "node", "app.js" ]
# CMD [ "node", "app.js" ]

ENTRYPOINT [ "node" ]
CMD [ "app.js" ]