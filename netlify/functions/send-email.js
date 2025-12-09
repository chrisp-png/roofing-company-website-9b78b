const { Resend } = require('resend');
const API_KEY = process.env.RESEND_API_KEY;
const resend = new Resend(API_KEY);

exports.handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const data = JSON.parse(event.body);

    // 1. **Data Extraction:** Parse your form fields (name, email, message, etc.)
    const { name, email, phone, message } = data;

    // 2. **API Key Check (optional but good practice):**
    if (!API_KEY) {
      console.error('RESEND_API_KEY not set.');
      return { statusCode: 500, body: JSON.stringify({ message: 'Email service error (Key Missing)' }) };
    }

    // 3. **Resend API Call:**
    const response = await resend.emails.send({
      from: 'onboarding@resend.dev', // Use your verified domain or Resend's default
      to: 'leads@allphaseusa.com', // The recipient address shown on your form
      subject: `New Lead from Website - ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    if (response.error) {
        console.error('Resend Error:', response.error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Failed to send email via Resend.', error: response.error }),
        };
    }

    // 4. **Success Response:**
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email successfully sent.', id: response.data.id }),
    };

  } catch (error) {
    console.error('Parsing/Function Error:', error);
    return { statusCode: 500, body: JSON.stringify({ message: 'Internal server error.' }) };
  }
};
