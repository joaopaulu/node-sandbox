function obterUsuario(callback){
  setTimeout(function(){
    return callback(null, {
      id:1,
      nome: 'JP',
      dataNascimento: new Date()
    })
  },1000)
}

function obterTelefone(idUsuario, callback){
  setTimeout(() => {
    return callback(null,  {
      telefone:'99223-3994',
      ddd:61
    })
  },2000)
}

function obterEndereco(idUsuario, callback){
  setTimeout(() => {
    return callback(null,  {
      quadra:'SQS Brasília',
      cidade:'Asa Sul'
    })
  },2000)
}

obterUsuario(function resolverUsuario(error, usuario){
  if (error){
    console.error('Deu ruim em Usuário', error)
    return;
  }
  obterTelefone(usuario.id, function resolverTelefone(erro1, telefone){
    if(erro1){
      console.error('Deu ruim em Telefone', error)
      return;
    }
    obterEndereco(usuario.id, function resolverEndereco(erro2, endereco){
      if(erro2){
        console.error('Deu ruim em Endereço', erro)
        return;
      }
      
      console.log(`
      Nome: ${usuario.nome},
      Endereco: ${endereco.quadra},${endereco.cidade}
      Telefone:(${telefone.ddd}) ${telefone.telefone}
      `)
    })
  })
})

