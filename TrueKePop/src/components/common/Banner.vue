<template>
  <div class="container-fluid px-0">
    <div class="row mx-0">
      <div class="col-12 px-0">
        <router-link to="/register" class="banner-link">
          <div class="banner-container">
            <div class="banner shadow-lg">
              <img src="@/assets/images/Banner.png" alt="Banner de TrueKePop" class="img-fluid banner-image" />
              <div class="text-content">
                <h2 class="text-content-title">¡Únete al Trueke!</h2>
                <p class="text-content-description"><strong>Cambia lo que ya no usas, disfruta de algo diferente.</strong> </p>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-fluid,
.row {
  width: 100%;
  margin: 0;
  padding: 0;
}

.banner-link {
  width: 100%;
  display: block;
}

.banner-container {
  width: 100vw;
  background-color: #FE7B00;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
  background-size: 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.banner {
  position: relative;
  overflow: hidden;
  max-width: 1200px;
  width: 100%;
  max-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.banner-image {
  width: 100%;
  height: auto;
  object-fit: contain;
  transition: filter 0.5s ease-in-out;
}


.banner-container:hover .banner-image {
  filter: brightness(0.8);
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
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.5s ease;
}


.banner-container:hover .text-content {
  opacity: 1;
}

.text-content-title {
  font-size: 3rem;
  font-weight: bold;
  color: white;
  text-align: center;
}

.text-content-description {
  font-size: 2.4rem;
  color: rgb(254, 123, 0);
  text-align: center;
  margin-top: 10px;
}
</style>
