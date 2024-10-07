<template>
  <div v-if="show" class="modal-overlay">
    <div class="modal-content">
      <span class="close" @click="close">×</span>
      <h2>Editar Trueke</h2>
      <form @submit.prevent="updateTrueke">
        <div class="form-group">
          <label for="name">Nombre</label>
          <input type="text" id="name" v-model="trueke.name" required />
        </div>
        <div class="form-group">
          <label for="description">Descripción</label>
          <textarea id="description" v-model="trueke.description" required></textarea>
        </div>
        <div class="form-group">
          <label for="location">Ubicación</label>
          <input type="text" id="location" v-model="trueke.location" required />
        </div>
        <div class="form-group">
          <label for="desiredItem">Artículo Deseado</label>
          <input type="text" id="desiredItem" v-model="trueke.desiredItem" required />
        </div>
        <div class="form-group">
          <label for="type">Tipo</label>
          <input type="text" id="type" v-model="trueke.type" required />
        </div>
        <div class="form-group">
          <label for="likes">Likes</label>
          <input type="number" id="likes" v-model="trueke.likes" required />
        </div>
        <button type="submit" class="btn-update">Actualizar Trueke</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  show: Boolean,
  trueke: Object,
});

const emit = defineEmits(['close', 'update']);

const trueke = ref({ ...props.trueke });

watch(() => props.trueke, (newTrueke) => {
  trueke.value = { ...newTrueke };
});

const updateTrueke = () => {
  emit('update', { ...trueke.value });
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
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  width: 300px; /* Ancho fijo para simplicidad */
  max-width: 90%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.close {
  float: right;
  font-size: 20px;
  cursor: pointer;
}

h2 {
  margin: 0 0 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input, textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

textarea {
  resize: vertical;
}

.btn-update {
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
}

.btn-update:hover {
  background-color: #0056b3;
}
</style>
