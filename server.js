//Sprint-02

import express from "express";
const app = express();

const PORT = 3000;

// Sprint 02: Array de objetos e função de consulta

function criarMensagem (id, usuario, texto){
    return { id, usuario: usuario.trim(), texto: texto.trim() };

}

const mensagens = [

    criarMensagem(1,"Rhuan", "Olá, geral"),
    criarMensagem(2,"Pedro", "O servidor está funcionando muito bem!"),
    criarMensagem(3,"Ana", "Vamos conversar com o mensageiro local"),

];

function listaMensagem() {
  
    return mensagens

};

function quantidadeDemensagens() {
    return mensagens.length;

}

function buscarMensagem(id) {
    return mensagens.find(mensagens => mensagens.id ===id)

}

app.get('/', (req, res) => res.send('Servidor rodando! 🚀'));
app.get('/status', (req, res) => res.json({ status: 'online', sprint: 2, total: quantidadeDeMensagens() }));
app.get('/sobre', (req, res) => res.send('Meu primeiro servidor Node.js com Express e ES Modules.'));

app.get('/', (req, res) => res.send('Servidor rodando! 🚀'));
app.get('/status', (req, res) => res.json({ status: 'online', sprint: 2, total: quantidadeDeMensagens() }));
app.get('/sobre', (req, res) => res.send('Meu primeiro servidor Node.js com Express e ES Modules.'));

// [SPRINT 02 - NOVO] 6. Consulta, total e busca por ID; erro HTTP 404.
app.get('/mensagens', (req, res) => res.json(listaMensagens()));
app.get('/total-mensagens', (req, res) => res.json( {total: quantidadeDeMensagens()}));
app.get('/mensgens/:id', (req, res) => {
    const mensagem = buscarMensagem(Number(req.params.id));
    if (!mensagem)
        return res.status(404).json({ erro: 'Mensagem não encontrada'})
    res.json(mensagem);

});

app.listen(PORT, () => console.log('Servidor em http://localhost:${PORT}'));
 

