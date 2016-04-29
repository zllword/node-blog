#1.kill
killall -9 node
killall -9 npm

#2
DEBUG=blog:*
#DEBUG=http,mail,express:*
nohup node ./bin/www &
