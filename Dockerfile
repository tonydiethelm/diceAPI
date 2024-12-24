FROM node:lts-alpine
LABEL maintainer='tonydiethelm@gmail.com'
#RUN apt-get -y update && apt-get -y install npm
COPY . /app
CMD ["node", "/app/ExpressBE/index.js"]
EXPOSE 3000