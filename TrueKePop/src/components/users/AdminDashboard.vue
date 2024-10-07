<template>
  <div class="admin-dashboard">
    <nav class="navbar">
      <div class="container-fluid">
        <a class="navbar-brand">Administrador Truekepop</a>
        <div class="welcome-message"> ¡Otra vez aqui ! 😊</div>
        <button class="btn btn-outline-warning btn-sm" @click="logout">Cerrar Sesión</button>
      </div>
    </nav>

    <div class="container mt-4 dashboard-content">
      <div class="truekes-section">
        <h2 class="section-title">Lista de Truekes</h2>
        
        <!-- Buscador por ID -->
        <div class="search-container">
          <input v-model="searchId" type="text" class="form-control search-input" placeholder="Buscar Trueke por ID" />
          <button class="btn-search" @click="buscarTrueke">Buscar</button>
        </div>

        <div v-if="truekes.length === 0" class="empty-message">No hay truekes disponibles.</div>
        <div v-for="trueke in filteredTruekes" :key="trueke.id" class="card trueke-card">
          <div class="card-content">
            <div class="image-container">
              <img :src="trueke.image" alt="Imagen del trueke" class="trueke-image" />
            </div>
            <div class="details-container">
              <h5 class="trueke-title">{{ trueke.name }}</h5>
              <p class="trueke-description">{{ trueke.description }}</p>
              <p class="trueke-info"><small>Ubicación: {{ trueke.location }}</small></p>
              <p class="trueke-info"><strong>Artículo Deseado:</strong> {{ trueke.desiredItem }}</p>
              <p class="trueke-info"><strong>Tipo:</strong> {{ trueke.type }}</p>
              <p class="trueke-info"><strong>Likes:</strong> {{ trueke.likes }}</p>
              <div class="button-group">
                <button class="btn-delete" @click="eliminarTrueke(trueke.id)">🗑️</button>
                <button class="btn-edit" @click="openEditModal(trueke)">✏️</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="divider"></div>

      <!-- Mensajes Recibidos -->
      <div class="messages-section">
        <h2 class="section-title">Mensajes Recibidos</h2>
        <div class="card messages-card">
          <div class="card-body">
            <h5 class="messages-title">Mensajes</h5>
            <p class="card-text">No hay mensajes nuevos.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <EditTruekeModal 
      v-if="showEditModal" 
      :show="showEditModal" 
      :trueke="selectedTrueke" 
      @update="updateTrueke" 
      @close="closeEditModal" 
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'; 
import axios from 'axios';
import EditTruekeModal from '@/components/EditTruekeModal.vue';

const router = useRouter(); 
const truekes = ref([]);
const searchId = ref('');
const filteredTruekes = ref([]);
const showEditModal = ref(false);
const selectedTrueke = ref(null);

const fetchTruekes = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/trueke', { withCredentials: true });
    truekes.value = response.data;
    filteredTruekes.value = response.data;
  } catch (error) {
    console.error('Error al obtener los truekes:', error);
  }
};

const eliminarTrueke = async (id) => {
  try {
    await axios.delete(`http://localhost:8080/api/trueke/${id}`);
    filteredTruekes.value = filteredTruekes.value.filter(trueke => trueke.id !== id);
  } catch (error) {
    console.error('Error al eliminar el trueke:', error);
  }
};

const openEditModal = (trueke) => {
  selectedTrueke.value = { ...trueke };
  showEditModal.value = true;
};

const closeEditModal = () => {
  showEditModal.value = false;
  selectedTrueke.value = null;
};

const updateTrueke = async (updatedTrueke) => {
  try {
    await axios.put(`http://localhost:8080/api/trueke/${updatedTrueke.id}`, updatedTrueke);
    await fetchTruekes();
  } catch (error) {
    console.error('Error al actualizar el trueke:', error);
  }
  closeEditModal();
};

const buscarTrueke = () => {
  if (searchId.value) {
    filteredTruekes.value = truekes.value.filter(trueke => trueke.id.toString().includes(searchId.value));
  } else {
    filteredTruekes.value = truekes.value;
  }
};

const logout = () => {
  router.push('/login');
};

onMounted(() => {
  fetchTruekes();
});
</script>

<style scoped>
.admin-dashboard {
  background-color: #f0f4f8;
  padding: 20px;
}

.dashboard-content {
  display: flex;
  gap: 20px;
}

.truekes-section, .messages-section {
  flex: 1;
}

.section-title {
  color: #24768f;
  font-weight: bold;
  margin-bottom: 20px;
}

.welcome-message {
  color: #fff;
  font-size: 1.2em;
  margin-right: auto;
}

.search-container {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.search-input {
  flex: 1;
}

.btn-search {
  background-color: #0366d6;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
}

.btn-search:hover {
  background-color: #ff6d41;
}

.empty-message {
  color: #ff6d41;
  font-size: 1.2em;
}

.trueke-card {
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 20px;
  display: flex;
  padding: 20px;
}

.card-content {
  display: flex;
}

.image-container {
  width: 150px;
  height: 150px;
  overflow: hidden;
  margin-right: 20px;
}

.trueke-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.details-container {
  flex: 1;
}

.trueke-title {
  font-size: 1.5em;
  background-image: linear-gradient(45deg, #0366d6, #ff6d41);
  -webkit-background-clip: text;
  color: transparent;
}

.trueke-description, .trueke-info {
  color: #666;
}

.button-group {
  margin-top: 10px;
}

.btn-delete, .btn-edit {
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
  color: white;
  margin-right: 10px;
}

.btn-delete {
  background-color: #ff9741c2;
}

.btn-edit {
  background-color: #43c7cc;
}

/* Divider */
.divider {
  width: 2px;
  background: linear-gradient(to bottom, #0393d6, #eb643b);
  border-radius: 5px;
}

.messages-card {
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.messages-title {
  font-size: 1.5em;
  color: #0366d6;
}

.navbar {
  background-image: linear-gradient(90deg, #03b6d6ef, #ff9741);
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.navbar-brand {
  color: #fff;
  font-weight: bold;
}

.btn-outline-warning {
  color: #41ffff;
  border-color: #41b9ff;
}

.btn-outline-warning:hover {
  background-color: #ff6d41;
  color: white;
}
</style>
