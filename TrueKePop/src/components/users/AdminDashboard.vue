<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const truekes = ref([]);
const messages = ref([]);
const searchId = ref('');
const router = useRouter();

const fetchTruekes = async () => {
  // Lógica para obtener truekes
};

const fetchMessages = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/messages', {
      withCredentials: true,
    });
    messages.value = response.data;
  } catch (error) {
    console.error('Error al obtener los mensajes:', error);
  }
};

const eliminarMensaje = async (id) => {
  try {
    await axios.delete(`http://localhost:8080/api/messages/${id}`);
    messages.value = messages.value.filter(message => message.id !== id);
    alert('Mensaje eliminado correctamente.');
  } catch (error) {
    console.error('Error al eliminar el mensaje:', error);
  }
};

onMounted(() => {
  fetchTruekes();
  fetchMessages();
});
</script>

<template>
  <div class="admin-dashboard">
    <nav class="navbar navbar-expand-lg navbar-dark bg-gradient">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Administrador Truekepop</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <button class="btn btn-outline-warning btn-sm" @click="logout">
                Cerrar Sesión
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container mt-4">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h2>Lista de Truekes</h2>
      </div>

      <div class="mb-5">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Ubicación</th>
              <th>Artículo Deseado</th>
              <th>Tipo</th>
              <th>Likes</th>
              <th>Categoría</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="trueke in truekes" :key="trueke.id">
              <td>{{ trueke.id }}</td>
              <td>{{ trueke.name }}</td>
              <td>{{ trueke.description }}</td>
              <td>
                <img :src="trueke.image" alt="Imagen del trueke" class="trueke-image"/>
              </td>
              <td>{{ trueke.location }}</td>
              <td>{{ trueke.desiredItem }}</td>
              <td>{{ trueke.type }}</td>
              <td>{{ trueke.likes }}</td>
              <td>{{ trueke.categoria?.name }}</td>
              <td>
                <button
                  class="btn btn-danger btn-sm"
                  @click="eliminarTrueke(trueke.id)"
                >
                  🗑️ Eliminar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="mb-5">
        <h2>Mensajes Recibidos</h2>
        <ul>
          <li v-for="message in messages" :key="message.id">
            <strong>{{ message.ownerName }}</strong>: {{ message.content }}
            <button @click="eliminarMensaje(message.id)">🗑️ Borrar</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.admin-dashboard {
  font-family: 'Arial', sans-serif;
  background-color: #458a96bd;
  margin: 0%;
}

h2 {
  margin-bottom: 20px;
  color: #1e3a8a;
  border-bottom: 2px solid #f97316;
  padding-bottom: 10px;
}

.table th,
.table td {
  vertical-align: middle;
  color: #1e3a8a;
}

.trueke-image {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 5px;
}

.btn-danger {
  color: #16b4c9;
  background-color: #ffffff;
  border-color: #dc3545;
  transition: background-color 0.3s ease;
}

.btn-danger:hover {
  background-color: #ff9898;
  color: black;
  border-radius: 10%;
}

.container {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.navbar {
  margin-bottom: 20px;
  background: linear-gradient(to right, #1e3a8a, #f97316);
}

.navbar-brand {
  color: #ffffff;
  font-weight: bold;
  margin: 2%;
  font-size: xx-large;
}

.btn-outline-warning {
  color: #ff6a07;
  border-color: #ffc107;
  font-size: 0.8rem; 
}

.btn-outline-warning:hover {
  background-color: #ff7f07;
  color: #1e8a8a;
}

@media (max-width: 768px) {
  h2 {
    font-size: 1.5rem;
  }

  .table th,
  .table td {
    font-size: 0.9rem;
  }
}
</style>
