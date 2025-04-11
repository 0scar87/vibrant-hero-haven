
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
    
    // Due to CORS restrictions, we'll use a mock response for now
    // In a production environment, you would use a proxy server or serverless function
    // to make the API call to Hume AI
    
    console.log('ℹ️ Using mock response due to CORS restrictions');
    
    // Simulate API latency
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Provide a simulated response based on the user's input
    let responseText = "";
    const lowercaseText = request.text.toLowerCase();
    
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
    
    /* 
    // This is the actual API call that would be used if CORS was not an issue
    // or if there was a backend proxy in place
    const response = await fetch('https://api.hume.ai/v0/text/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${HUME_API_KEY}`
      },
      body: JSON.stringify({
        text: request.text,
        model: 'hume-chat-v1', // Replace with the correct model name from Hume
      })
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error('❌ Hume API error:', errorData);
      throw new Error(errorData.message || 'Failed to get response from Hume AI');
    }
    
    const data = await response.json();
    console.log('📥 Received response from Hume AI:', data);
    
    return {
      text: data.text || 'Sorry, I could not process your request.',
    };
    */
    
  } catch (error) {
    console.error('❌ Error sending text to Hume AI:', error);
    return {
      text: 'Sorry, there was an error processing your request. This might be due to CORS restrictions when calling the Hume API directly from a browser. In a production environment, this would be handled through a backend proxy.'
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
    
    // Due to CORS restrictions, we'll use a mock response for now
    console.log('ℹ️ Using mock response for speech input due to CORS restrictions');
    
    // Simulate API latency
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    return {
      text: "I've received your audio message. In a production environment, this would be processed through a backend proxy to avoid CORS issues. For now, I'm responding with this placeholder message.",
    };
    
    /* 
    // This is the actual API call that would be used if CORS was not an issue
    // or if there was a backend proxy in place
    const response = await fetch('https://api.hume.ai/v0/speech/transcribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${HUME_API_KEY}`
      },
      body: JSON.stringify({
        audio: request.audioData,
        model: 'hume-speech-v1', // Replace with the correct model name from Hume
      })
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error('❌ Hume API error:', errorData);
      throw new Error(errorData.message || 'Failed to get response from Hume AI');
    }
    
    const transcriptionData = await response.json();
    console.log('🎤 Transcribed speech:', transcriptionData);
    
    // Now send the transcribed text to the text API
    const textResponse = await sendTextToHume({ text: transcriptionData.text });
    
    // Optional: Convert the text response back to speech
    // This would require another API call to Hume's text-to-speech endpoint
    
    return {
      text: textResponse.text,
      // audioUrl: responseData.audioUrl, // If Hume provides an audio URL
    };
    */
  } catch (error) {
    console.error('❌ Error sending speech to Hume AI:', error);
    return {
      text: 'Sorry, there was an error processing your audio. This might be due to CORS restrictions when calling the Hume API directly from a browser. In a production environment, this would be handled through a backend proxy.'
    };
  }
};
