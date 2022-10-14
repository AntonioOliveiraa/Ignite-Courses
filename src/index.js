const { request, response } = require('express');
const express = require('express');

const app = express();

// Utilizando o método "send" para retornar uma mensagem
/* app.get("/", (request, response) => {
    return response.send("Hello World!");
}) */

// Utilizando o método "json" para retornar uma mensagem
app.get("/", (request, response) => {
    return response.json({ message: "Hello World, Ignite! - Fundamentos Node.js" });
})

// Usando o método "GET" para solicitar recursos
app.get("/courses", (request, response) => {
    return response.json(["Curso 1", "Curso 2", "Curso 3"]);
})

// Usando o método "POST" para inserir recursos
app.post("/courses", (request, response) => {
    return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
})

// Usando o método "PUT" para alterar recursos
app.put("/courses/:id", (request, response) => {
    return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"]);
})

// Usando o método "PATCH" para atualizar recursos
app.patch("/courses/:id", (request, response) => {
    return response.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"]);
})

// Usando o método "DELETE" para excluir recursos
app.delete("/courses/:id", (request, response) => {
    return response.json(["Curso 6", "Curso 7", "Curso 4"])
})


// A porta onde o servidor vai ser executado. Ex: localhost:3031
app.listen(3333);
