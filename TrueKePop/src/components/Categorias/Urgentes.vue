<template>
  <div class="list-container">
    <h3 class="section-title">Los truekes más urgentes.</h3>
    <div class="list-group">
      <div 
        class="list-group-item neon-effect" 
        v-for="(item, index) in truekes" 
        :key="item.id"
        @click="showDetails(item)"
      >
        <div class="list-item-content">
          <div class="image-container">
            <img 
              :src="item.image" 
              class="list-item-image" 
              :alt="item.name" 
              @error="handleImageError"  
            />
          </div>
          <div class="item-info">
            <h5 class="item-title">{{ item.name }}</h5>
            <p class="item-location"><i class="fas fa-map-marker-alt"></i> {{ item.location }}</p>
            <p class="item-description">{{ item.description }}</p>
            <p class="item-owner">{{ item.ownerName }}</p>
          </div>
        </div>
        <div class="item-footer">
          <div class="like-container">
            <button class="btn btn-favorite" @click.stop="likeItem(item)">
              <span class="thumbs-up-icon">👍</span>
            </button>
          </div>
          <button class="btn btn-info" @click.stop="openMessagePopup(item)">
            ✉️
          </button>
        </div>
      </div>
    </div>
    <MessagePopup v-if="isPopupOpen" :currentItem="currentItem" @close="closeMessagePopup" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import MessagePopup from '../common/MessagePopup.vue';

const truekes = ref([]);
const currentItem = ref(null); 
const isPopupOpen = ref(false); 

const fetchNovedades = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/trueke/urgente'); 
    truekes.value = response.data.map(item => ({
      ...item,
      ownerName: item.ownerName 
    }));
    console.log(truekes.value); // Para verificar los datos
  } catch (error) {
    console.error('Error al cargar los truekes:', error);
  }
};

const handleImageError = (event) => {
  // Ruta a una imagen predeterminada si ocurre un error al cargar la imagen original
  event.target.src = 'https://via.placeholder.com/400x200?text=Imagen+No+Disponible';
};

const showDetails = (item) => {
  currentItem.value = item; 
};

const likeItem = (item) => {
  console.log('Liked item:', item);
};

const openMessagePopup = (item) => {
  currentItem.value = item; 
  isPopupOpen.value = true; 
};

const closeMessagePopup = () => {
  isPopupOpen.value = false; 
};

onMounted(() => {
  fetchNovedades();
});
</script>

<style scoped>
.list-container {
  padding: 20px;
  background-color: #ffffff; 
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); 
}

.section-title {
  font-size: 1.5rem;
  margin-bottom: 40px;
  font-weight: bold;
  color: #40caca; 
  font-family:unset
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

.item-owner {
  font-size: 0.8rem; 
  color: #18b2c7; 
  margin-top: 5px; 
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
  font-size: 1.8rem; 
  width: 50px; 
  height: 50px; 
  cursor: pointer; 
}

.btn-info:hover {
  transform: scale(1.6); 
  color: #40caca; 
}
</style>
