FROM elasticsearch:1.7.3

MAINTAINER Quentin Fayet

COPY config/elasticsearch.yml /usr/share/elasticsearch/config

RUN /usr/share/elasticsearch/bin/plugin -i mobz/elasticsearch-head
RUN /usr/share/elasticsearch/bin/plugin -i langdetect -url http://xbib.org/repository/org/xbib/elasticsearch/plugin/elasticsearch-langdetect/1.6.0.0/elasticsearch-langdetect-1.6.0.0-plugin.zip
