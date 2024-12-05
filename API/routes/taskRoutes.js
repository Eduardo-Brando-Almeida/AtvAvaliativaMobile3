const express = require("express");
const { v4: uuidv4 } = require("uuid");

const router = express.Router();

// Banco de dados em memória
let tasks = [];

// Rota para cadastro de tarefas
router.post("/cadastro", (req, res) => {
  const { nome, descricao, status } = req.body;

  if (!nome || !descricao || !status) {
    return res
      .status(400)
      .json({ message: "Nome, descrição e status são obrigatórios." });
  }

  const newTask = {
    id: uuidv4(),
    nome,
    descricao,
    status,
  };

  tasks.push(newTask);
  res.status(201).json({ message: "Tarefa cadastrada com sucesso!", task: newTask });
});

// Rota para listar todas as tarefas
router.get("/home", (req, res) => {
  res.status(200).json(tasks);
});

// Rota para atualização de uma tarefa
router.put("/atualizacao/:id", (req, res) => {
  const { id } = req.params;
  const { nome, descricao, status } = req.body;

  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex === -1) {
    return res.status(404).json({ message: "Tarefa não encontrada." });
  }

  if (!nome || !descricao || !status) {
    return res
      .status(400)
      .json({ message: "Nome, descrição e status são obrigatórios." });
  }

  tasks[taskIndex] = { id, nome, descricao, status };
  res.status(200).json({ message: "Tarefa atualizada com sucesso!", task: tasks[taskIndex] });
});

// Rota para deletar uma tarefa
router.delete("/home/:id", (req, res) => {
  const { id } = req.params;

  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex === -1) {
    return res.status(404).json({ message: "Tarefa não encontrada." });
  }

  tasks.splice(taskIndex, 1);
  res.status(200).json({ message: "Tarefa deletada com sucesso." });
});

module.exports = router;
