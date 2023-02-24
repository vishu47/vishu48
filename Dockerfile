FROM node:16

WORKDIR /src
COPY . .

EXPOSE 4004

RUN npm install
RUN npm install serve
RUN npm run build

CMD ["npm","run","deploy"]