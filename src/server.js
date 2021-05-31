const express = require('express');
const path = require('path');

const app = express();

//setando a engine a ser utilizada no projeto
app.set('view engine', 'ejs');

//normalmente a pasta views está na raiz, nesse caso como nao está precisamos definir onde o servir ira procurar o arquivo pra exibição
app.set('views', path.join(__dirname, 'views'));
//definindo arquivos publicos
app.use(express.static(path.join(__dirname, 'public')));

//habilita server para receber dados via post(formulário)
app.use(express.urlencoded({ extended: true }));

//rotas
app.get('/', (req, res) => {
  res.render('index', {
    title: 'CRUD completo - Início',
  });
});

app.use((req, res) => {
  res.send('Página não encontrada');
});

//executando o servidor

const port = process.env.PORT || 3030;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
