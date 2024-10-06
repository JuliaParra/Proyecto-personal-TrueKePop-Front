<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api';

const novedades = ref([]);

const fetchNovedades = async () => {
  try {
    const response = await axios.get('/truekes');
    console.log(response.data); // Verifica que la estructura sea la esperada
    novedades.value = response.data;
  } catch (error) {
    console.error('Error al cargar los truekes:', error.response ? error.response.data : error.message);
  }
};

onMounted(() => {
  fetchNovedades();
});
</script>

<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-4 mb-4" v-for="(item, index) in novedades" :key="item.id">
        <div class="card-container slide-card">
          <div class="card-front shadow">
            <div class="image-container">
              <img :src="item.image" class="card-image" :alt="item.name" />
            </div>
            <h3 class="card-title">{{ item.name }}</h3>
            <p class="card-subtitle">Busco: {{ item.desiredItem }}</p>
            <p class="card-text has-item">Ofrezco: {{ item.offerItem }}</p>
            <button class="btn btn-outline-primary mt-3" @click="viewDetails(item)">Ver detalles</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  position: relative;
  width: 100%;
  max-width: 350px;
  height: 300px;
  overflow: hidden;
  border-radius: 20px;
  background-color: #f8f9fa;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.card-front {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: #fff;
}

.image-container {
  width: 100%;
  height: 150px;
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 15px;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-title {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 1.2rem;
  color: #333;
  text-align: center;
}

.card-subtitle, .card-text {
  font-size: 1rem;
  text-align: center;
  color: #4ecfe9;
}

.btn-outline-primary {
  border: 1px solid #4ecfe9;
  color: #4ecfe9;
  background-color: transparent;
  border-radius: 30px;
  transition: background-color 0.8s ease, color 0.8s ease;
}

.btn-outline-primary:hover {
  background-color: #ffb65d;
  color: #fff;
  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.2);
}
</style>
