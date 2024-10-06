<template>
    <button class="btn-eye" @click="openPopup">
      <i class="fas fa-eye"></i>
    </button>
</template>

<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['open-popup']); // Emitir evento para abrir el popup

const openPopup = () => {
    emit('open-popup'); // Emitir el evento
};
</script>

<style scoped>
.btn-eye {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.5rem; /* Tamaño del icono */
    transition: transform 0.2s;
}

.btn-eye:hover {
    transform: scale(1.1); /* Efecto al pasar el mouse */
}
</style>
