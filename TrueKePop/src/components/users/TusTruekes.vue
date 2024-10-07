<template>
    <div class="tus-truekes-container">
      <h2>Tus Truekes</h2>
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="trueke in truekes" :key="trueke.id">
            <td>{{ trueke.id }}</td>
            <td>{{ trueke.name }}</td>
            <td>{{ trueke.description }}</td>
            <td>
              <button class="btn btn-warning btn-sm" @click="editarTrueke(trueke.id)">Editar</button>
              <button class="btn btn-danger btn-sm" @click="eliminarTrueke(trueke.id)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  const truekes = ref([]);
  
  const fetchTruekes = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/trueke', {
        withCredentials: true,
      });
      truekes.value = response.data;
    } catch (error) {
      console.error('Error al obtener tus truekes:', error);
    }
  };
  
  const editarTrueke = (truekeId) => {
    console.log(`Editar trueke con ID: ${truekeId}`);
  };
  
  const eliminarTrueke = async (truekeId) => {
    try {
      await axios.delete(`http://localhost:8080/api/trueke/${truekeId}`, {
        withCredentials: true,
      });
      alert('Trueke eliminado.');
      truekes.value = truekes.value.filter(trueke => trueke.id !== truekeId);
    } catch (error) {
      console.error('Error al eliminar el trueke:', error);
    }
  };
  
  onMounted(() => {
    fetchTruekes();
  });
  </script>
  
  <style scoped>
  .tus-truekes-container {
    margin: 20px auto;
    max-width: 1200px;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    color: #1e3a8a;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .table {
    border-collapse: separate;
    border-spacing: 0 15px;
  }
  
  .table th {
    background-color: #007bff;
    color: white;
    border-radius: 10px 10px 0 0;
  }
  
  .table td {
    background-color: white;
    border-radius: 0 0 10px 10px;
    transition: background-color 0.3s ease;
  }
  
  .table tr:hover td {
    background-color: #ff7a4a;
    color: white;
  }
  
  .btn-warning {
    background-color: #ff7a4a;
    border: none;
    transition: background-color 0.3s ease;
  }
  
  .btn-warning:hover {
    background-color: #ff9c66;
  }
  
  .btn-danger {
    background-color: #dc3545;
    border: none;
    transition: background-color 0.3s ease;
  }
  
  .btn-danger:hover {
    background-color: #f56363;
  }
  </style>
  