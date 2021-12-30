let {writeFile} = require('fs');
const {createServer} = require('http')

writeFile("arquivo.txt", "Inserir este texto", (erro) =>{
    if (erro) {
        console.log(erro);
    } else{
        console.log("escreveu um arquivo");
    }
});

let server = createServer((request, response) =>{
response.writeHead(200, {"Content-Type": "text/html"});
response.write(`
<h1>hello world</h1>
<p>Primeira pagina web com Node.js</p>`);
response.end();
});

server.listen(8000);

console.log("Listening (port 8000)");