#=====Stage 1 Compile and Build angular codebase=====

# Step 1: Use official node image as the base image
FROM node:16-alpine as build

#Step 2 :Set the working directory for builder container
WORKDIR /applica

#Step 3 : copy package files
#COPY package.json ./

COPY package.json ./
COPY package-lock.json ./
#Step 4 : Installdependancy
#RUN npm install -g npm@8.5.0
#RUN npm install --registry=https://registry.npmjs.org
RUN npm install -g pnpm@next-7
RUN pnpm install
#COPY package-lock.json ./

#Step 5 : Copy all source code
COPY . .

#Step 6 : Generate build of application
RUN npm run build  --configuration=production  --source-map=false



# ====Stage 2: Setup  Server app with nginx server====

#Step 7 : Use official nginx image as the base image
FROM nginx:1-alpine

#Step 8 :Copy default nginx conf.
#COPY nginx/default.conf /etc/nginx/conf.d/default.conf


#Step 9 : copy builded application source code
COPY --from=build /applica/dist/AngualrCQRS /usr/share/nginx/html

#Step 10: Expose port 80
EXPOSE 80
#Step 11 : switch nginx deamon off
#CMD nginx -g "deamon off;"
CMD ["/bin/sh","-c","envsubst < /usr/share/nginx/html/assets/env.sample.js > /usr/share/nginx/html/assets/env.js &&exec nginx -g 'daemon off;'"]