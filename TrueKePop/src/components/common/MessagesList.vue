
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const messages = ref([]);

const fetchMessages = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/messages');
        messages.value = response.data;
    } catch (error) {
        console.error('Error al cargar los mensajes:', error);
    }
};

// Método para eliminar un mensaje
const eliminarMensaje = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/api/messages/${id}`);
        messages.value = messages.value.filter(message => message.id !== id); 
        alert('Mensaje eliminado correctamente.');
    } catch (error) {
        console.error('Error al eliminar el mensaje:', error);
    }
};

onMounted(() => {
    fetchMessages();
});
</script>





<template>
    <div class="messages-container">
        <h3>Mensajes</h3>
        <ul>
            <li v-for="message in messages" :key="message.id">
                <strong>{{ message.ownerName }}</strong>: {{ message.content }}
                <button @click="eliminarMensaje(message.id)">🗑️ Borrar</button>
            </li>
        </ul>
    </div>
</template>


<style scoped>
.messages-container {
    padding: 20px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 5px;
}
</style>
