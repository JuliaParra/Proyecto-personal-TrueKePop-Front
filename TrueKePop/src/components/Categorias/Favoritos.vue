<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios'; // Importa Axios para realizar la solicitud
import CardCategoria from '@/components/common/CardCategorias.vue'; 

const favoritos = ref([]);

// Función para obtener los truekes favoritos del backend
const fetchFavoritos = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/favoritos'); // Asegúrate de que esta URL sea la correcta
    favoritos.value = response.data; // Asigna la data recibida a la variable favoritos
  } catch (error) {
    console.error('Error al cargar los truekes favoritos:', error.response ? error.response.data : error.message);
  }
};

// Llama a la función fetchFavoritos cuando el componente se monta
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
    <p v-else>No hay truekes favoritos aún.</p>
  </div>
</template>

<style scoped>
.favoritos-container {
  padding: 20px;
}

.favorito-item {
  margin-bottom: 20px;
}
</style>
