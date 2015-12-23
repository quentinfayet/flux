FROM php:7

RUN apt-get update && apt-get install -y \
        g++ \
        curl \
        nodejs \
        nodejs-legacy \
        npm \
        ruby-full

RUN npm install -g \
        npm

RUN curl -sS https://getcomposer.org/installer | php && \
    mv composer.phar /usr/local/bin/composer

VOLUME /data
VOLUME /root/.composer

