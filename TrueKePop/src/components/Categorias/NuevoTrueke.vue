<template>
  <div class="form-container">
    <!-- Formulario centrado -->
    <form class="blurred-form" @submit.prevent="submitForm">
      <!-- Campo para el nombre del objeto -->
      <div class="form-group">
        <label for="name">Nombre del Objeto:</label>
        <input type="text" id="name" v-model="truekeData.name" required />
      </div>

      <!-- Campo para el motivo del intercambio -->
      <div class="form-group">
        <label for="desiredItem">Motivo del Intercambio:</label>
        <input type="text" id="desiredItem" v-model="truekeData.desiredItem" required />
      </div>

      <!-- Campo para seleccionar el tipo -->
      <div class="form-group">
        <label for="type">Tipo:</label>
        <input type="text" id="type" v-model="truekeData.type" required />
      </div>

      <!-- Campo para la descripción -->
      <div class="form-group">
        <label for="description">Descripción del Objeto:</label>
        <textarea id="description" v-model="truekeData.description" required></textarea>
      </div>

      <!-- Campo para la ubicación -->
      <div class="form-group">
        <label for="location">Ubicación:</label>
        <input type="text" id="location" v-model="truekeData.location" required />
      </div>

      <!-- Campo para seleccionar la categoría -->
      <div class="form-group">
        <label for="category">Categoría:</label>
        <select id="category" v-model="truekeData.categoryId" required>
          <option value="1">Urgente</option>
          <option value="2">Directo</option>
          <option value="3">Escucho Ofertas</option>
          <option value="4">Novedades</option>
        </select>
      </div>

      <!-- Campo para subir la imagen -->
      <div class="form-group">
        <label for="image">Subir Imagen:</label>
        <input type="file" id="image" @change="handleImageUpload" accept="image/*" required />
      </div>

      <button type="submit" class="submit-btn">Crear Trueke</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const truekeData = ref({
  name: '',
  description: '',
  location: '',
  desiredItem: '',
  type: '',
  categoryId: null,
  image: null,
});

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file && file.type.startsWith('image/')) {
    truekeData.value.image = file;
  } else {
    alert('Por favor, selecciona un archivo de imagen válido.');
  }
};

const submitForm = async () => {
  try {
    const formData = new FormData();
    formData.append('name', truekeData.value.name);
    formData.append('description', truekeData.value.description);
    formData.append('location', truekeData.value.location);
    formData.append('desiredItem', truekeData.value.desiredItem);
    formData.append('type', truekeData.value.type);
    formData.append('categoryId', truekeData.value.categoryId);
    formData.append('image', truekeData.value.image);

    await axios.post('http://localhost:8080/api/trueke', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    alert('Trueke creado con éxito!');
    truekeData.value = {
      name: '',
      description: '',
      location: '',
      desiredItem: '',
      type: '',
      categoryId: null,
      image: null,
    };
  } catch (error) {
    console.error('Error al crear el trueke:', error);
    alert('Hubo un problema al crear el trueke.');
  }
};
</script>

<style scoped>
/* Fondo desenfocado */
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #e0e0e0, #ffffff); /* Fondo degradado */
  backdrop-filter: blur(5px); /* Efecto desenfoque */
}

/* Formulario centrado y elegante */
.blurred-form {
  width: 90%;
  max-width: 600px;
  padding: 30px;
  background: rgba(255, 255, 255, 0.8); /* Fondo semitransparente */
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Sombra para dar efecto de "popup" */
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #333;
}

input,
textarea,
select {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 2px solid #007bff;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.9); /* Fondo más opaco */
  transition: all 0.3s ease;
}

input:focus,
textarea:focus,
select:focus {
  border-color: #ff7a4a;
  box-shadow: 0 0 8px rgba(255, 122, 74, 0.5);
}

button.submit-btn {
  padding: 15px 30px;
  background: linear-gradient(135deg, #007bff, #ff7a4a);
  color: #ffffff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  transition: transform 0.3s, box-shadow 0.3s;
}

button.submit-btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}
</style>
