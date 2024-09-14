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
    <div class="register-card shadow-lg">
      <h2 class="title mb-4">¡Únete al cambio!</h2>
      <form @submit.prevent="handleRegister">
        <div class="mb-3">
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
        <div class="mb-3">
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
        <button type="submit" class="btn btn-gradient w-100">¡Registrarse!</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

.register-page {
  height: 100vh;
  background: linear-gradient(135deg, #4ecfe9, #FF7A4A);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
}

.register-card {
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  max-width: 480px;
  width: 100%;
  border: none;
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

</style>
