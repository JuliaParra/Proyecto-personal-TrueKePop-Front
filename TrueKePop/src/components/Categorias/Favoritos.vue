<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios'; 
import CardCategoria from '@/components/common/CardCategorias.vue'; 

const favoritos = ref([]);

// Función para obtener los truekes favoritos del backend
const fetchFavoritos = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/favoritos'); 
    favoritos.value = response.data; 
  } catch (error) {
    console.error('Error al cargar los truekes favoritos:', error.response ? error.response.data : error.message);
  }
};

onMounted(() => {
  fetchFavoritos();
});
</script>

<template>
  <div class="favoritos-container">
    <h2>Mis Truekes Favoritos</h2>
    <div v-if="favoritos.length">
      <div v-for="favorito in favoritos" :key="favorito.id" class="favorito-item">
        <CardCategoria :titulo="favorito.name" :descripcion="favorito.description" :imagen="favorito.image" />
      </div>
    </div>
    
    <div v-else class="obras-image-container">
      <img src="/src/assets/images/obras.jpg.webp" alt="Estamos en obras" class="obras-image" />
      <p>No hay truekes favoritos aún.</p>
    </div>
  </div>
</template>

<style scoped>
.favoritos-container {
  padding: 20px;
}

.favorito-item {
  margin-bottom: 20px;
}


.obras-image-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.obras-image {
  max-width: 100%;
  height: 88vh;
  object-fit: contain;
  margin-bottom: 20px;
}
</style>
