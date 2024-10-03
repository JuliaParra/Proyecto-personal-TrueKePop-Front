<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api'; 

const novedades = ref([]);

const fetchNovedades = async () => {
  try {
    const response = await axios.get('/truekes'); 
    novedades.value = response.data;
  } catch (error) {
    console.error('Error al cargar los truekes:', error.response ? error.response.data : error.message);
  }
};

onMounted(() => {
  fetchNovedades();
});

const likeItem = async (item) => {
  try {
    await axios.post(`/truekes/${item.id}/favorite`); 
    item.likes += 1; 
  } catch (error) {
    console.error('Error al agregar a favoritos:', error.response ? error.response.data : error.message);
  }
};

const commentItem = (item) => {
  alert(`Deja un comentario sobre: ${item.name}`);
};
</script>


<template>
  <div class="container-fluid mt-5 px-5">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
      <div v-for="(item, index) in novedades" :key="item.id" class="col">
        <div class="card h-100 shadow-sm">
          <div class="card-header d-flex align-items-center bg-transparent">
            <img :src="item.userAvatar" alt="Avatar del usuario" class="rounded-circle me-3 avatar">
            <div>
              <h5 class="mb-0">{{ item.userName }}</h5>
              <small class="text-muted">{{ item.date }} • {{ item.location }}</small>
            </div>
          </div>
          <img :src="item.image" class="card-img-top img-fluid" :alt="item.name">
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text">{{ item.description }}</p>
            <div v-if="item.type === 'trueke'" class="additional-info">
              <strong>Intercambio:</strong> {{ item.desiredItem }}
            </div>
            <div v-else-if="item.type === 'oferta'" class="additional-info">
              <strong>Buscando ofertas:</strong> {{ item.desiredItem }}
            </div>
          </div>
          <div class="card-footer d-flex justify-content-between bg-transparent">
            <button @click="likeItem(item)" class="btn btn-like d-flex align-items-center">
              <i class="fa fa-heart me-2"></i> {{ item.likes }} ❤️
            </button>
            <button @click="commentItem(item)" class="btn btn-comment d-flex align-items-center">
              <i class="fa fa-comment me-2"></i> + info
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>


.card-img-top {
  height: 150px;
  object-fit: cover;
}

.avatar {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border: 2px solid #4cafa0;
}

.card {
  border: none;
  border-radius: 25px;
  overflow: hidden;
  background-color: #ff910006;
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.15);
}

.card-header {
  padding: 15px;
}

.card-title {
  font-size: 1.25rem;
  color: rgb(34, 207, 207);
  margin-bottom: 5px;
}

.card-text {
  color: #757575;
  margin-bottom: 5px;
}

.additional-info {
  background-color: #2affff2b;
  padding: 10px;
  border-radius: 15px;
  width: 100%;
  color: #0e0e0d;
}

.card-footer {
  padding: 15px;
}

.btn-like {
  background-color: var(--color-fondo);
  color: var(--color-btn-like);
  border: 2px solid rgb(34, 207, 207);
  border-radius: 50px;
  padding: 8px 16px;
  transition: background-color 0.3s, color 0.3s;
}

.btn-like:hover {
  background-color: #fb7d074f;
}

.btn-comment {
  background-color: var(--color-fondo);
  color: var(--color-btn-comment);
  border: 2px solid var(--color-btn-comment);
  border-radius: 50px;
  padding: 8px 16px;
  transition: background-color 0.3s, color 0.3s;
}

.btn-comment:hover {
  background-color: var(--color-btn-comment);
  color: #fff;
}

@media (max-width: 768px) {
  .avatar {
    width: 40px;
    height: 40px;
  }
  
  .card-title {
    font-size: 1rem;
  }
}
</style>
