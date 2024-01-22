FROM nginx

COPY default.conf /etc/nginx/conf.d/default.conf
COPY myweb.html /usr/share/nginx/html/index.html


CMD ["nginx", "-g daemon off;"]