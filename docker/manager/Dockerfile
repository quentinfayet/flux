FROM ubuntu

RUN apt-get update && apt-get install -y \
        g++ \
        php7 \
        php7-curl \
        curl \
        nodejs \
        nodejs-legacy \
        npm \
        ruby-full

RUN npm install -g \
        npm

RUN gem install -y \
        sass

RUN curl -sS https://getcomposer.org/installer | php && \
    mv composer.phar /usr/local/bin/composer

VOLUME /data
VOLUME /root/.composer

