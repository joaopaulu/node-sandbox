const ICrud = require('./../interfaces/interfaceCrud')

class ContextStrategy extends ICrud{
  constructor(strategy){
    super()
    this._database = strategy
  }

  create(item){
    return this._database.create(item)
  }

  read(item){
    return this._database.read(item)
  }

  update(id, item){
    return this._database.updade(id, item)
  }

  delete(id){
    return this._database.delete(id)
  }

  isConnected(){
    throw new NotImplementedException()
  }
}

module.exports = ContextStrategy