const service = require('./service')

async function main(){
  try{
    const result = await service.obterPessoas('le')
    const names = []
    for (pessoa of result.results){
      names.push(pessoa.name)
    }

    console.log(`names`, names)
  }catch(error){
    console.log(`Error interno`, error)
  }
}

main()