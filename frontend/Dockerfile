# FROM node:22-alpine
# # says which node version
# WORKDIR /petstore
# # sets the working directory
# COPY package*.json ./
# # copies package.json and package-lock.json to the working directory
# RUN npm install
# # installs the dependencies
# COPY . .
# RUN npm run build
# # copies the rest of the files to the working directory
# EXPOSE 3000
# # exposes port 3000 to users
# CMD ["npm","run","dev"]
# Stage 1 - Build
FROM node:22-alpine as build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2 - Serve with Nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
