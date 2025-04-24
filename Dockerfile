FROM node:23-alpine
COPY . ./
RUN npm install
RUN npm run build

COPY ./dist ./dist

EXPOSE 8000

CMD ["node", "dist/main.js"]