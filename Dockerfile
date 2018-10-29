FROM node:8.1.4
COPY . /home/app
WORKDIR /home/app
EXPOSE 3000
CMD ["npm","run","start"]
