
/**
 * Hume AI API Client for text and speech conversations
 */

// Retrieve API key based on environment or localStorage
const getHumeApiKey = () => {
  // First check environment variables (for local development with .env file)
  const envApiKey = import.meta.env.VITE_HUME_API_KEY || '';
  
  // If not available, check localStorage (for Lovable environment)
  const localStorageKey = localStorage.getItem('hume_api_key') || '';
  
  return envApiKey || localStorageKey;
};

// Get current API key
let HUME_API_KEY = getHumeApiKey();

// Function to update API key
export const setHumeApiKey = (apiKey: string) => {
  HUME_API_KEY = apiKey;
  localStorage.setItem('hume_api_key', apiKey);
  return true;
};

// Check if API key is available
export const isHumeConfigured = () => Boolean(HUME_API_KEY);

// Refresh API key from storage (useful after setting)
export const refreshApiKey = () => {
  HUME_API_KEY = getHumeApiKey();
  return isHumeConfigured();
};

export interface HumeTextRequest {
  text: string;
}

export interface HumeSpeechRequest {
  audioData: string; // base64 encoded audio
}

export interface HumeResponse {
  text: string;
  audioUrl?: string;
}

// Helper function to determine if we're in development mode and should use mocks
const shouldUseMocks = () => {
  // Check if we're in a development environment without a real API endpoint
  return import.meta.env.DEV && !import.meta.env.VITE_USE_REAL_API;
};

// Determine the API URL based on environment
const getApiUrl = () => {
  // In production with Vercel, this will be the relative path to the API route
  return import.meta.env.PROD ? '/api/hume' : '/api/hume';
};

/**
 * Send text to Hume AI and get a response
 */
export const sendTextToHume = async (request: HumeTextRequest): Promise<HumeResponse> => {
  try {
    console.log('📤 Sending text to Hume AI:', request.text);
    
    // Refresh API key before using
    refreshApiKey();
    
    // If API key is not available, return a message prompting for API key configuration
    if (!isHumeConfigured()) {
      console.warn('⚠️ Hume API key not configured');
      return {
        text: "API key not configured. Please add your Hume API key in the API Key settings."
      };
    }

    // Use mock responses during development or testing if needed
    if (shouldUseMocks()) {
      console.log('ℹ️ Using mock response for development');
      return getMockTextResponse(request.text);
    }
    
    // Make request to our serverless function which will handle the Hume API call
    const response = await fetch(getApiUrl(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        endpoint: 'text/chat',
        apiKey: HUME_API_KEY,
        payload: {
          text: request.text,
          model: 'hume-chat-v1', // Replace with the correct model name from Hume
        }
      })
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error('❌ API error:', errorData);
      throw new Error(errorData.error || 'Failed to get response from Hume AI');
    }
    
    const data = await response.json();
    console.log('📥 Received response from Hume AI:', data);
    
    return {
      text: data.message?.text || data.text || 'Sorry, I could not process your request.',
    };
    
  } catch (error) {
    console.error('❌ Error sending text to Hume AI:', error);
    return {
      text: 'Sorry, there was an error processing your request. Please try again later.'
    };
  }
};

/**
 * Send speech to Hume AI and get a response
 */
export const sendSpeechToHume = async (request: HumeSpeechRequest): Promise<HumeResponse> => {
  try {
    console.log('🎤 Sending audio to Hume AI');
    
    // Refresh API key before using
    refreshApiKey();
    
    // If API key is not available, return a message prompting for API key configuration
    if (!isHumeConfigured()) {
      console.warn('⚠️ Hume API key not configured');
      return {
        text: "API key not configured. Please add your Hume API key in the API Key settings."
      };
    }
    
    // Use mock responses during development or testing
    if (shouldUseMocks()) {
      console.log('ℹ️ Using mock response for speech input');
      return {
        text: "I've received your audio message and processed it successfully."
      };
    }
    
    // Make request to our serverless function which will handle the Hume API call
    const response = await fetch(getApiUrl(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        endpoint: 'speech/transcribe',
        apiKey: HUME_API_KEY,
        payload: {
          audio: request.audioData,
          model: 'hume-speech-v1', // Replace with the correct model name from Hume
        }
      })
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error('❌ API error:', errorData);
      throw new Error(errorData.error || 'Failed to process speech with Hume AI');
    }
    
    const transcriptionData = await response.json();
    console.log('🎤 Transcribed speech:', transcriptionData);
    
    // Send the transcribed text to the text API
    const textResponse = await sendTextToHume({ 
      text: transcriptionData.text || "Sorry, I couldn't understand the audio" 
    });
    
    return textResponse;
    
  } catch (error) {
    console.error('❌ Error sending speech to Hume AI:', error);
    return {
      text: 'Sorry, there was an error processing your audio. Please try again later.'
    };
  }
};

// Mock response generator for development and testing
const getMockTextResponse = (text: string): HumeResponse => {
  // Simulate API latency
  // Provide a simulated response based on the user's input
  let responseText = "";
  const lowercaseText = text.toLowerCase();
  
  if (lowercaseText.includes("not feeling") || lowercaseText.includes("sick") || lowercaseText.includes("ill")) {
    responseText = "I'm sorry to hear you're not feeling well. Make sure to get plenty of rest and fluids. If symptoms persist, consider consulting a healthcare professional.";
  } else if (lowercaseText.includes("hello") || lowercaseText.includes("hi")) {
    responseText = "Hello there! How can I assist you today?";
  } else if (lowercaseText.includes("help")) {
    responseText = "I'm here to help! Feel free to ask me any questions or let me know what's on your mind.";
  } else if (lowercaseText.includes("weather")) {
    responseText = "I don't have access to real-time weather data, but I'd be happy to discuss other topics with you!";
  } else if (lowercaseText.includes("thank")) {
    responseText = "You're welcome! Is there anything else I can help you with?";
  } else {
    responseText = "Thank you for sharing that with me. Is there anything specific you'd like to talk about or any questions you have?";
  }
  
  return {
    text: responseText,
  };
};
