const Sequelize = require('sequelize')
const driver = new Sequelize(
  'heroes',
  'postgres',
  'docker',
  {
    host: 'localhost',
    dialect: 'postgres',
    quoteIdentifiers: 0,
    operatorsAliases: 0
  }
)

async function main(){
  
  await Herois.create({
    nome:'Super Man',
    poder:'Super Força'
  })

  const result = await Herois.findAll({
    raw: true
  })
  console.log('result', result)
}

main()