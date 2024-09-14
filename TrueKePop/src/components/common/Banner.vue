<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-10 banner-container">
        <router-link to="/registre" class="banner-link">
          <div class="banner">
            <img src="@/assets/images/Banner.png" alt="Banner de TrueKePop" class="img-fluid banner-image shadow rounded" />
            <div class="overlay">
              <span class="overlay-text">Comienza el cambio</span>
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
  margin-top: -3%;
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
  transition: all 0.5s ease;
}

.banner-image {
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: cover;
  transition: all 0.5s ease-in-out;
}

.overlay {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(78, 207, 233, 0.5), rgba(255, 122, 74, 0.5));
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
  opacity: 0;
}

.overlay-text {
  font-size: 3.5rem;
  font-weight: bold;
  background: linear-gradient(135deg, rgb(255, 68, 0), rgb(0, 213, 255));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4); /* Sombra para destacar */
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.banner:hover .overlay {
  top: 0;
  opacity: 1;
}

.banner:hover .banner-image {
  transform: scale(1.05);
  filter: brightness(1.1);
}

.banner:hover .overlay-text {
  opacity: 1;
}
</style>
