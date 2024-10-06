<template>
  <div class="card-container">
    <div class="card shadow">
      <div class="image-container">
        <img :src="item.image" class="card-image" :alt="item.name" />
      </div>
      <div class="card-body">
        <h3 class="card-title">{{ item.name }}</h3>
        <p class="card-subtitle">Encuentra el intercambio perfecto</p>
        <p class="card-text wants-item">Busco: {{ item.desiredItem }}</p>
        <p class="card-text has-item">{{ item.description }}</p>
        <p class="card-location"><i class="fa fa-map-marker"></i> {{ item.location }}</p>
        <div class="btn-container">
          <button class="btn btn-outline-primary" @click="$emit('show-details', item)">Más info</button>
          <button class="btn btn-message" @click="sendMessage(item)"><i class="fa fa-comment"></i></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: Object
});

// Función para manejar el envío de mensajes
const sendMessage = (item) => {
  alert(`Enviar mensaje sobre: ${item.name}`);
};
</script>

<style scoped>
.card-container {
  width: 100%;
  max-width: 100%;
  margin: 10px 0; /* Espacio vertical entre tarjetas */
}

.card {
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  background-color: #f8f9fa;
  transition: transform 0.2s ease;
  height: 350px; /* Altura fija para una apariencia de lista */
}

.card:hover {
  transform: translateY(-5px); /* Efecto de elevación al pasar el mouse */
}

.image-container {
  width: 100%;
  height: 150px; /* Altura de la imagen */
  border-radius: 15px 15px 0 0;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-body {
  padding: 15px;
  flex-grow: 1; /* Permite que el cuerpo de la tarjeta ocupe el espacio restante */
}

.card-title {
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 5px;
}

.card-subtitle {
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 10px;
}

.card-text {
  color: #555;
  margin-bottom: 5px;
}

.wants-item {
  color: #007bff; /* Color para el ítem deseado */
}

.has-item {
  color: #ff7b00; /* Color para la descripción del trueke */
}

.card-location {
  font-size: 0.9rem;
  color: #777;
  margin: 10px 0;
}

.btn-container {
  display: flex;
  justify-content: space-between; /* Espacio entre los botones */
}

.btn {
  border: 1px solid rgb(34, 207, 207);
  color: rgb(34, 207, 207);
  background-color: transparent;
  border-radius: 20px;
  padding: 8px 16px;
  transition: background-color 0.3s, color 0.3s;
  flex: 1; /* Permite que los botones ocupen el espacio disponible */
  margin-right: 5px; /* Espacio entre los botones */
}

.btn:hover {
  background-color: rgba(34, 207, 207, 0.2);
  color: #fff;
}

.btn-message {
  background-color: #fff; /* Color de fondo para el botón de mensaje */
  border: 1px solid rgb(34, 207, 207);
  color: rgb(34, 207, 207);
  border-radius: 20px;
  padding: 8px 16px;
  transition: background-color 0.3s, color 0.3s;
}

.btn-message:hover {
  background-color: rgb(34, 207, 207);
  color: #fff; /* Cambia el color al pasar el mouse */
}
</style>
