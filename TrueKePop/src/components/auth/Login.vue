<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();

const loginEmail = ref('');
const loginPassword = ref('');
const formErrorMessage = ref('');
const authErrorMessage = ref('');


const clearForm = () => {
  loginEmail.value = '';
  loginPassword.value = '';
  formErrorMessage.value = '';
  authErrorMessage.value = '';
};


const submitLogin = async () => {
   
    if (!loginEmail.value || !loginPassword.value) {
        formErrorMessage.value = 'Por favor, rellena todos los campos para continuar.';
        return;
    }

    try {
        
        const response = await axios.post('http://localhost:8080/api/login', {
            email: loginEmail.value,
            password: loginPassword.value,
        }, {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
            }
        });

       
        if (response.status === 200) { 
            clearForm(); 

            const roles = response.data.roles; 
            if (roles && roles.length > 0) {
                
                if (roles.includes('ROLE_ADMIN')) {
                    router.push('/Admindashboard');  
                } else if (roles.includes('ROLE_USER')) {
                    router.push('/User/favoritos');  
                } else {
                    authErrorMessage.value = 'Rol no reconocido.';
                }
            } else {
                authErrorMessage.value = 'No se encontraron roles para el usuario.';
            }
        } else {
            authErrorMessage.value = 'Error: Respuesta de login no válida.';
        }
    } catch (error) {
       
        if (error.response && error.response.data) {
            authErrorMessage.value = error.response.data.message || 'Error en el inicio de sesión.';
        } else {
            authErrorMessage.value = 'Error en el inicio de sesión. Por favor, verifica tus credenciales.';
        }
        console.error('Error en submitLogin:', error);
    }
};
</script>

<template>
  <div class="login-page d-flex justify-content-center align-items-center">
    <div class="login-card shadow-lg animate__animated animate__fadeIn"> 
      <h2 class="title mb-3"><strong>Inicia tu Trueque</strong></h2>
      <form @submit.prevent="submitLogin">
        <div class="mb-2">
          <label for="loginEmail" class="form-label">Correo Electrónico</label>
          <input type="email" id="loginEmail" v-model="loginEmail" class="form-control" placeholder="Ingrese su correo electrónico" />
        </div>
        <div class="mb-2">
          <label for="loginPassword" class="form-label">Contraseña</label>
          <input type="password" id="loginPassword" v-model="loginPassword" class="form-control" placeholder="Ingrese su contraseña" />
        </div>
        <button type="submit" class="btn btn-gradient w-100 mt-2">Iniciar Sesión</button>
        <p class="text-danger">{{ formErrorMessage }}</p> 
        <p class="text-danger">{{ authErrorMessage }}</p> 
      </form>
      <p class="text-center mt-3">¿No tienes una cuenta? <router-link to="/register" class="text-primary">Regístrate aquí</router-link></p>
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
