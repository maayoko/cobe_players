FROM node:18.0
LABEL maintainer="maayoko@gmail.com"

USER root
RUN apt-get update && \
    mkdir /home/node/app && \
    chown -R node:node /home/node/app

USER node
WORKDIR /home/node/app

EXPOSE 3000

# ENTRYPOINT [ "sh", "-c" ]
CMD [ "sh", "setup.sh" ]
