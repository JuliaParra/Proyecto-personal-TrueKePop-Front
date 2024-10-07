<template>
  <div v-if="show" class="modal-overlay">
    <div class="modal-content">
      <h2 class="modal-title">Editar Trueke</h2>
      <form @submit.prevent="updateTrueke">
        <div class="form-group">
          <label>Nombre</label>
          <input v-model="localTrueke.name" class="form-input" required />
        </div>
        <div class="form-group">
          <label>Descripción</label>
          <textarea v-model="localTrueke.description" class="form-input" required></textarea>
        </div>
        <div class="form-group">
          <label>Imagen URL</label>
          <input v-model="localTrueke.image" class="form-input" />
        </div>
        <div class="form-group">
          <label>Ubicación</label>
          <input v-model="localTrueke.location" class="form-input" required />
        </div>
        <div class="form-group">
          <label>Artículo Deseado</label>
          <input v-model="localTrueke.desiredItem" class="form-input" required />
        </div>
        <div class="form-group">
          <label>Tipo</label>
          <input v-model="localTrueke.type" class="form-input" required />
        </div>
        <div class="form-group">
          <label>Likes</label>
          <input v-model="localTrueke.likes" type="number" class="form-input" />
        </div>
        <div class="form-group">
          <label>Nombre del Propietario</label>
          <input v-model="localTrueke.ownerName" class="form-input" required />
        </div>
        <div class="form-group">
          <label>Categoría</label>
          <input v-model="localTrueke.categoria" class="form-input" required />
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
  },
  { immediate: true }
);

const updateTrueke = async () => {
  try {
    const truekeData = {
      name: localTrueke.value.name,
      description: localTrueke.value.description,
      image: localTrueke.value.image,
      location: localTrueke.value.location,
      desiredItem: localTrueke.value.desiredItem,
      type: localTrueke.value.type,
      likes: localTrueke.value.likes || 0,
      ownerName: localTrueke.value.ownerName,
      categoria: localTrueke.value.categoria,
    };

    await axios.put(`/api/trueke/${localTrueke.value.id}`, truekeData);
    emit('update', { ...localTrueke.value });
  } catch (error) {
    console.error('Error al actualizar el trueke:', error);
  }
};

const close = () => {
  emit('close');
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
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: #ffffff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  max-width: 350px;
  width: 90%;
}

.modal-title {
  margin-bottom: 10px;
  text-align: center;
  color: #333;
  font-size: 1.2em;
}

.form-group {
  margin-bottom: 10px;
}

.form-input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

.btn-update, .btn-close {
  display: block;
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
}

.btn-update {
  background-color: #007bff;
  color: white;
}

.btn-update:hover {
  background-color: #0056b3;
}

.btn-close {
  background-color: #dc3545;
  color: white;
}

.btn-close:hover {
  background-color: #c82333;
}
</style>
