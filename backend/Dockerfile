# # FROM node:22-alpine
# # # says which node version
# # WORKDIR /petstore

# # COPY backend/package*.json ./

# # RUN npm install

# # COPY backend/. .

# # COPY frontend/dist backend/frontend-dist


# # ENV NODE_ENV=production
# # #can be ignored if not using env variables used only for optimization
# # EXPOSE 4000

# # CMD ["node", "server.js"]
# FROM node:22-alpine

# WORKDIR /petstore

# # Install backend deps
# COPY backend/package*.json ./
# RUN npm install

# # Build frontend and copy to backend folder
# COPY frontend ./frontend
# RUN cd frontend && npm install && npm run build

# # Move the build to a static folder (you reference this in server.js)
# RUN mkdir frontend-dist && cp -r frontend/dist/* frontend-dist/

# # Copy backend code after so it doesn't trigger rebuild if only server changes
# COPY backend/. .

# EXPOSE 4000
# CMD ["node", "server.js"]
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 4000
CMD ["node", "server.js"]
