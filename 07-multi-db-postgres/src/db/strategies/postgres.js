const ICrud = require('./interfaces/interfaceCrud')
const Sequelize = require('sequelize')

class Postgres extends ICrud{
  constructor(){
    super()
    this.driver = null
    this._herois = null
  }
  async isConnected(){
    try{
      await this._driver.authenticate()
      return true
    }catch(error){
      console.log('fail', error)
      return false;
    }
  }

  async create(item){
    const { 
      dataValues 
    } = await this._herois.create(item)
    return dataValues
  }

  async defineModel(){
    this._herois = this._driver.define('herois', {
      id:{
        type: Sequelize.INTEGER,
        required:true,
        primaryKey:true,
        autoIncrement:true
      },
      nome:{
        type: Sequelize.STRING,
        required: true
      },
      poder:{
        type: Sequelize.STRING,
        required: true
      }
    },
    {
      tableName: 'TB_HEROIS',
      freezeTableName: false,
      timestamp: false
    })
    await this._herois.sync()
  }

   async connect(){
    this._driver = new Sequelize(
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
    await this.defineModel()
  }
}

module.exports = Postgres