exports.handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Parse the incoming request body
    const data = JSON.parse(event.body);
    const { name, email, phone, message, service } = data;

    // Log the form submission (you can later integrate with email service)
    console.log('Form submission:', { name, email, phone, message, service });

    // For now, just return success
    // TODO: Integrate with email service like SendGrid, Mailgun, or AWS SES
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true, 
        message: 'Form submitted successfully' 
      })
    };
  } catch (error) {
    console.error('Error processing form:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Failed to process form submission' 
      })
    };
  }
};
