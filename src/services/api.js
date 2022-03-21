import axios from 'axios'

// Base url =>  https://sujeitoprogramador.com/
// r-api/?api=filmes/  ( TODOS OS FILMES )
//  r-api/?api=filmes/123 ( id do filme: 123)

const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com/'
})

export default api;

