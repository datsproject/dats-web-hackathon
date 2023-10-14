FROM docker.io/library/node:16.14.2-slim
ADD  . /project
WORKDIR /project
RUN npm install
EXPOSE 3000
CMD [ "npm", "run", "start" ] 