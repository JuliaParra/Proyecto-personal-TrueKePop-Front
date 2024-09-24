<template>
    <div class="carousel-section">
      <h2 class="section-title">Los truekes más urgentes.</h2>
      <div id="carouselUrgentes" class="carousel slide" data-bs-interval="false">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselUrgentes" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselUrgentes" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselUrgentes" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
  
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row justify-content-center">
              <div class="col-md-4 mb-3" v-for="(title, index) in cardTitles.slice(0, 3)" :key="index">
                <div class="card-container slide-card">
                  <div class="card-front shadow">
                    <div class="image-container">
                      <img src="/src/assets/images/caravana.jpg" class="card-image" alt="Card Front" />
                    </div>
                    <h3 class="card-title">{{ title }}</h3>
                    <p class="card-subtitle">Encuentra el intercambio perfecto</p>
                  </div>
                  <div class="card-slide-info">
                    <img src="/src/assets/images/logo.png" class="rotating-logo" alt="Rotating Logo" />
                    <p class="card-text wants-item">Busco: Monopatín</p>
                    <h3 class="card-title">Trueke Disponible</h3>
                    <p class="card-text has-item">Bicicleta de montaña</p>
                    <button class="btn btn-outline-primary mt-3">Ver detalles</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div class="carousel-item">
            <div class="row justify-content-center">
              <div class="col-md-4 mb-3" v-for="(title, index) in cardTitles.slice(3, 6)" :key="index">
                <div class="card-container slide-card">
                  <div class="card-front shadow">
                    <div class="image-container">
                      <img src="/src/assets/images/caravana.jpg" class="card-image" alt="Card Front" />
                    </div>
                    <h3 class="card-title">{{ title }}</h3>
                    <p class="card-subtitle">Encuentra el intercambio perfecto</p>
                  </div>
                  <div class="card-slide-info">
                    <img src="/src/assets/images/logo.png" class="rotating-logo" alt="Rotating Logo" />
                    <p class="card-text wants-item">Busco: Monopatín</p>
                    <h3 class="card-title">Trueke Disponible</h3>
                    <p class="card-text has-item">Bicicleta de montaña</p>
                    <button class="btn btn-outline-primary mt-3">Ver detalles</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div class="carousel-item">
            <div class="row justify-content-center">
              <div class="col-md-4 mb-3" v-for="(title, index) in cardTitles.slice(6, 8)" :key="index">
                <div class="card-container slide-card">
                  <div class="card-front shadow">
                    <div class="image-container">
                      <img src="/src/assets/images/caravana.jpg" class="card-image" alt="Card Front" />
                    </div>
                    <h3 class="card-title">{{ title }}</h3>
                    <p class="card-subtitle">Encuentra el intercambio perfecto</p>
                  </div>
                  <div class="card-slide-info">
                    <img src="/src/assets/images/logo.png" class="rotating-logo" alt="Rotating Logo" />
                    <p class="card-text wants-item">Busco: Monopatín</p>
                    <h3 class="card-title">Trueke Disponible</h3>
                    <p class="card-text has-item">Bicicleta de montaña</p>
                    <button class="btn btn-outline-primary mt-3">Ver detalles</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselUrgentes" data-bs-slide="prev">
          <span class="carousel-control-prev-icon custom-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselUrgentes" data-bs-slide="next">
          <span class="carousel-control-next-icon custom-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
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
  .carousel-section {
    margin-bottom: 50px;
    text-align: left;
    margin: 6%;
  }
  
  .section-title {
    font-family: 'Poppins', sans-serif;
    font-size: 2.5rem;
    color: #1cbefd;
    margin-bottom: 20px;
    font-weight: bold;
  }
  
  .carousel-control-prev,
  .carousel-control-next {
    width: 8%;
    top: 50%;
    transform: translateY(-50%);
  }
  
  .carousel-control-prev-icon.custom-prev-icon,
  .carousel-control-next-icon.custom-next-icon {
    background-color: orange;
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
  
  .carousel-control-prev {
    left: -2%;
  }
  
  .carousel-control-next {
    right: -2%;
  }
  
  .carousel-inner {
    text-align: center;
  }
  
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
    margin: 0 auto;
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
    transition: background-color 0.8s ease, color 0.8s ease;
  }
  </style>
  