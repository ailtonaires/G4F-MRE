down:
	docker stop $$(docker ps -a -q)
	docker rm $$(docker ps -a -q)
run:
	docker run --rm --name db -it -d -p 5002:5002 db npm run server
	docker compose up frontend backend --build -d
all:
	docker compose up