<script setup>
import { ref, onMounted } from 'vue';
import CardCategoria from '@/components/common/CardCategorias.vue'; 


const favoritos = ref([]);


</script>

<template>
  <div class="favoritos-container">
    <h2>Mis Truekes Favoritos</h2>
    <div v-if="favoritos.length">
      <div v-for="favorito in favoritos" :key="favorito.id" class="favorito-item">
        
        <CardCategoria :titulo="favorito.titulo" :descripcion="favorito.descripcion" :imagen="favorito.imagen" />
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
