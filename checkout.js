document.getElementById("buy-button").addEventListener("click", async () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
  
    if (!name || !email) {
      alert("Por favor completá tu nombre y correo.");
      return;
    }
  
    try {
      const response = await fetch("/.netlify/functions/createPreference", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
  
      const data = await response.json();
  
      if (data.init_point) {
        window.location.href = data.init_point;
      } else {
        alert("Hubo un error al generar el link de pago.");
      }
    } catch (err) {
      console.error(err);
      alert("Error al conectar con el servidor.");
    }
  });
  