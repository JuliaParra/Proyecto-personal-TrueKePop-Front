 <script setup>
import { ref } from 'vue';

const novedades = ref([
  { 
    name: 'Bicicleta Vintage', 
    description: 'Cambio bicicleta vintage por monopatín', 
    image: '/src/assets/images/caravana.jpg', 
    userName: 'Carlos Martínez', 
    userAvatar: '/path/to/avatar1.jpg', 
    date: 'Hace 2 horas', 
    likes: 25, 
    type: 'trueke' 
  },
  { 
    name: 'Cámara DSLR', 
    description: 'Cambio cámara DSLR por equipo de fotografía', 
    image: '/src/assets/images/caravana.jpg', 
    userName: 'Ana López', 
    userAvatar: '/path/to/avatar2.jpg', 
    date: 'Hace 1 día', 
    likes: 40, 
    type: 'oferta' 
  },

  { 
    name: 'Cámara DSLR', 
    description: 'Cambio cámara DSLR por equipo de fotografía', 
    image: '/src/assets/images/caravana.jpg', 
    userName: 'Ana López', 
    userAvatar: '/path/to/avatar2.jpg', 
    date: 'Hace 1 día', 
    likes: 40, 
    type: 'oferta' 
  },

  { 
    name: 'Cámara DSLR', 
    description: 'Cambio cámara DSLR por equipo de fotografía', 
    image: '/src/assets/images/caravana.jpg', 
    userName: 'Ana López', 
    userAvatar: '/path/to/avatar2.jpg', 
    date: 'Hace 1 día', 
    likes: 40, 
    type: 'oferta' 
  },
]);

const likeItem = (item) => {
  item.likes += 1;
};

const commentItem = (item) => {
  alert(`Deja un comentario sobre: ${item.name}`);
};
</script>

<template>
  <div class="container mt-5">
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div v-for="(item, index) in novedades" :key="index" class="col">
        <div class="card h-100">
          <div class="card-header d-flex align-items-center  text-orange">
            <img :src="item.userAvatar" alt="Avatar del usuario" class="rounded-circle me-3 avatar">
            <div>
              <h5 class="mb-0">{{ item.userName }}</h5>
              <small class="text-light">{{ item.date }}</small>
            </div>
          </div>
          <img :src="item.image" class="card-img-top img-fluid" :alt="item.name">
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text">{{ item.description }}</p>
          </div>
          <div class="card-footer d-flex justify-content-between">
            <button @click="likeItem(item)" class="btn btn-outline-danger">
              <i class="fa fa-heart"></i> {{ item.likes }} ❤️
            </button>
            <button @click="commentItem(item)" class="btn btn-outline-info">
              <i class="fa fa-comment"></i> + info
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}


.card-img-top {
  height: 200px;
  object-fit: cover;
}
</style> -->
 -->


