<template>
    <div class="popup-container">
        <div class="popup-content">
            <button class="close-button" @click="$emit('close')">✖️</button>
            <h2>Enviar Mensaje a {{ currentItem.ownerName }}</h2>
            <textarea v-model="message" placeholder="Escribe tu mensaje aquí..."></textarea>
            <button @click="sendMessage">Enviar</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const props = defineProps(['currentItem']);
const emit = defineEmits(); 
const message = ref('');

const sendMessage = async () => {
    if (message.value.trim() === "") {
        alert("Por favor, escribe un mensaje antes de enviar.");
        return; 
    }

    try {
        const response = await axios.post('http://localhost:8080/api/messages', {
            ownerName: props.currentItem.ownerName, 
            content: message.value, // Cambia "messageContent" por "content"
        });

        alert(`Mensaje enviado a ${props.currentItem.ownerName} correctamente!`); 
        
        message.value = ''; 
        emit('close'); 
    } catch (error) {
        console.error('Error al enviar el mensaje:', error);
        alert('Error al enviar el mensaje. Inténtalo de nuevo más tarde.');
    }
};
</script>

<style scoped>
.popup-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.popup-content {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.close-button {
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    float: right;
}

textarea {
    width: 100%;
    height: 100px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-top: 10px;
    padding: 10px;
}

button {
    margin-top: 10px;
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
</style>
