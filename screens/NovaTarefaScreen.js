import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import axios from "axios";

const NovaTarefaScreen = () => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [status, setStatus] = useState("");

  const handleCadastro = async () => {
    try {
      const response = await axios.post("http://10.68.152.245:3000/cadastro", {
        nome,
        descricao,
        status,
      });
      console.log(response.data);
      setNome("");
      setDescricao("");
      setStatus("");
      Alert.alert("Sucesso", "Tarefa cadastrada com sucesso!");
    } catch (err) {
      console.error("Erro ao enviar dados:", err);
      Alert.alert("Erro", "Falha ao cadastrar tarefa.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Tarefa</Text>
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
      <Button title="Cadastrar" onPress={handleCadastro} color="#6200ee" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
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
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 20,
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

export default NovaTarefaScreen;
