<template>
  <div class="list-container">
    <h3 class="section-title">Escucho Ofertas.</h3>
    <div class="list-group">
      <div 
        class="list-group-item neon-effect" 
        v-for="(item, index) in truekes" 
        :key="item.id"
        @click="showDetails(item)"
      >
        <div class="list-item-content">
          <div class="image-container">
            <img :src="item.image" class="list-item-image" :alt="item.name" />
          </div>
          <div class="item-info">
            <h5 class="item-title">{{ item.name }}</h5>
            <p class="item-location"><i class="fas fa-map-marker-alt"></i> {{ item.location }}</p>
            <p class="item-description">{{ item.description }}</p>
            <div class="item-footer">
              <button class="btn btn-favorite" @click.stop="likeItem(item)">
                <i class="fas fa-heart"></i> Favorito
              </button>
              <button class="btn btn-message">
                <i class="fas fa-comment"></i> Mensaje
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal v-if="trueke" :trueke="trueke" @close="closeModal" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Modal from '../Modal.vue';

const truekes = ref([]);
const trueke = ref(null);

const fetchDirecto = async () => {
try {
  const response = await axios.get('http://localhost:8080/api/trueke/directo'); // Ajusta el endpoint según sea necesario
  truekes.value = response.data;
} catch (error) {
  console.error('Error al cargar los truekes:', error);
}
};

const showDetails = (item) => {
trueke.value = item; // Muestra la información del trueke en el modal
};

const closeModal = () => {
trueke.value = null; // Cierra el modal
};

const likeItem = (item) => {
// Lógica para dar 'like' al trueke
console.log('Liked item:', item);
};

onMounted(() => {
fetchDirecto();
});
</script>



<style scoped>
.list-container {
  padding: 20px;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 20px;
  font-weight: bold;
  color: #007bff; /* Color azul */
}

.list-group {
  border-radius: 5px;
}

.list-group-item {
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;
  border-radius: 10px;
  background-color: #f8f9fa; /* Fondo claro */
}

.neon-effect {
  animation: neon 1.5s infinite alternate;
  box-shadow: 0 0 5px #00f, 0 0 10px #00f, 0 0 20px #00f, 0 0 30px #00b, 0 0 40px #00b;
}

@keyframes neon {
  from {
    text-shadow: 0 0 5px #00f, 0 0 10px #00f;
  }
  to {
    text-shadow: 0 0 20px #00f, 0 0 30px #00f;
  }
}

.list-item-content {
  display: flex;
  width: 100%;
}

.image-container {
  width: 150px; /* Ancho más grande para la imagen */
  height: 150px; /* Altura más grande para la imagen */
  border-radius: 10px;
  overflow: hidden;
  margin-right: 15px; /* Espacio entre imagen y contenido */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.list-item-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.2s ease;
}

.list-item-image:hover {
  transform: scale(1.1); /* Efecto de zoom al pasar el mouse */
}

.item-info {
  flex: 1; /* Toma todo el ancho restante */
}

.item-title {
  font-size: 1.25rem;
  margin: 0;
  color: #333; /* Color del título */
}

.item-location {
  font-size: 0.9rem;
  color: #007bff; /* Color azul para la ubicación */
}

.item-description {
  font-size: 0.9rem;
  margin: 5px 0;
  color: #555; /* Color de la descripción */
}

.item-footer {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.btn {
  border: none;
  background-color: transparent;
  color: #007bff; /* Color azul */
  cursor: pointer;
  transition: color 0.2s;
}

.btn:hover {
  color: #0056b3; /* Color más oscuro al pasar el mouse */
}

.btn-favorite {
  background-color: #ff7b00; /* Color naranja */
  color: #fff; /* Texto blanco */
  border-radius: 5px;
  padding: 5px 10px;
}

.btn-favorite:hover {
  background-color: #e68a00; /* Color naranja más oscuro al pasar el mouse */
}
</style>
