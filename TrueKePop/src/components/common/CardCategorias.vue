<template>
  <div class="card-container">
    <div class="card-front shadow">
      <div class="image-container">
        <img :src="item.image" class="card-image" :alt="item.name" />
      </div>
      <h3 class="card-title">{{ item.name }}</h3>
      <p class="card-subtitle">Encuentra el intercambio perfecto</p>
      <p class="card-location"><i class="fas fa-map-marker-alt"></i> {{ item.location }}</p>
    </div>
    <div class="card-slide-info">
      <img src="/src/assets/images/logo.png" class="rotating-logo" alt="Rotating Logo" />
      <p class="card-text wants-item">Busco: {{ item.desiredItem }}</p>
      <h3 class="card-title">Trueke Disponible</h3>
      <p class="card-text has-item">{{ item.description }}</p>
      <button class="btn btn-outline-primary mt-3" @click="$emit('show-details', item)">
        <i class="fas fa-comment"></i> Mensaje
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: Object
});
</script>

<style scoped>
.card-container {
  width: 100%;
  margin: 10px 0;
}
.card-front {
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  background-color: #f8f9fa;
  transition: transform 0.2s ease;
}
.image-container {
  width: 100%;
  height: 150px;
  border-radius: 15px 15px 0 0;
  overflow: hidden;
}
.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card-title {
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 5px;
}
.card-subtitle {
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 10px;
}
.card-location {
  font-size: 0.9rem;
  color: #777;
  margin: 10px 0;
}
</style>
