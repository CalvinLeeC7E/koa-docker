FROM node:8.1.4
COPY . /home/app
WORKDIR /home/app
RUN npm install --registry=https://registry.npm.taobao.org
EXPOSE 3000
CMD ["npm","run","start"]
