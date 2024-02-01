FROM node:20.9.0

EXPOSE 3000

WORKDIR /code

# Create a non-root user and set ownership for the working directory
RUN adduser --disabled-password --gecos '' nodeuser
RUN chown -R nodeuser:nodeuser /code

# Switch to the non-root user
USER nodeuser

# Copy only package files first for caching
COPY --chown=node:node package*.json ./

RUN npm ci

# Copy the rest of the application files
COPY --chown=node:node . .

CMD [ "npm", "run", "start" ]
