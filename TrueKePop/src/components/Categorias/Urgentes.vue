<template>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-4 mb-4 d-flex align-items-stretch" v-for="(item, index) in truekes" :key="item.id">
          <CardCategorias :item="item" /> <!-- Asegúrate de pasar los datos correctos al componente de tarjeta -->
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import CardCategorias from '../common/CardCategorias.vue'; // Importa tu componente de tarjeta
  
  const truekes = ref([]);
  
  const fetchTruekes = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/truekes/category/1'); // ID de categoría para "Urgentes"
      truekes.value = response.data;
    } catch (error) {
      console.error('Error al cargar los truekes:', error.response ? error.response.data : error.message);
    }
  };
  
  onMounted(() => {
    fetchTruekes();
  });
  </script>
  
  <style scoped>
  .container {
    padding-top: 20px;
  }
  
  .row {
    justify-content: flex-start; /* Alinea las tarjetas al principio */
  }
  
  .col-md-4 {
    display: flex;
    justify-content: center;
  }
  
  .card {
    flex: 1; /* Permite que las tarjetas ocupen el espacio disponible */
    max-width: 300px;
  }
  
  .card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  </style>
  