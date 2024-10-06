<template>
  <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true" v-if="trueke">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalLabel">{{ trueke.name }}</h5>
          <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <img :src="trueke.image" class="img-fluid" alt="Imagen del Trueke" />
          <p><strong>Descripción:</strong> {{ trueke.description }}</p>
          <p><strong>Busco:</strong> {{ trueke.desiredItem }}</p>
          <p><strong>Ubicación:</strong> {{ trueke.location }}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="closeModal">Cerrar</button>
          <button type="button" class="btn btn-primary">
            <i class="fas fa-comment"></i> Mensaje
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  trueke: Object
});

const emit = defineEmits(['close']);

const closeModal = () => {
  emit('close'); // Emitir evento para notificar al componente padre
};
</script>

<style scoped>
.modal-body {
  text-align: left;
}

.img-fluid {
  margin-bottom: 15px; /* Espacio inferior para la imagen */
}
</style>
