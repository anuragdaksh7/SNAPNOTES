FROM node

WORKDIR /client

COPY package.json .

RUN npm install

COPY . .
# RUN npm run build
# FROM nginx:alpine
# COPY --from=build /client/build /usr/share/nginx/html

EXPOSE 3000

# RUN npm run build

CMD ["npm","start"]
