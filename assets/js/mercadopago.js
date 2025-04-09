document.addEventListener("DOMContentLoaded", () => {
    const mp = new MercadoPago('TEST-5e71e2f9-fe37-4db0-aeff-b55cf1b86a9a', {
        locale: 'es-AR'  // Ajusta según tu país
    });

    const checkoutBtn = document.getElementById("checkout-btn");
    checkoutBtn.addEventListener("click", () => {
        // Crear preferencia directamente en el frontend (para casos simples)
        mp.checkout({
            preference: {
                items: [{
                    title: "Mi Producto Increíble",
                    unit_price: 100,
                    quantity: 1,
                }],
                // URLs de redirección (opcional)
                back_urls: {
                    success: "https://tudominio.netlify.app/success.html",
                    failure: "https://tudominio.netlify.app/failure.html",
                },
            },
            autoOpen: true,  // Abre el modal de pago automáticamente
        });
    });
});