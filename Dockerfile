FROM alpine

LABEL maintainer="warakornbunhlau@gmail.com"

# Install Node and NPM
RUN apk add --update nodejs npm curl

# Copy application code to /src
COPY . /src

WORKDIR /src

# install dependencies
RUN npm install

EXPOSE 8080

ENTRYPOINT [ "node", "./app.js" ]