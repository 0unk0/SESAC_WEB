FROM nginx

COPY sesac.conf /etc/nginx/conf.d/sesac.conf
COPY myweb.html /usr/share/nginx/html/index.html


CMD ["nginx", "-g daemon off;"]