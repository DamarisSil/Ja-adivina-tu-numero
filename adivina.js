document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('adivinar-btn');
    const mensaje = document.getElementById('mensaje');
  
    btn.addEventListener('click', function() {
      let min = 1;
      let max = 100;
      let intentos = 0;
  
      while (min <= max) {
        let medio = Math.floor((min + max) / 2);
        let confirmacion = confirm(`¿Tu número es igual o mayor a ${medio}?`);
  
        if (confirmacion) {
          min = medio + 1;
        } else {
          max = medio - 1;
        }
  
        intentos++;
  
        if (min === max) {
          mensaje.textContent = `Tu número es el ${min}, excelente decisión. Total de intentos: ${intentos}`;
          break;
        }
      }
    });
  });
  