<template>
  <div class="admin-dashboard">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Administrador Truekepop</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <!-- Aquí puedes añadir más opciones de navegación si es necesario -->
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container mt-4">
      <div class="mb-5">
        <h2>Lista de Usuarios</h2>
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>{{ user.id }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.roles[0]?.name }}</td> 
              <td>
                <button class="btn btn-danger btn-sm" @click="bloquearUsuario(user.id)">Bloquear</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <h2>Lista de Reportes</h2>
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Descripción</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="report in reports" :key="report.id">
              <td>{{ report.id }}</td>
              <td>{{ report.title }}</td>
              <td>{{ report.description }}</td>
              <td>{{ report.date }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const users = ref([]);
const reports = ref([]);

const fetchUsers = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/users', {
      withCredentials: true, 
    });
    users.value = response.data;
  } catch (error) {
    console.error('Error al obtener la lista de usuarios:', error);
  }
};

// const bloquearUsuario = async (userId) => {
//   const user = users.value.find(user => user.id === userId);
//   if (user) {
//     try {
//       await axios.post(`http://localhost:8080/users/${userId}/block`, {}, {
//         withCredentials: true,
//       });
//       alert(`Usuario ${user.email} bloqueado.`);
//       users.value = users.value.filter(user => user.id !== userId);
//     } catch (error) {
//       console.error('Error al bloquear el usuario:', error);
//     }
//   }
// };

onMounted(() => {
  fetchUsers();
});
</script>

<style scoped>
.admin-dashboard {
  font-family: 'Arial', sans-serif;
}

h2 {
  margin-bottom: 20px;
}

.table th, .table td {
  vertical-align: middle;
}

.btn-danger {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}

@media (max-width: 768px) {
  h2 {
    font-size: 1.5rem;
  }

  .table th, .table td {
    font-size: 0.9rem;
  }
}
</style>
