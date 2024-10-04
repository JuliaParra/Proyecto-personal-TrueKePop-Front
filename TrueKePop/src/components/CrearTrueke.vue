<!-- CrearTrueke.vue -->
<template>
    <div v-if="isVisible" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <button class="close-button" @click="closeModal">✖</button>
        <h3>Subir Trueke</h3>
        <form @submit.prevent="submitTrueke">
          <input v-model="truekeData.name" placeholder="Nombre del Trueke" required />
          <input v-model="truekeData.description" placeholder="Descripción" required />
          <input v-model="truekeData.image" placeholder="URL de la Imagen" required />
          <input v-model="truekeData.location" placeholder="Ubicación" required />
          <input v-model="truekeData.desired_item" placeholder="Busco" required />
          <button type="submit">Subir</button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps(['isVisible']);
  const emit = defineEmits(['close']);
  
  const truekeData = ref({
    name: '',
    description: '',
    image: '',
    location: '',
    desired_item: ''
  });
  
  const closeModal = () => {
    emit('close');
  };
  
  const submitTrueke = () => {
    
    closeModal(); 
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    animation: fadeIn 0.3s ease;
  }
  
  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 10px;
    width: 400px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    animation: slideIn 0.3s ease;
  }
  
  .close-button {
    background: transparent;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @keyframes slideIn {
    from {
      transform: translateY(-20px);
    }
    to {
      transform: translateY(0);
    }
  }
  </style>
  