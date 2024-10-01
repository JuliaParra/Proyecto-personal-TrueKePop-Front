<template>
  <div class="admin-dashboard">
    <!-- Navbar -->
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
              <a class="nav-link" href="#" @click.prevent="cerrarSesion">Cerrar Sesión</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Contenido Principal -->
    <div class="container mt-4">
      <!-- Sección de Usuarios -->
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
              <td>{{ user.roles[0]?.name }}</td> <!-- Ajuste para mostrar el rol -->
              <td>
                <button class="btn btn-danger btn-sm" @click="bloquearUsuario(user.id)">Bloquear</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Sección de Reportes (Datos Estáticos por Ahora) -->
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
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();

// Variables reactivas para los datos
const users = ref([]);
const reports = ref([
  { id: 101, title: 'Reporte de Ventas', description: 'Análisis de las ventas del último trimestre.', date: '2024-04-15' },
  { id: 102, title: 'Reporte de Usuarios', description: 'Estadísticas de nuevos usuarios registrados.', date: '2024-04-20' },
  { id: 103, title: 'Reporte de Errores', description: 'Listado de errores reportados por los usuarios.', date: '2024-04-25' },
  { id: 104, title: 'Reporte de Marketing', description: 'Eficacia de las campañas de marketing recientes.', date: '2024-04-30' },
]);

// Función para obtener la lista de usuarios desde el backend
const fetchUsers = async () => {
  try {
    const authToken = localStorage.getItem('authToken'); // Obtener el token de autenticación
    if (!authToken) {
      console.error('Token de autenticación no encontrado');
      router.push('/login');
      return;
    }

    const response = await axios.get('http://localhost:8080/api/admin/users', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`, 
      },
      withCredentials: true, 
    });
    users.value = response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      console.error('No autorizado. Redirigiendo al inicio de sesión.');
      router.push('/login');
    } else {
      console.error('Error al obtener la lista de usuarios:', error);
    }
  }
};


onMounted(() => {
  fetchUsers();
});

const cerrarSesion = () => {
  localStorage.removeItem('authToken'); 
  router.push('/login');
};

const bloquearUsuario = async (userId) => {
  const user = users.value.find(user => user.id === userId);
  if (user) {
    try {
      const authToken = localStorage.getItem('authToken'); 
      if (!authToken) {
        console.error('Token de autenticación no encontrado');
        router.push('/login');
        return;
      }

      await axios.post(`http://localhost:8080/api/admin/users/${userId}/block`, {}, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`, 
        },
      });
      alert(`Usuario ${user.email} bloqueado.`);
      users.value = users.value.filter(user => user.id !== userId);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.error('No autorizado. Redirigiendo al inicio de sesión.');
        router.push('/login');
      } else {
        console.error('Error al bloquear el usuario:', error);
      }
    }
  }
};
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
