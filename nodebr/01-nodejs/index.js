const util = require('util'); 
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario(){
  return new Promise(function resolvePromise(resolve, reject){
    setTimeout(function(){
      return resolve({
        id: 1,
        nome: 'JP',
        dataNascimento: new Date()
      })
    },1000)
  })
}

function obterTelefone(idUsuario){
  return new Promise(function resolverPromise(resolve, reject){
    setTimeout(() => {
      return resolve({
        telefone:'99223-3994',
        ddd:61
      })
    },2000)
  })
}

function obterEndereco(idUsuario, callback){
  setTimeout(() => {
    return callback(null,  {
      quadra:'SQS Brasília',
      cidade:'Asa Sul'
    })
  },2000)
}
main()
async function main(){
  try{
    const usuario = await obterUsuario();
    const resultado = await Promise.all([
      obterTelefone(usuario.id),
      obterEnderecoAsync(usuario.id)
    ])
    const endereco = resultado[1]
    const telefone = resultado[0]

    console.log(`
       Nome: ${usuario.nome},
       Endereco: ${endereco.quadra},${endereco.cidade}
       Telefone:(${telefone.ddd}) ${telefone.telefone}
   `)

  }catch(error){
    console.error('Deu ruim', error)
  }
}
