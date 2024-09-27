<script setup>
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
        <router-link to="/login" class="btn btn-outline login-button me-3">Inicio sesión</router-link>
        <router-link to="/registre" class="btn btn-outline-warning sell-button">Trueke</router-link>
      </div>
    </div>
  </header>
</template>

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
}
</style>
