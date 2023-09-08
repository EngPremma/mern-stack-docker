FROM node:17-alpine

RUN npm install -g nodemon

WORKDIR /app

COPY package.json .

# this command runs at image build time
RUN npm install 

COPY . .

EXPOSE 4000
# required for docker desktop port mapping

# this command run when running container
CMD ["npm", "run", "dev"]