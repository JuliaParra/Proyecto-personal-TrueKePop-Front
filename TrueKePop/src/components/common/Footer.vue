<template>
    <footer class="footer bg-light py-3 border-top">
      <div class="container d-flex flex-column flex-md-row align-items-center justify-content-between">
        <p class="mb-0">&copy; 2024 TruekePop. Todos los derechos reservados.</p>
        <div class="footer-links d-flex mt-2 mt-md-0">
          <a href="#" class="footer-link me-3">Términos y Condiciones</a>
          <a href="#" class="footer-link me-3">Política de Privacidad</a>
          <a href="#" class="footer-link">Contacto</a>
        </div>
      </div>
    </footer>
  </template>
  
  <style scoped>
  .footer {
    background: linear-gradient(135deg, #F0F4F8, #E8EBF2);
    color: #FF7A4A;
  }
  
  .footer-link {
    color: #ffa585;
    text-decoration: none;
    font-weight: bold;
    font-size: 12px;
  }
  
  .footer-link:hover {
    color: #FF7A4A;
  }
  
  p {
    font-size: 14px;
  }
  
  @media (min-width: 768px) {
    .footer-links {
      margin-top: 0;
    }
  }
  </style>
  