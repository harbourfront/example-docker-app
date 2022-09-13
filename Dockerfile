FROM registry.access.redhat.com/ubi8/nodejs-16:latest

# Copy package.json and package-lock.json
COPY package*.json ./

# Use root user
USER root

# Install npm production packages 
RUN npm install --production

COPY . /opt/app-root/src

ENV NODE_ENV production
ENV PORT 3000

EXPOSE 3000

# Switch to daemon user
USER daemon

CMD ["npm", "start"]
