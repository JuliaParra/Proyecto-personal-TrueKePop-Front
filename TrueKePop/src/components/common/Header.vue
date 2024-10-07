<script setup>
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/authStore'; 

const route = useRoute();
const router = useRouter();
const authStore = useAuthStore(); 

const isUserPage = computed(() => authStore.isAuthenticated);
const userName = computed(() => authStore.userName); 


const showLogout = ref(false);


const logout = () => {
  authStore.logout();
  router.push('/login'); 
  showLogout.value = false; 
};


const toggleLogoutMenu = () => {
  showLogout.value = !showLogout.value;
};
</script>

<template>
  <header class="header container-fluid py-3 border-bottom">
    <div class="row align-items-center justify-content-between">
      
      <div class="col-12 col-md-auto d-flex align-items-center">
        <img src="@/assets/images/logo.png" alt="TrueKePop Logo" class="logo-image me-2" />
        <router-link to="/" class="logo-link text-decoration-none">
          <h1 class="m-0 d-flex align-items-center">
            <span class="true">TrueK</span><span class="kepop">ePop</span>
          </h1>
        </router-link>
      </div>
      
      <div class="col-12 col-md flex-grow-1">
        <input type="text" class="form-control search-bar" placeholder="Search items..." />
      </div>
      
      <div class="col-12 col-md-auto d-flex justify-content-md-end justify-content-center">
        <div v-if="isUserPage">
          <p class="welcome-text" @click="toggleLogoutMenu">Hola, {{ userName }}</p>
          <button v-if="showLogout" @click="logout" class="btn btn-outline-danger">Cerrar sesión</button>
        </div>
        <div v-else>
          <router-link to="/login" class="btn btn-outline login-button me-3">Inicio sesión</router-link>
          <router-link to="/register" class="btn btn-outline-warning sell-button">Trueke</router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>


<style scoped>
.header {
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.true {
  color: rgb(34, 207, 207);
}

.kepop {
  color: #ff8e38;
}

.logo-image {
  height: 50px;
}

.search-bar {
  width: 100%;
  border-radius: 20px;
  border: 1px solid #FF7A4A;
}

.welcome-text {
  font-size: 16px;
  color: #30ccbdfd;
  font-weight: bold;
}

.login-button {
  color: rgb(34, 207, 207);
  border-color: rgb(34, 207, 207);
}

.login-button:hover {
  color: #ff7b00;
  border-color: #F92D00;
}

.sell-button {
  color: #ff785a;
  border-color: #ff702e;
}

.sell-button:hover {
  color: #ffffff;
  background-color: rgb(34, 207, 207);
  border-color: #fe811a;
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    text-align: center;
  }
  
  .search-bar {
    margin-bottom: 10px;
  }
  
  .login-button, .sell-button {
    width: 100%;
    margin-bottom: 10px;
  }

  .welcome-text {
    margin-bottom: 10px;
  }
}
</style>
