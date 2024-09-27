<script setup>
import { ref } from 'vue';
import axios from 'axios';

const email = ref('');
const password = ref('');

const handleLogin = async () => {
  try {
    // Depuración: Imprimir los datos de login antes de enviarlos
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
    withCredentials: true, // Permitir el envío de cookies con la solicitud
  }
);

    alert('Inicio de sesión exitoso!');
    // Aquí puedes manejar el token recibido o el estado de autenticación
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
      <h2 class="title mb-4">Inicia tu Trueque</h2>
      <form @submit.prevent="handleLogin">
        <div class="mb-3">
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
        <div class="mb-3">
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
        <button type="submit" class="btn btn-gradient w-100">Iniciar Sesión</button>
      </form>
      <p class="text-center mt-3">¿No tienes una cuenta? <router-link to="/registre" class="text-primary">Regístrate aquí</router-link></p>
    </div>
  </div>
</template>

<style scoped>
/* Estilos permanecen iguales */
</style>
