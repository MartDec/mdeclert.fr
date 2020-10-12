FROM ubuntu:20.04

ARG user=martin
ARG uid=1000

EXPOSE 8000/tcp
EXPOSE 8000/udp

RUN echo "nameserver 8.8.8.8" > /etc/resolv.conf \
&& echo "nameserver 8.8.4.4" >> /etc/resolv.conf

RUN rm -f /etc/localtime \
&& ln -s /usr/share/zoneinfo/Europe/Paris /etc/localtime

RUN apt update && apt upgrade -y
RUN apt install -y git vim curl wget software-properties-common unzip tar

RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt install -y nodejs

RUN useradd -G www-data,root -u $uid -d /home/$user $user
RUN mkdir -p /home/${user} && chown -R ${user}:${user} /home/${user}

USER ${user}

WORKDIR /var/www/website