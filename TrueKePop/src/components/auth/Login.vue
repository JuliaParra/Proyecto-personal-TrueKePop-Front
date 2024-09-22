<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');

const handleLogin = () => {
  alert('Inicio de sesión exitoso!');
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

@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';

.login-page {
  height: 83.8vh;
  background: linear-gradient(135deg, #4ecfe9, #FF7A4A);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  overflow: hidden; 
}

.login-card {
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  max-width: 480px;
  width: 100%;
  border: none;
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
  color: #4ecfe9;
  font-weight: 700;
  text-align: center;
}

.form-label {
  font-family: 'Montserrat', sans-serif;
  color: #FF7A4A;
}

.form-control {
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 12px;
  font-size: 14px;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s ease, box-shadow 0.3s ease; 
}


.form-control:focus {
  border-color: #4ecfe9;
  box-shadow: 0 0 8px rgba(78, 207, 233, 0.5);
}

.btn-gradient {
  background: linear-gradient(135deg, #FF7A4A, #4ecfe9);
  color: white;
  border: none;
  padding: 12px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  transition: background 0.3s ease;
}

.btn-gradient:hover {
  background: linear-gradient(135deg, #4ecfe9, #FF7A4A);
}

.text-primary {
  color: #4ecfe9;
  font-weight: bold;
  text-decoration: none;
}

.text-primary:hover {
  color: #FF7A4A;
  text-decoration: underline;
}
</style>
