FROM nginx

MAINTAINER Quentin Fayet

ADD config/nginx.conf /etc/nginx/

ENTRYPOINT sleep 5 && nginx -g 'daemon off;'