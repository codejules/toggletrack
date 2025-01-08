/* import type { APIRoute } from 'astro';
import { contactSchema } from '@/schemas/contact';
const accessKey = import.meta.env.WEB3FORMS_ACCESS_KEY;

export const post: APIRoute = async ({ request }) => {
  try {
    const formData = await request.json();

    // Validate form data
    contactSchema.parse(formData);

    // Send data to Web3Forms
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: {accessKey}, // Use the key here securely
        ...formData,
      }),
    });

    if (!response.ok) {
      return new Response(JSON.stringify({ error: 'Error submitting form' }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}; */