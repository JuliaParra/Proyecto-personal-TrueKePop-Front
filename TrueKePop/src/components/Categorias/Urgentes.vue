<template>
  <div>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-4 mb-4 d-flex align-items-stretch" v-for="(item, index) in truekes" :key="item.id">
          <CardCategorias v-if="item" :item="item" @show-details="useModal.showModal(item)" />
        </div>
      </div>
    </div>
    <Modal v-if="useModal.showModal" :trueke="useModal.trueke" @close="useModal.closeModal" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import CardCategorias from '../common/CardCategorias.vue';
import Modal from '../modal.vue';
import useModal from '../modal.vue'; // Importa tu composable

const truekes = ref([]);

// Función para obtener los truekes de novedades del backend
const fetchNovedades = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/trueke/urgente');
    truekes.value = response.data; // Asignar los truekes a la variable 'truekes'
  } catch (error) {
    console.error('Error al cargar los truekes de novedades:', error.response ? error.response.data : error.message);
    truekes.value = []; // Asegúrate de que siempre tenga un valor definido
  }
};

// Llama a la función para cargar los truekes al montar el componente
onMounted(() => {
  fetchNovedades();
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
