FROM node:lts-alpine3.19
LABEL maintainer="BusyBeeBudgetingFE"
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000

ENTRYPOINT ["npm", "start"]