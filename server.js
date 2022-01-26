// importar express
const express = require('express');
// iniciar express
const app = express();
// nome da pasta no dist que sera feito o build
const PORT = process.env.PORT || 8080;
const appName = 'produdoro-fe';
// local onde build ira gerar os arquivos
const outputPath = `${__dirname}/dist/${appName}`;
console.log(outputPath);

// seta o diretorio de build para servir o conteudo Angular
app.use(express.static(outputPath));
// redirecionar qualquer requisicao para o index.html
app.get('/*', (req, res) => {
    res.sendFile(`${outputPath}/index.html`);
});
// ouvir a porta que o Heroku disponibilizar
app.listen(process.env.PORT || 8080, function(){
    console.log("Express server rodando na port %d in %s mode", this.address().port, app.settings.env);
  });