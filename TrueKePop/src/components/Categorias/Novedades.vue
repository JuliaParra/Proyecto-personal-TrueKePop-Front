
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';


const truekes = ref([]);
const trueke = ref(null);

const fetchNovedades = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/trueke/novedades'); 
    truekes.value = response.data;
  } catch (error) {
    console.error('Error al cargar los truekes:', error);
  }
};

const showDetails = (item) => {
  trueke.value = item;
};



const likeItem = (item) => {
  console.log('Liked item:', item);
};

onMounted(() => {
  fetchNovedades();
});
</script>



<template>
  <div class="list-container">
    <h3 class="section-title">Novedades</h3>
    <div class="list-group">
      <div 
        class="list-group-item" 
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
          </div>
        </div>
        <div class="item-footer">
          <button class="btn btn-favorite" @click.stop="likeItem(item)">
            <span class="thumbs-up-icon">👍</span>
          </button>
          <button class="btn btn-info" @click.stop="showDetails(item)">
            <span class="eye-icon">👁️</span>
          </button>
        </div>
      </div>
    </div>
   
  </div>
</template>



<style scoped>
.list-container {
  padding: 20px;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 20px;
  font-weight: bold;
  color: #40caca; 
}

.list-group {
  display: grid; 
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); 
  gap: 30px; 
}

.list-group-item {
  display: flex;
  flex-direction: column; 
  padding: 15px;
  border: 1px solid #48c4b9ab; 
  border-radius: 20px;
  background-color: #fff; 
  transition: box-shadow 0.3s ease; 
  cursor: pointer;
}

.list-group-item:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); 
}

.image-container {
  width: 100%; 
  height: 200px; 
  border-radius: 10px 10px 0 0; 
  overflow: hidden;
  margin-bottom: 10px; 
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
  font-size: 1.5rem; 
  margin: 0;
  color: #333; 
}

.item-location {
  font-size: 0.9rem;
  color: #ffae00; 
}

.item-description {
  font-size: 0.9rem;
  margin: 5px 0;
  color: #4d6e70; 
}

.item-footer {
  display: flex;
  justify-content: space-between;
  align-items: center; 
  margin-top: 10px;
}

.btn {
  border: none;
  border-radius: 5px; 
  width: 50px; 
  height: 50px; 
  cursor: pointer;
  transition: background-color 0.2s, transform 0.3s; 
  display: flex;
  align-items: center;
  justify-content: center; 
}

.btn-favorite {
  background-color: transparent; 
  font-size: 140%;
}

.btn-favorite:hover {
  transform: scale(2.1); 
}

.btn-info {
  background-color: transparent; 
  color: #f77a05; 
  font-size: 1.5rem; 
  width: 50px; 
  height: 50px; 
  border: none; 
}

.btn-info:hover {
  transform: scale(1.2); 
  color: #40caca; 
}
</style>
