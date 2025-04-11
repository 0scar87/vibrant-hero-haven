
// This file will be converted to a serverless function by Vercel
import type { VercelRequest, VercelResponse } from '@vercel/node';

const HUME_API_URL = 'https://api.hume.ai/v0';
const DEFAULT_ERROR_MESSAGE = 'Failed to communicate with Hume AI. Please check your API key.';

export default async function handler(request: VercelRequest, response: VercelResponse) {
  // Set CORS headers to allow requests from your deployed domain
  response.setHeader('Access-Control-Allow-Credentials', 'true');
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  response.setHeader('Access-Control-Allow-Headers', 
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');

  // Handle preflight requests
  if (request.method === 'OPTIONS') {
    return response.status(200).end();
  }

  // Only allow POST requests
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { endpoint, payload, apiKey } = request.body;

    if (!apiKey) {
      return response.status(400).json({ error: 'API key is required' });
    }

    if (!endpoint || !payload) {
      return response.status(400).json({ error: 'Missing required parameters' });
    }

    // Make the actual request to Hume AI
    const humeResponse = await fetch(`${HUME_API_URL}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(payload)
    });

    if (!humeResponse.ok) {
      const errorData = await humeResponse.json().catch(() => ({ message: DEFAULT_ERROR_MESSAGE }));
      console.error('Error from Hume API:', errorData);
      return response.status(humeResponse.status).json({ error: errorData.message || DEFAULT_ERROR_MESSAGE });
    }

    const data = await humeResponse.json();
    return response.status(200).json(data);
  } catch (error) {
    console.error('Server error:', error);
    return response.status(500).json({ error: 'Internal server error' });
  }
}
