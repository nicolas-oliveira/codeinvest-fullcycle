.PHONY: up
up:
	if [ "$(filter nest,$(MAKECMDGOALS))" ]; then \
		cd home-broker-nestjs && docker-compose up -d; \
	elif [ "$(filter go,$(MAKECMDGOALS))" ]; then \
		cd go-kafka && docker-compose up -d; \
	fi

.PHONY: sh
sh:
	if [ "$(filter nest,$(MAKECMDGOALS))" ]; then \
		cd home-broker-nestjs && docker exec -it home-broker-nestjs-app-1 zsh; \
	fi
%:
	@:
