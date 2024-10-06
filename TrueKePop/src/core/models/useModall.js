<template>
  <div class="modal fade" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true" ref="modalRef">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalLabel">{{ trueke.name }}</h5>
          <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <img :src="trueke.image" class="img-fluid" :alt="trueke.name" />
          <p><strong>Descripción:</strong> {{ trueke.description }}</p>
          <p><strong>Busco:</strong> {{ trueke.desiredItem }}</p>
          <p><strong>Ubicación:</strong> {{ trueke.location }}</p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" @click="closeModal">Cerrar</button>
          <button class="btn btn-primary" @click="sendMessage">Enviar mensaje</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
  trueke: Object,
});

const closeModal = () => {
  const modal = new bootstrap.Modal(document.querySelector('.modal'));
  modal.hide();
};

const sendMessage = () => {
  alert(`Mensaje enviado sobre: ${props.trueke.name}`);
};
</script>

<style scoped>
.modal-body img {
  max-height: 300px; /* Ajusta la altura máxima de la imagen en el modal */
  object-fit: cover;
}
</style>
