
// Bloquea errores de scripts externos
window.addEventListener('error', (event) => {
    if (event.filename.includes('share-modal.js')) {
      event.preventDefault();
      console.warn('Error en script externo bloqueado:', event.message);
    }
  }, true);

document.addEventListener("DOMContentLoaded", () => {
    console.log('Scripts cargados en la página:');
    document.querySelectorAll('script').forEach(script => {
      console.log(script.src || 'Script interno');
    });
  
    // 1. Debugging inicial (verifica que todo cargó)
    console.log("DOM cargado. Buscando botón...");
    
    // 2. Inicialización de Mercado Pago
    const mp = new MercadoPago('TEST-5e71e2f9-fe37-4db0-aeff-b55cf1b86a9a', {
        locale: 'es-AR'
    });

    // 3. Selección del botón con validación
    const checkoutBtn = document.getElementById("pagar");
    console.log("Botón encontrado:", checkoutBtn); // Debe mostrar el elemento en consola

    if (!checkoutBtn) {
        console.error("❌ Error: El botón no existe. Revisa:");
        console.error("- El ID en el HTML");
        console.error("- Errores de sintaxis previos");
        return;
    }

    // 4. Evento click seguro
    checkoutBtn.addEventListener("click", () => {
        console.log("Botón clickeado. Iniciando checkout...");
        mp.checkout({
            preference: {
                items: [{
                    title: "Mi Producto Increíble",
                    unit_price: 100,
                    quantity: 1,
                }]
            }
        });
    });
});
