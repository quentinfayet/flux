FROM php:7-fpm

MAINTAINER Quentin Fayet

RUN apt-get update

ADD php.ini /usr/local/etc/php/conf.d/

CMD ["php-fpm", "-F"]
