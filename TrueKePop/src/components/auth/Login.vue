<script setup>
import { ref } from 'vue';
import axios from 'axios';

const email = ref('');
const password = ref('');

const handleLogin = async () => {
  try {
    console.log('Datos para login:', { email: email.value, password: password.value });

    const response = await axios.post(
      'http://localhost:8080/api/login',
      {
        email: email.value,
        password: password.value,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );

    alert('Inicio de sesión exitoso!');
    console.log('Respuesta del servidor:', response.data);
  } catch (error) {
    if (error.response) {
      console.error('Error en la respuesta del servidor:', error.response);
      alert('Error en el inicio de sesión: ' + (error.response.data.message || error.response.data));
    } else if (error.request) {
      console.error('No se recibió respuesta del servidor:', error.request);
      alert('No se recibió respuesta del servidor.');
    } else {
      console.error('Error al configurar la solicitud:', error.message);
      alert('Error: ' + error.message);
    }
  }
};
</script>

<template>
  <div class="login-page d-flex justify-content-center align-items-center">
    <div class="login-card shadow-lg animate__animated animate__fadeIn"> 
      <h2 class="title mb-3"><strong>Inicia tu Trueque</strong></h2>
      <form @submit.prevent="handleLogin">
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
        <button type="submit" class="btn btn-gradient w-100 mt-2">Iniciar Sesión</button>
      </form>
      <p class="text-center mt-3">¿No tienes una cuenta? <router-link to="/registre" class="text-primary">Regístrate aquí</router-link></p>
    </div>
  </div>
</template>

<style scoped>
/* Estilos compartidos con la página de registro */
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.login-page {
  height: 83.8vh;
  background: linear-gradient(135deg, rgb(34, 207, 207), #ff5e24);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 10px;
}

.login-card {
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
  color: rgb(34, 207, 207);
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
