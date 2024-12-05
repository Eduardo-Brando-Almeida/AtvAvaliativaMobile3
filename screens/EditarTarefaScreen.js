import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import axios from "axios";

const EditarTarefaScreen = () => {
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [status, setStatus] = useState("");

  const handleAtualizacao = async () => {
    if (!id || !nome || !descricao || !status) {
      Alert.alert("Erro", "Todos os campos são obrigatórios.");
      return;
    }
    try {
      const response = await axios.put(
        `http://10.68.152.245:3000/atualizacao/${id}`,
        {
          nome,
          descricao,
          status,
        }
      );
      console.log(response.data);
      setNome("");
      setDescricao("");
      setStatus("");
    } catch (err) {
      console.error("Erro ao atualizar tarefa:", err);
      Alert.alert("Erro", "Falha ao atualizar tarefa.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Atualização de Tarefa</Text>
      <TextInput
        style={styles.input}
        placeholder="Id da Tarefa"
        value={id}
        onChangeText={setId}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
      />
      <TextInput
        style={styles.input}
        placeholder="Status"
        value={status}
        onChangeText={setStatus}
      />
      <Button
        title="Atualizar Tarefa"
        onPress={handleAtualizacao}
        color="#6200ee"
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f4f4f9",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
    color: "#333",
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 16,
    marginBottom: 15,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#6200ee",
    color: "#fff",
    borderRadius: 10,
  },
});

export default EditarTarefaScreen;
