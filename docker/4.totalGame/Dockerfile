FROM ubuntu:22.04

# 자동화 하려면 사용자와의 인터랙션을 없애야 함 
RUN apt update
RUN apt install nginx -y

# 나의 홈 폴더 설정
WORKDIR /var/www/html/

# COPY *.html ./
# COPY *.js ./
COPY . .

ENTRYPOINT ["nginx", "-g", "daemon off;"]


