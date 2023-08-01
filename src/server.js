import http from 'node:http'

// - Criar usuários
// - Listar usuários
// - Editar usuários
// - Remover usuários

// - HTTP
//   - Método HTTP
//   - URL

// GET, PUT, POST, PATHC, DELETE 

// - GET => Buscar uma recurso do back-end
// - POST => Criar uma recurso no back-end
// - PUT => Editar / atualizar uma recurso no back-end
// - PATCH => Atualizar uma informação específica de um recurso no back-end
// - DELETE => Deletar um recurso do back-end

const users = []

const server = http.createServer((req, res) => {
  const {method, url} = req;

  if(method === 'GET' && url === '/users') {
    return res
    .setHeader('Content-Type', 'application/json')
    .end(JSON.stringify(users));
  } 

  if(method === 'POST' && url === '/users') {
    users.push({
      id: 1,
      name: 'Joe Doe',
      email: 'joe@example.com'
    })
    return res.end('Criando usuário');
  }
  
  return res.end('Hello world')
})

server.listen(3333)