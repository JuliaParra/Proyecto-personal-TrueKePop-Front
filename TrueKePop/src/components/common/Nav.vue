<template>
    <nav class="navigation navbar navbar-expand-md bg-light py-1">
      <div class="container-fluid">
        <div class="navbar-nav">
          <router-link to="/urgente" class="nav-link nav-button">Urgente</router-link>
          <router-link to="/escuchoOfertas" class="nav-link nav-button">Escucho Ofertas</router-link>
          <router-link to="/directo" class="nav-link nav-button">Directo</router-link>
          <router-link to="/novedades" class="nav-link nav-button">Novedades</router-link>
        </div>
      </div>
    </nav>
  </template>
  
  <style scoped>
  .navigation {
    background-color: #ffffff;
  }
  
  .nav-button {
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 14px;
    margin-right: 20px;
    padding: 10px 15px;
    color: #000000;
  }
  
  .nav-button:hover {
    color: #4ecfe9;
  }
  
  @media (max-width: 768px) {
    .nav-button {
      margin-right: 10px;
      padding: 8px 10px;
    }
  }
  </style>
  