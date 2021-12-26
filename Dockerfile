###
###   NESTJS DOCKERFILE
###

# global variables
ARG NODE=node:16.13.1
ARG ALPINE=node:16.13.1-alpine
ARG APP_DIR='/app/'




##
## STAGE 1: node setup
##
FROM ${NODE} AS builder

ARG APP_DIR
ARG ENV

# azure key vault credentials
ARG AKV_URI
ARG AKV_CLIENT_ID
ARG AKV_CLIENT_SECRET
ARG AKV_TENANT_ID

# working directory setup
WORKDIR ${APP_DIR}

COPY package*.json ${APP_DIR}
RUN npm ci

COPY . ${APP_DIR}

# download environment secrets
RUN \
    AKV_URI=${AKV_URI} \
    AKV_CLIENT_ID=${AKV_CLIENT_ID} \
    AKV_CLIENT_SECRET=${AKV_CLIENT_SECRET} \
    AKV_TENANT_ID=${AKV_TENANT_ID} \
    node env/exec/cmd pull -e ${ENV} -f

# CSP compatibility for avoid 'unsafe-inline'
ENV INLINE_RUNTIME_CHUNK false

# builds the app
ENV NODE_ENV production
RUN npm run build:${ENV}




##
## STAGE 2: server setup
##
FROM ${ALPINE}

ARG APP_DIR

# retrieves build app
COPY --from=builder ${APP_DIR}'build' ${APP_DIR}

# working directory setup
WORKDIR ${APP_DIR}

# alpine security updates
RUN apk --no-cache -U upgrade

# installs serve
RUN npm install -g serve
RUN npm cache clean --force

# non root user mode
RUN chown -R node:node ${APP_DIR}
USER node

# execs start command
CMD ["serve", "-s", "-p", "8080"]

EXPOSE 8080/tcp
