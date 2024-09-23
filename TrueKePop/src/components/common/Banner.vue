<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-10 banner-container">
        <router-link to="/registre" class="banner-link">
          <div class="banner">
            <img src="@/assets/images/Banner.png" alt="Banner de TrueKePop" class="img-fluid banner-image shadow-lg rounded" />
            <div class="text-content">
              <h2 class="text-content-title">¡Únete al Trueke!</h2>
              <p class="text-content-description">Cambia lo que ya no usas disfruta del algo diferente.</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0;
}

.banner-link {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}

.banner {
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: box-shadow 0.3s ease;
  border-radius: 25px;
}

.banner-image {
  width: 100%;
  height: auto;
  max-height: 450px;
  object-fit: cover;
  transition: filter 0.5s ease-in-out;
}

.banner:hover .banner-image {
  filter: contrast(0.5) saturate(2) grayscale(0.9) blur(8px); 
  image-rendering: pixelated; 
}

.text-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.banner:hover .text-content {
  opacity: 3;
}

.text-content-title {
  font-size: 2.8rem;;
  font-weight: bold;
  color: white;
  text-align: center;
}

.text-content-description {
  font-size: 1.8rem;
  color: rgb(254, 123, 0);
  text-align: center;
  margin-top: 10px;
}
</style>
