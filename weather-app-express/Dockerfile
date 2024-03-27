FROM node:14.0.0
RUN mkdir -p /home/node/code
COPY . /home/node/code
WORKDIR /home/node/code
RUN npm install
EXPOSE 3000
CMD npm start
