<template>
  <div v-if="show" class="modal-overlay">
    <div class="modal-content">
      <h2>Editar Trueke</h2>
      <form @submit.prevent="updateTrueke">
        <div class="form-group">
          <label>Nombre</label>
          <input v-model="localTrueke.name" class="form-input" />
        </div>
        <div class="form-group">
          <label>Descripción</label>
          <textarea v-model="localTrueke.description" class="form-input"></textarea>
        </div>
        <button type="submit" class="btn-update">Actualizar Trueke</button>
      </form>
      <button @click="close" class="btn-close">Cerrar</button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import axios from 'axios';

// Configurar la URL base del backend
axios.defaults.baseURL = 'http://localhost:8080';

const props = defineProps({
  show: Boolean,
  trueke: Object,
});

const emit = defineEmits(['close', 'update']);
const localTrueke = ref({ ...props.trueke });

watch(
  () => props.trueke,
  (newTrueke) => {
    localTrueke.value = { ...newTrueke };
    console.log('Modal: Trueke actualizado:', localTrueke.value);
  },
  { immediate: true }
);

const updateTrueke = async () => {
  try {
    // Depuración: Verificar los valores que se van a enviar
    console.log('Datos del trueke a actualizar:', {
      name: localTrueke.value.name,
      description: localTrueke.value.description,
      location: localTrueke.value.location,
      desiredItem: localTrueke.value.desiredItem,
      type: localTrueke.value.type,
      categoryId: localTrueke.value.categoryId,
      image: localTrueke.value.image,
    });

    // Construir el objeto JSON para enviar
    const truekeData = {
      name: localTrueke.value.name,
      description: localTrueke.value.description,
      location: localTrueke.value.location,
      desiredItem: localTrueke.value.desiredItem,
      type: localTrueke.value.type,
      categoryId: localTrueke.value.categoryId,
      image: localTrueke.value.image || '', // Asumimos que la imagen puede ser una URL o un archivo vacío
    };

    // Solicitud PUT al backend
    const response = await axios.put(`/api/trueke/${localTrueke.value.id}`, truekeData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('Trueke actualizado con éxito:', response.data);
    emit('update', { ...localTrueke.value });
  } catch (error) {
    console.error('Error al actualizar el trueke:', error);
    if (error.response) {
      console.error('Detalles del error:', error.response.data);
    }
  }
};

const close = () => {
  emit('close');
};
</script>

<style scoped>
/* Estilos básicos para el modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
}

h2 {
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

.form-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.btn-update {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 15px;
}

.btn-update:hover {
  background-color: #0056b3;
}

.btn-close {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
}

.btn-close:hover {
  background-color: #cc0000;
}
</style>
