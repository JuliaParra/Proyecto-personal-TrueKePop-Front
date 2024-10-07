<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const username = ref(''); 
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const router = useRouter();

const handleRegister = async () => {
  if (password.value !== confirmPassword.value) {
    alert('Las contraseñas no coinciden.');
    return;
  }

  try {
    const response = await axios.post('http://localhost:8080/api/register', {
  username: username.value,
  email: email.value,
  password: password.value,
  confirmPassword: confirmPassword.value,
}, {
  headers: {
    'Content-Type': 'application/json',
  },
});
    alert(response.data);

  
    router.push('/login');
  } catch (error) {
    if (error.response) {
      alert('Error en el registro: ' + (error.response.data.message || error.response.data));
    } else {
      alert('Error: ' + error.message);
    }
  }
};
</script>

<template>
  <div class="register-page d-flex justify-content-center align-items-center">
    <div class="register-card shadow-lg animate__animated animate__fadeIn"> 
      <h2 class="title mb-3"><strong>¡Únete al cambio!</strong></h2>
      <form @submit.prevent="handleRegister" class="d-flex flex-column justify-content-between">
        <div class="mb-2">
          <label for="username" class="form-label">Nombre de Usuario</label>
          <input
            type="text"
            id="username"
            v-model="username" 
            required
            class="form-control"
            placeholder="Ingrese su nombre de usuario"
          />
        </div>
        <div class="mb-2">
          <label for="email" class="form-label">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            class="form-control"
            placeholder="Ingrese su correo electrónico"
          />
        </div>
        <div class="mb-2">
          <label for="password" class="form-label">Contraseña</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            class="form-control"
            placeholder="Ingrese su contraseña"
          />
        </div>
        <div class="mb-2">
          <label for="confirmPassword" class="form-label">Confirmar Contraseña</label>
          <input
            type="password"
            id="confirmPassword"
            v-model="confirmPassword"
            required
            class="form-control"
            placeholder="Confirme su contraseña"
          />
        </div>
        <button type="submit" class="btn btn-gradient w-100 mt-2">¡Registrarse!</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden; 
}

.register-page {
  height: 83.8vh; 
  background: linear-gradient(135deg, #FF7A4A, rgb(34, 207, 207));
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
}

.register-card {
  background: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  max-width: 450px;
  width: 100%;
  height: auto;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  opacity: 0;
  animation: fadeIn 1.5s ease-in-out forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.title {
  font-family: 'Montserrat', sans-serif;
  color: #ff862a;
  font-weight: 700;
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 5px;
}

.form-label {
  font-family: 'Montserrat', sans-serif;
  color: #4ecfe9;
  font-size: 0.9rem;
}

.form-control {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 8px;
  font-size: 0.9rem;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.form-control:focus {
  border-color: #e99c4e;
  box-shadow: 0 0 8px rgba(255, 180, 88, 0.5);
}

.btn-gradient {
  background: linear-gradient(135deg, #FF7A4A, #4ecfe9);
  color: white;
  border: none;
  padding: 10px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: bold;
  transition: background 0.3s ease;
}

.btn-gradient:hover {
  background: linear-gradient(135deg, #4ecfe9, #FF7A4A);
}
</style>