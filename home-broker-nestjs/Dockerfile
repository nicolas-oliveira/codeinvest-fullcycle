FROM node:20-slim

WORKDIR /home/node/app

RUN apt-get update && apt-get install -y wget git

RUN sh -c "$(wget -O- https://github.com/deluan/zsh-in-docker/releases/download/v1.1.5/zsh-in-docker.sh)" -- \
	-p git \
	-p ssh-agent \
	-p https://github.com/zsh-users/zsh-autosuggestions \
	-p https://github.com/zsh-users/zsh-completions

CMD [ "tail", "-f", "/dev/null"]