-- Conectar no container mongo pelo terminal
sudo docker ps
copiar o id do container

sudo docker exec -it 62cf0b8fbac8 
mongo localhost:27017 -u admin -p mgpass --authenticationDatabase admin

show dbs 

use herois

show collections



db.herois.count()
db.herois.findOne()

-- create
db.herois.insert({
  nome:'Flash',
  poder: 'Velocidade',
  dataNascimento:'1967-01-02'
})

-- read
db.herois.find()

-- update
db.herois.ipdate({_id: ObjectId("5f98781f7714dadb70cfd011")},
                  {$set: {nome:'Mulher gato'}})

-- delete
db.herois.remoce({})