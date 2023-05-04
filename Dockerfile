FROM node:16-alpine as build
WORKDIR /app 
COPY package.json ./ 
RUN npm install --force
COPY . . 
RUN npm run build

FROM node:16-alpine
RUN npm install -g serve
COPY --from=build /app/build /build
EXPOSE 3000 
CMD ["serve", "-s", "build"]