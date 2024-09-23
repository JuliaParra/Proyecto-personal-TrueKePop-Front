<template>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-4 mb-4" v-for="(title, index) in cardTitles" :key="index">
          <div class="card-container slide-card">
            <div class="card-front shadow">
              <div class="image-container">
                <img src="../assets/images/caravana.jpg" class="card-image" alt="Card Front" />
              </div>
              <h3 class="card-title">{{ title }}</h3>
              <p class="card-subtitle">Encuentra el intercambio perfecto</p>
            </div>
            <div class="card-slide-info">
              <!-- Logo con efecto de rotación en bucle -->
              <img src="../assets/images/logo.png" class="rotating-logo" alt="Rotating Logo" />
              <p class="card-text wants-item">Busco: Monopatín</p>
              <h3 class="card-title">Trueke Disponible</h3>
              <p class="card-text has-item"> Bicicleta de montaña</p>
              <button class="btn btn-outline-primary mt-3">Ver detalles</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const titles = ['Trueke Directo', 'Escucho Ofertas'];
  
  const generateRandomTitles = (numCards) => {
    let randomTitles = [];
    for (let i = 0; i < numCards; i++) {
      const randomIndex = Math.floor(Math.random() * titles.length);
      randomTitles.push(titles[randomIndex]);
    }
    return randomTitles;
  };
  
  const cardTitles = ref(generateRandomTitles(8));
  </script>
  
  <style scoped>
  .card-container {
    position: relative;
    width: 100%;
    max-width: 350px;
    height: 300px;
    overflow: hidden;
    border-radius: 20px;
    background-color: #f8f9fa;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
  
  .card-front {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: #fff;
  }
  
  .image-container {
    width: 100%;
    height: 200px;
    border-radius: 15px;
    overflow: hidden;
    margin-bottom: 15px;
  }
  
  .card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .card-slide-info {
    position: absolute;
    top: 0;
    left: 100%;
    width: 100%;
    height: 100%;
    padding: 20px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: left 2s ease;
  }
  
  .card-container:hover .card-slide-info {
    left: 0;
  }
  
  
  @keyframes rotateLogo {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  }
  
  .rotating-logo {
    width: 80px;
    height: 80px;
    border-radius: 10px;
    object-fit: contain;
    margin-bottom: 15px;
    animation: rotateLogo 7s infinite; 
  }
  
  .card-title {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 1.4rem;
    color: #333;
    text-align: center;
  }
  
  .card-subtitle {
    font-size: 0.9rem;
    color: #ffa43c;
    text-align: center;
    margin-top: 10px;
  }
  
  .card-text.has-item {
    font-size: 1.1rem;
    color: #e7984f;
    margin-bottom: 15px;
  }
  
  .card-text.wants-item {
    font-size: 1.1rem;
    color: #4ecfe9;
  }
  
  .btn-outline-primary {
    border: 1px solid #4ecfe9;
    color: #4ecfe9;
    background-color: transparent;
    border-radius: 30px;
    transition: background-color 0.8s ease, color 0.8s ease;
  }
  
  .btn-outline-primary:hover {
    background-color: #ffb65d;
    color: #fff;
    box-shadow: 0 4px 8px rgba(0, 123, 255, 0.2);
  }
  </style>
  