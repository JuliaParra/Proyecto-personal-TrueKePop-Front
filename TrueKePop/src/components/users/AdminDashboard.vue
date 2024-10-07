<template>
  <div class="admin-dashboard">
    <nav class="navbar">
      <div class="container-fluid">
        <a class="navbar-brand">Administrador Truekepop</a>
        <button class="btn btn-outline-warning btn-sm" @click="logout">Cerrar Sesión</button>
      </div>
    </nav>

    <div class="container mt-4">
      <div class="row">
        <div class="col-md-8">
          <h2>Lista de Truekes</h2>
          <div v-if="truekes.length === 0">No hay truekes disponibles.</div>
          <div v-for="trueke in truekes" :key="trueke.id" class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4 image-container">
                <img :src="trueke.image" alt="Imagen del trueke" class="trueke-image" />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5>{{ trueke.name }}</h5>
                  <p>{{ trueke.description }}</p>
                  <p><small>Ubicación: {{ trueke.location }}</small></p>
                  <p><strong>Artículo Deseado:</strong> {{ trueke.desiredItem }}</p>
                  <p><strong>Tipo:</strong> {{ trueke.type }}</p>
                  <p><strong>Likes:</strong> {{ trueke.likes }}</p>
                  <button class="btn btn-danger-advanced" @click="eliminarTrueke(trueke.id)">🗑️</button>
                  <button class="btn btn-edit-advanced" @click="openEditModal(trueke)">✏️</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4 messages-column">
          <div class="card">
            <div class="card-body">
              <h5>Mensajes Recibidos</h5>
              <ul class="list-group">
                <li v-for="message in messages" :key="message.id" class="list-group-item">
                  <strong>{{ message.ownerName }}</strong>: {{ message.content }}
                  <button @click="eliminarMensaje(message.id)" class="btn btn-danger-advanced">🗑️ Borrar</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <EditTruekeModal 
      v-if="showEditModal" 
      :trueke="selectedTrueke" 
      @update="updateTrueke" 
      @close="closeEditModal" 
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import EditTruekeModal from '@/components/EditTruekeModal.vue'; 

const truekes = ref([]);
const messages = ref([]);
const showEditModal = ref(false);
const selectedTrueke = ref(null);

const fetchTruekes = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/trueke', { withCredentials: true });
    truekes.value = response.data;
  } catch (error) {
    console.error('Error al obtener los truekes:', error);
  }
};

const fetchMessages = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/messages', { withCredentials: true });
    messages.value = response.data;
  } catch (error) {
    console.error('Error al obtener los mensajes:', error);
  }
};

const eliminarTrueke = async (id) => {
  try {
    await axios.delete(`http://localhost:8080/api/trueke/${id}`);
    truekes.value = truekes.value.filter(trueke => trueke.id !== id);
  } catch (error) {
    console.error('Error al eliminar el trueke:', error);
  }
};

const eliminarMensaje = async (id) => {
  try {
    await axios.delete(`http://localhost:8080/api/messages/${id}`);
    messages.value = messages.value.filter(message => message.id !== id);
  } catch (error) {
    console.error('Error al eliminar el mensaje:', error);
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
    const index = truekes.value.findIndex(trueke => trueke.id === updatedTrueke.id);
    if (index !== -1) {
      truekes.value[index] = { ...updatedTrueke };
    }
  } catch (error) {
    console.error('Error al actualizar el trueke:', error);
  }
  closeEditModal();
};

onMounted(() => {
  fetchTruekes();
  fetchMessages();
});
</script>

<style scoped>
.admin-dashboard {
  background-color: #458a96bd;
  padding: 20px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  background: linear-gradient(to right, #1e3a8a, #f97316);
  padding: 10px 20px;
}

.navbar-brand {
  color: #fff;
  font-weight: bold;
}

.container {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 85%;
}

.messages-column {
  border-left: 2px solid #f97316; /* Línea de separación */
  padding-left: 20px; /* Espacio a la izquierda de la línea */
}

.image-container {
  width: 90%;
  height: 200px; /* Fija una altura para que las imágenes tengan el mismo tamaño */
  overflow: hidden; /* Oculta el contenido desbordado */
}

.trueke-image {
  width: 50%;
  height: 100%;
  object-fit: cover; 
  border-radius: 20px;
}

.btn-danger-advanced {
  background: linear-gradient(45deg, #ff6d41, #ff9e67);
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 30px;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s;
}

.btn-danger-advanced::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 200%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  transform: skewX(-45deg);
  transition: left 0.5s;
}

.btn-danger-advanced:hover::after {
  left: 100%;
}

.btn-edit-advanced {
  background: linear-gradient(45deg, #36d1dc, #346f86);
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 30px;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s;
}

.btn-edit-advanced::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 200%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  transform: skewX(-45deg);
  transition: left 0.5s;
}

.btn-edit-advanced:hover::after {
  left: 100%;
}

.list-group-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card {
  margin-bottom: 10px;
}
</style>
