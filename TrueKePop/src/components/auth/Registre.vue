<script setup>
import { ref } from 'vue';

const email = ref('');
const confirmEmail = ref('');
const password = ref('');
const confirmPassword = ref('');

const handleRegister = () => {
  if (email.value !== confirmEmail.value) {
    alert('Los correos electrónicos no coinciden.');
    return;
  }
  if (password.value !== confirmPassword.value) {
    alert('Las contraseñas no coinciden.');
    return;
  }
  
  alert('Registro exitoso!');
};
</script>

<template>
  <div class="register-page d-flex justify-content-center align-items-center">
    <div class="register-card shadow-lg animate__animated animate__fadeIn"> 
      <h2 class="title mb-3">¡Únete al cambio!</h2>
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
          <label for="confirmEmail" class="form-label">Confirmar Correo Electrónico</label>
          <input
            type="email"
            id="confirmEmail"
            v-model="confirmEmail"
            required
            class="form-control"
            placeholder="Confirme su correo electrónico"
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

@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden; 
}

.register-page {
  height: 83.8vh; 
  background: linear-gradient(135deg, #4ecfe9, #FF7A4A);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
}

.register-card {
  background: white;
  padding: 15px; 
  border-radius: 15px; 
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1); 
  max-width: 350px; 
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
  color: #ff9f2a;
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
