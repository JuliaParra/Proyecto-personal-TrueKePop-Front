import { ref } from 'vue';

const showModal = ref(false);
const trueke = ref(null);

const useModal = {
  showModal: (item) => {
    trueke.value = item;
    showModal.value = true;
    
    // Muestra el modal usando Bootstrap
    const modal = new bootstrap.Modal(document.getElementById('truekeModal'));
    modal.show();
  },
  closeModal: () => {
    showModal.value = false;
    
    // Cierra el modal usando Bootstrap
    const modal = new bootstrap.Modal(document.getElementById('truekeModal'));
    modal.hide();
  },
  trueke,
};

export default useModal;
