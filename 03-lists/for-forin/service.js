const { default: Axios } = require('axios')
const axio = require('axios')
const URL = `https://swapi.dev/api/people`

async function obterPessoas(nome){
  const url = `${URL}/?search=${nome}&format=json`
  const response = await Axios.get(url)
  return response.data
}

module.exports = {
  obterPessoas
}