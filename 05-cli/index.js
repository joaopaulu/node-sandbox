const Commander = require('commander')
const Database = require('./database')
const Hero = require('./hero')

async function main(){
  Commander
    .version('v1')
    .option('-n, --nome [value]', "Nome do Heroi")
    .option('-p, --poder [value]', "Poder do Heroi")
    .option('-c, --cadastrar', "Cadastrar um Heroi")
    .parse(process.argv)
  const heroi = new heroi(Commander)
  try{
    if(Commander.cadastrar){
      console.log(heroi)
    }
  }catch(error){
    console.error('Deu ruim', error)
  }  
}

main();