docker-test-all:
	touch services/server/.env; \
	docker-compose run server yarn test; \
	docker-compose run server yarn lint;