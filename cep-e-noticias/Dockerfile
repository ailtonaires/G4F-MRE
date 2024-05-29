FROM node:18-alpine AS base
COPY package*.json ./
RUN npm install

FROM base AS final
WORKDIR /frontend
COPY ./ ./

EXPOSE 3000
CMD npm start dev