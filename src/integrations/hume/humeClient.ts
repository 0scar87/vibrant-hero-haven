
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
    
    // This is a placeholder implementation - replace with actual Hume API call
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
    
    // This is a placeholder implementation - replace with actual Hume API call
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
  } catch (error) {
    console.error('❌ Error sending speech to Hume AI:', error);
    return {
      text: 'Sorry, there was an error processing your audio. Please try again later.'
    };
  }
};
