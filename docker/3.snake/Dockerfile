FROM ubuntu:22.04

# 자동화 하려면 사용자와의 인터랙션을 없애야 함 
RUN apt update
RUN apt install nginx -y

# 파일명 바꿔서 복사하기
COPY snake.html /var/www/html/index.html
# 파일명 그대로 복사하기
COPY snake.js /var/www/html/

ENTRYPOINT ["nginx", "-g", "daemon off;"]


