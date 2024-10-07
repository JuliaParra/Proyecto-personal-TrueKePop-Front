<template>
  <div class="form-container">
    <form class="compact-form" @submit.prevent="submitForm">
      <button type="button" class="close-btn" @click="goToUserView">✖</button>
      <h2 class="form-title">Nuevo Trueke</h2>

      <div class="form-group">
        <input type="text" v-model="truekeData.name" placeholder="Nombre del Objeto" required />
      </div>

      <div class="form-group">
        <input type="text" v-model="truekeData.desiredItem" placeholder="Motivo del Intercambio" required />
      </div>

      <div class="form-group">
        <input type="text" v-model="truekeData.type" placeholder="Tipo" required />
      </div>

      <div class="form-group">
        <textarea v-model="truekeData.description" placeholder="Descripción del Objeto" required></textarea>
      </div>

      <div class="form-group">
        <input type="text" v-model="truekeData.location" placeholder="Ubicación" required />
      </div>

      <div class="form-group">
        <select v-model="truekeData.categoryId" required>
          <option value="" disabled selected>Categoría</option>
          <option value="1">Urgente</option>
          <option value="2">Directo</option>
          <option value="3">Escucho Ofertas</option>
          <option value="4">Novedades</option>
        </select>
      </div>

      <div class="form-group">
        <label class="file-label">Subir Imagen</label>
        <input type="file" @change="handleImageUpload" accept="image/*" required />
      </div>

      <button type="submit" class="submit-btn">Crear Trueke</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router'; 
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

const router = useRouter();

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file && file.type.startsWith('image/')) {
    truekeData.value.image = file;
  } else {
    alert('Por favor, selecciona un archivo de imagen válido.');
  }
};

const goToUserView = () => {
  router.push('/user'); 
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

    goToUserView(); 
  } catch (error) {
    console.error('Error al crear el trueke:', error.response ? error.response.data : error.message);
    alert('Hubo un problema al crear el trueke.');
  }
};

// Evitar scroll de fondo mientras el formulario está abierto
onMounted(() => {
  document.body.style.overflow = 'hidden';
});

onUnmounted(() => {
  document.body.style.overflow = '';
});
</script>

<style scoped>
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #0ad0f3, #f6e9d0);
  padding: 20px;
  z-index: 1000; /* Asegurarse de que el formulario esté en la parte superior */
}

.compact-form {
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: relative;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #888;
  cursor: pointer;
  transition: color 0.3s;
}

.close-btn:hover {
  color: #ff5c5c;
}

.form-title {
  text-align: center;
  font-size: 1.5rem;
  color: #007bff;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

input,
textarea,
select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f8f9fa;
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.3s;
}

input:focus,
textarea:focus,
select:focus {
  border-color: #007bff;
}

.file-label {
  display: block;
  margin-bottom: 5px;
  font-size: 0.9rem;
  color: #666;
}

.submit-btn {
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, #007bff, #00c6ff);
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
}

.submit-btn:hover {
  background: linear-gradient(135deg, #0056b3, #0084c4);
  transform: translateY(-3px);
}
</style>
