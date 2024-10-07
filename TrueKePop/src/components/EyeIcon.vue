<template>
    <button class="btn-eye" @click="openPopup">
      <i class="fas fa-eye"></i>
    </button>
</template>

<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['open-popup']); 

const openPopup = () => {
    emit('open-popup'); 
};
</script>

<style scoped>
.btn-eye {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.5rem; 
    transition: transform 0.2s;
}

.btn-eye:hover {
    transform: scale(1.1); 
}
</style>
