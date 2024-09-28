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
              <th>Nombre</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>{{ user.id }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.role }}</td>
              <td>
                <button class="btn btn-danger btn-sm" @click="bloquearUsuario(user.id)">Bloquear</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Sección de Reportes -->
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
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const users = ref([
  { id: 1, name: 'Carlos Martínez', email: 'carlos@example.com', role: 'Administrador' },
  { id: 2, name: 'Ana López', email: 'ana@example.com', role: 'Editor' },
  { id: 3, name: 'Luis Gómez', email: 'luis@example.com', role: 'Usuario' },
  { id: 4, name: 'María Fernández', email: 'maria@example.com', role: 'Usuario' },
]);

const reports = ref([
  { id: 101, title: 'Reporte de Ventas', description: 'Análisis de las ventas del último trimestre.', date: '2024-04-15' },
  { id: 102, title: 'Reporte de Usuarios', description: 'Estadísticas de nuevos usuarios registrados.', date: '2024-04-20' },
  { id: 103, title: 'Reporte de Errores', description: 'Listado de errores reportados por los usuarios.', date: '2024-04-25' },
  { id: 104, title: 'Reporte de Marketing', description: 'Eficacia de las campañas de marketing recientes.', date: '2024-04-30' },
]);

const cerrarSesion = () => {
  localStorage.removeItem('authToken');
  router.push('/login');
};

const bloquearUsuario = (userId) => {
  const user = users.value.find(user => user.id === userId);
  if (user) {
    // Aquí puedes añadir la lógica para bloquear al usuario, como realizar una solicitud al backend
    alert(`Usuario ${user.name} bloqueado.`);
    // Ejemplo: eliminar el usuario de la lista
    users.value = users.value.filter(user => user.id !== userId);
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
