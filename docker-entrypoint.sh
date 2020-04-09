#!/bin/sh
set -e

envsubst '${CLIENT_SUB_DOMAIN} ${DOMAIN}' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf

#start nginx
nginx

exec pm2 start process.json --no-daemon
