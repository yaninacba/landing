

// netlify/functions/createPreference.js

const mercadopago = require('mercadopago');

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Método no permitido' };
  }

  const { name, email } = JSON.parse(event.body);

  // 👉 Reemplazá esto con tu access token de prueba de Mercado Pago
  mercadopago.configure({
    access_token: 'TEST-8943941617833117-040501-563a8e8bdd4fd568ed87ac65c4b3a0bd-73616378'
  });

  try {
    const preference = {
      items: [
        {
          title: 'Curso Soporte Técnico - Tomo 1',
          unit_price: 3500,
          quantity: 1,
          currency_id: 'ARS'
        }
      ],
      payer: {
        name,
        email
      },
      back_urls: {
        success: 'https://soportetomo1.netlify.app/',
        failure: 'https://soportetomo1.netlify.app/',
        pending: 'https://soportetomo1.netlify.app/'
      }
      auto_return: 'approved'
    };

    const result = await mercadopago.preferences.create(preference);

    return {
      statusCode: 200,
      body: JSON.stringify({ init_point: result.body.init_point })
    };

  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error al crear preferencia' })
    };
  }
};






