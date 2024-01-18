FROM ubuntu:22.04

# 자동화 하려면 사용자와의 인터랙션을 없애야 함 
RUN apt update
RUN apt install nginx -y
RUN echo "<meta charset=utf8>" > /var/www/html/index.html && \
    echo "<H1>This is my first docker 웹페이지</H1>" >> /var/www/html/index.html && \
    echo "<H2>이것은 나의 홈페이지 입니다.</H2>" >> /var/www/html/index.html

ENTRYPOINT ["nginx", "-g", "daemon off;"]


