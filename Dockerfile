FROM octohost/nodejs-nginx

WORKDIR /srv/www

ADD . /srv/www/
RUN npm install; bower install
RUN ember build --environment production

EXPOSE 80

CMD nginx
