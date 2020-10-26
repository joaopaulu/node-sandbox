## Docker Postgres
docker run --name node_postgres -e POSTGRES_USER=joaopaulo -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=heroes -p 5432:5432 -d postgres

## Docker MongoDB
docker run --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INIT_ROOT_PASSWORD=mgpass -d mongo:4

## Client Mongo
docker run --name mongoclient -p 3000:3000 --link mongodb:mongodb -d mongoclient/mongoclient