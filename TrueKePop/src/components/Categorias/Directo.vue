
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const truekes = ref([]);

const fetchDirecto = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/trueke/directo');
    truekes.value = response.data;
  } catch (error) {
    console.error('Error al cargar los truekes:', error);
  }
};

onMounted(() => {
  fetchDirecto();
});
</script>

<template>
  <div class="list-container">
    <h2>Directo</h2>
    <div v-if="truekes.length">
      <div v-for="(item, index) in truekes" :key="item.id" class="list-item">
        <div class="list-item-content">
          <div class="image-container" v-if="item.image">
            <!-- Validación añadida para item.image -->
            <img :src="item.image" class="list-item-image" :alt="item.name" />
          </div>
          <div class="item-info">
            <h5 class="item-title">{{ item.name }}</h5>
            <p class="item-location"><i class="fas fa-map-marker-alt"></i> {{ item.location }}</p>
            <p class="item-description">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <p v-else>No hay truekes disponibles.</p>
  </div>
</template>



<style scoped>
.list-container {
  padding: 20px;
}

.list-item {
  margin-bottom: 20px;
  display: flex;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 10px;
  background-color: #f8f9fa;
}

.list-item-content {
  display: flex;
  width: 100%;
}

.image-container {
  width: 150px;
  height: 150px;
  border-radius: 10px;
  overflow: hidden;
  margin-right: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.list-item-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item-info {
  flex: 1;
}

.item-title {
  font-size: 1.25rem;
  margin: 0;
  color: #333;
}

.item-location {
  font-size: 0.9rem;
  color: #007bff;
}

.item-description {
  font-size: 0.9rem;
  margin: 5px 0;
  color: #555;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 20px;
  font-weight: bold;
  color: #007bff;
}
</style>
